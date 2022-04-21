import React, { Fragment, useEffect, useRef, useState } from "react";
import { ActivityIndicator, Dimensions, Platform, useWindowDimensions, Vibration } from "react-native";
import { GetQuestionsByContent, PostAnswer } from "../../services/api";
import * as S from "./styles";
import { useClock } from 'react-native-timer-hooks';
import RenderHTML from "react-native-render-html";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import { COLORS } from "../../utils";
import { Header } from "../../components";

const ArrayBackground = [COLORS.primary, COLORS.red, COLORS.green, COLORS.blue];

const ArrayEmojis = ["😂", "🤔", "🤓", "😱"];

export const Question = ({ route }: any) => {

    const { width } = useWindowDimensions();
    const navigation = useNavigation();
    const screenWidth = Math.round(Dimensions.get('window').width);
    let QuestionW = ((screenWidth - 10) / 8);
    let offsetW = Math.round(((screenWidth-10) - QuestionW) / 2);
    const [indexOptionSelect, setIndexOptionSelect] = useState<number | null>(null);
    const [values, setValues] = useState<any>([]);
    const [loadingGet, setLoadingGet] = useState<boolean>(false);
    const [loadingGetStatus, setLoadingGetStatus] = useState<boolean>(false);
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [arrayQuestionCount, setArrayQuestionCount] = useState<Array<number>>([]);
    const [counter, start, pause, reset, isRunning] = useClock(0, 1000, false);
    const [min, setMin] = useState<number>(0)
    const [time, setTime] = useState<number>(0)
    const [ref, setRef] = useState<any>(0);
    const QuestionRef = useRef<any>(ref);
    const { idContent, name } = route.params;

    if (counter == 60) {
        setMin(min + 1)
        reset()
    }

    useEffect(() => {
        setTime(time + 1);

    }, [counter])

    useEffect(() => {
        getQuestions();
    }, []);

    if (values[currentQuestion]?.time === time) {
        Vibration.vibrate()
    }

    const getQuestions = async () => {
        setLoadingGet(true);
        try {
            await GetQuestionsByContent(idContent).then((response) => {

                if (response.data.status) {
                    setValues(response.data.data);
                    setLoadingGet(false);

                } else {
                    setValues([...[]])
                    setLoadingGet(false);

                }
            }).catch((reject) => {
                setLoadingGet(false);

            })
        } catch (error) {

            setLoadingGet(false);
        }
    };

    const ONE_SECOND_IN_MS = 1000;

    const PATTERN = [
        1 * ONE_SECOND_IN_MS,
        2 * ONE_SECOND_IN_MS,
        3 * ONE_SECOND_IN_MS
    ];

    const PATTERN_DESC =
        Platform.OS === "android"
            ? "wait 1s, vibrate 2s, wait 3s"
            : "wait 1s, vibrate, wait 2s, vibrate, wait 3s";

    const nextQuestion = async () => {

        if (indexOptionSelect !== null) {
            await answer();

            const countQuestion = values.length;

            if (currentQuestion < countQuestion) {
                setCurrentQuestion(currentQuestion + 1);
                setArrayQuestionCount([...[]])
                setIndexOptionSelect(0);
                reset()
                setMin(0);
            } else {

            }
        } else {
            if (currentStatusQuestion) {
                setCurrentQuestion(currentQuestion + 1);
                setArrayQuestionCount([...[]])
                setIndexOptionSelect(0);
                reset()
                setMin(0);
            }
        }
    }

    const [currentStatusQuestion, setCurrentStatusQuestion] = useState<boolean>(false);



    useEffect(() => {

        setLoadingGetStatus(true);
        setTimeout(() => {
            let auxCount = 0;

            values[currentQuestion]?.options?.map((item: any, key: number) => {
                if (item.answers.length > 0) {
                    auxCount++
                }
            });

            setCurrentStatusQuestion(auxCount > 0);
            setLoadingGetStatus(false);
        }, 10);

    }, [currentQuestion, values]);

    const answer = async () => {

        try {

            if (indexOptionSelect) {

                let option = values[currentQuestion]?.options[indexOptionSelect];

                let answer_res = {
                    id_option: option.id,
                    id_question: option.id_question,
                    status: option.correct,
                    time_spent: time,
                    difficulty: values[currentQuestion]?.difficulty,
                    id_user: 2,
                }

                await PostAnswer(answer_res).then((response) => {

                }).catch((reject) => {
                    console.log(reject);

                });

            }
        } catch (error) {

        }
    }

    const handleScrollEnd = (posX: any) => {
        let targatDay = Math.round(posX / QuestionW);
        setCurrentQuestion(targatDay + 1);
    }

    const scrollToDay = (question: any) => {
        let posX = ((question - 1) * QuestionW);
        setRef(posX);
        QuestionRef.current.scrollTo({ x: ref, y: 0, animated: true });
        setCurrentQuestion(parseInt(question))
    }

    return (
        <Fragment>
            <S.Container>

                <Header
                    title="LabQUIZ"
                    leftColor={COLORS.white100}
                    iconLeft="arrow-left"
                    btnLeft={() => { navigation.goBack() }}
                    rightColor={COLORS.primary}
                    iconRight="menu"
                    btnRight={() => { }}
                />

                {
                    loadingGet || loadingGetStatus ? (
                        <Fragment>
                            <ActivityIndicator color={COLORS.black} size="small" />
                        </Fragment>
                    ) : (
                        <S.Scroll>
                            <S.Content>
                                <S.RowContent
                                    ref={QuestionRef}
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    decelerationRate="fast"
                                    snapToInterval={QuestionW}
                                    contentContainerStyle={{ paddingLeft: offsetW, paddingRight: offsetW }}
                                    style={{ marginTop: 10 }}>
                                    {
                                        values?.map((item: any, key: number) => {
                                            return (
                                                <Fragment key={key}>
                                                    <S.AreaCircle width={QuestionW}>

                                                        <S.Circle
                                                            current={(currentQuestion) === key}
                                                            style={[{ backgroundColor: (currentQuestion) === key ? COLORS.primary : (currentQuestion) > key ? COLORS.yellow100 : COLORS.grey }, S.Styles.Shadow]}
                                                            onPress={() => { scrollToDay(key) }}
                                                        >
                                                            <S.LabelQuestion style={{ fontWeight: 'bold' }}>{key + 1}</S.LabelQuestion>
                                                        </S.Circle>
                                                    </S.AreaCircle>
                                                </Fragment>
                                            )
                                        })
                                    }

                                </S.RowContent>
                                <S.RowHeader>
                                    <S.QuestionsCount>Questão: {currentQuestion + 1}/{values.length}</S.QuestionsCount>
                                    {/* <S.Time style={{color: values[currentQuestion]?.time < time ? "#EB4A47" : "#527C91"}}>{min < 10 ? "0"+min : min}:{counter}</S.Time> */}
                                </S.RowHeader>
                                <S.QuestionContent style={S.Styles.Shadow}>
                                    <S.QuestionContentScroll nestedScrollEnabled>
                                        <RenderHTML contentWidth={width} source={{ html: values[currentQuestion]?.body }} />
                                    </S.QuestionContentScroll>
                                </S.QuestionContent>

                                {values[currentQuestion]?.options?.map((item: any, key: number) => {

                                    return (
                                        <Fragment key={key}>
                                            <S.Options

                                                disabled={currentStatusQuestion}
                                                background={
                                                    item.answers.length > 0 ?
                                                        (item.answers[0]?.status ? COLORS.green : COLORS.red) : COLORS.white100}

                                                onPress={() => {
                                                    setIndexOptionSelect(key);
                                                }}
                                                style={[
                                                    !currentStatusQuestion ?
                                                        {
                                                            borderWidth: 2,
                                                            borderColor:
                                                                key === indexOptionSelect
                                                                    ? COLORS.grey
                                                                    : ArrayBackground[key],
                                                        } : {}, S.Styles.Shadow]}
                                            >
                                                <S.IconOptions>{ArrayEmojis[key]}</S.IconOptions>
                                                <S.LabelOptions style={{ color: COLORS.black }}>
                                                    {item.body}
                                                </S.LabelOptions>
                                            </S.Options>
                                        </Fragment>
                                    );
                                })}

                                {
                                    currentStatusQuestion ? (
                                        <Fragment>
                                            <S.H1>Resposta certa: </S.H1>
                                            {values[currentQuestion]?.options?.map((item: any, key: number) => {

                                                if (item.correct) {
                                                    return (
                                                        <Fragment key={key}>
                                                            <S.Options
                                                                disabled={currentStatusQuestion}
                                                                background={COLORS.green}
                                                                onPress={() => {
                                                                    setIndexOptionSelect(key);
                                                                }}

                                                                style={S.Styles.Shadow}
                                                            >
                                                                <S.IconOptions>{ArrayEmojis[key]}</S.IconOptions>
                                                                <S.LabelOptions style={{ color: COLORS.black }}>
                                                                    {item.body}
                                                                </S.LabelOptions>
                                                            </S.Options>
                                                        </Fragment>
                                                    );
                                                } else {
                                                    return null;
                                                }

                                            })}
                                        </Fragment>
                                    ) : (
                                        <Fragment>
                                            <S.H1>Sua resposta: </S.H1>
                                            <S.ContentCardEmoji>
                                                {ArrayEmojis.map((item, key) => {
                                                    return (
                                                        <Fragment key={key}>
                                                            <S.CardEmoji

                                                                onPress={() => {
                                                                    setIndexOptionSelect(key);
                                                                }}
                                                                background={
                                                                    key !== indexOptionSelect
                                                                        ? COLORS.grey
                                                                        : ArrayBackground[key]
                                                                }
                                                            >
                                                                <S.IconOptions style={{ margin: 0, opacity: key !== indexOptionSelect ? 0.3 : 1 }}>
                                                                    {ArrayEmojis[key]}
                                                                </S.IconOptions>
                                                            </S.CardEmoji>
                                                        </Fragment>
                                                    );
                                                })}
                                            </S.ContentCardEmoji>
                                        </Fragment>
                                    )
                                }


                                <S.AreaButton>
                                    <S.ButtonNext onPress={() => {
                                        nextQuestion()
                                    }}>
                                        <S.H1 style={{ color: COLORS.white, marginBottom: 0, fontSize: 18 }}> {currentQuestion !== values.length ? 'Próximo' : 'Concluir'}</S.H1>
                                    </S.ButtonNext>
                                </S.AreaButton>
                            </S.Content>
                        </S.Scroll>
                    )
                }

            </S.Container>
        </Fragment >
    );
};
