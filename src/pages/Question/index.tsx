import React, { Fragment, useEffect, useState } from "react";
import { Alert, Platform, useWindowDimensions, Vibration } from "react-native";
import { GetQuestionsByContent, PostAnswer } from "../../services/api";
import * as S from "./styles";
import { useClock } from 'react-native-timer-hooks';
import RenderHTML from "react-native-render-html";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

const ArrayBackground = ["#527C91", "#FFBA1C", "#EB4A47", "#00A3FE"];

const ArrayEmojis = ["😂", "🤔", "🤓", "😱"];

export const Question = ({ route }: any) => {

    const { width } = useWindowDimensions();
    const navigation = useNavigation();

    const [indexOptionSelect, setIndexOptionSelect] = useState<number>(0);
    const [values, setValues] = useState<any>([]);

    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [arrayQuestionCount, setArrayQuestionCount] = useState<Array<number>>([]);
    const [counter, start, pause, reset, isRunning] = useClock(0, 1000, false);
    const [min, setMin] = useState<number>(0)
    const [time, setTime] = useState<number>(0)

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
        start()
    }, []);

    if (values[currentQuestion]?.time === time) {
        Vibration.vibrate()
    }
    const getQuestions = async () => {
        try {
            await GetQuestionsByContent(idContent).then((response) => {

                if (response.data.status) {
                    setValues(response.data.data);
                } else {
                    setValues([...[]])
                }
            }).catch((reject) => {

            })
        } catch (error) {

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
        }

    }

    const [currentStatusQuestion, setCurrentStatusQuestion] = useState<boolean>(false);



    useEffect(() => {

        let auxCount = 0;

        values[currentQuestion]?.options?.map((item: any, key: number) => {
            if (item.answers.length > 0) {
                auxCount++
            }
        });

        setCurrentStatusQuestion(auxCount > 0);


    }, [currentQuestion, values]);

    const answer = async () => {

        try {

            let option = values[currentQuestion]?.options[indexOptionSelect];

            let answer_res = {
                id_option: option.id,
                id_question: option.id_question,
                status: option.correct,
                time_spent: time,
                difficulty: values[currentQuestion]?.difficulty,
                id_user: 1,
            }

            await PostAnswer(answer_res).then((response) => {

            }).catch((reject) => {

            });

        } catch (error) {

        }
    }

    return (
        <Fragment>
            <S.Container>
                <S.Header>
                    <S.ButtomHeader
                        color="#FAFAFA"
                        style={S.Styles.Shadow}
                        onPress={() => {
                            navigation.goBack();
                        }}
                    >
                        <Icon name="arrow-left" size={24} color="#333333" />
                    </S.ButtomHeader>
                    <S.Hello>LabQUIZ</S.Hello>
                    <S.ButtomHeader color="#527C91" style={S.Styles.Shadow}>
                        <Icon name="menu" size={24} color="#FAFAFA" />
                    </S.ButtomHeader>
                </S.Header>
                <S.Scroll>
                    <S.Content>
                        <S.RowHeader>
                            <S.QuestionsCount style={{ color: values[currentQuestion]?.options[indexOptionSelect].answers?.status ? "#EB4A47" : "#484848" }}>Questão: {currentQuestion}/{values.length}</S.QuestionsCount>
                            {/* <S.Time style={{color: values[currentQuestion]?.time < time ? "#EB4A47" : "#527C91"}}>{min < 10 ? "0"+min : min}:{counter}</S.Time> */}
                        </S.RowHeader>
                        <S.RowContent style={{ marginTop: 15 }}>
                            {
                                values?.map((item: any, key: number) => {
                                    return (
                                        <Fragment key={key}>
                                            <S.Circle style={{ backgroundColor: (currentQuestion) === key ? "#ECAE52" : (currentQuestion) > key ? "#527C91" : "#DDD" }}>
                                                <S.LabelQuestion style={{ fontWeight: 'bold' }}>{key + 1}</S.LabelQuestion>
                                            </S.Circle>
                                        </Fragment>
                                    )
                                })
                            }

                        </S.RowContent>
                        <S.QuestionContent>
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
                                                (item.answers[0]?.status ? "#527C91" : "#EB4A47") : "#DDD"}
                                        onPress={() => {
                                            setIndexOptionSelect(key);
                                        }}
                                        style={

                                            !currentStatusQuestion ?
                                                {
                                                    backgroundColor:
                                                        key === indexOptionSelect
                                                            ? "#acacac"
                                                            : ArrayBackground[key],
                                                } : {}}
                                    >
                                        <S.IconOptions>{ArrayEmojis[key]}</S.IconOptions>
                                        <S.LabelOptions style={{ color: "#FFFF" }}>
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

                                        if(item.correct){
                                            return (
                                                <Fragment key={key}>
                                                    <S.Options
    
                                                        disabled={currentStatusQuestion}
                                                        background={ "#527C91"}
                                                        onPress={() => {
                                                            setIndexOptionSelect(key);
                                                        }}
                                                    >
                                                        <S.IconOptions>{ArrayEmojis[key]}</S.IconOptions>
                                                        <S.LabelOptions style={{ color: "#FFFF" }}>
                                                            {item.body}
                                                        </S.LabelOptions>
                                                    </S.Options>
                                                </Fragment>
                                            );
                                        }else{
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
                                                            key === indexOptionSelect
                                                                ? "#acacac"
                                                                : ArrayBackground[key]
                                                        }
                                                    >
                                                        <S.IconOptions style={{ margin: 0 }}>
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
                                <S.H1 style={{ color: '#f0f0f0', marginBottom: 0, fontSize: 18 }}> {currentQuestion !== values.length ? 'Próximo' : 'Concluir'}</S.H1>
                            </S.ButtonNext>
                        </S.AreaButton>
                    </S.Content>
                </S.Scroll>
            </S.Container>
        </Fragment>
    );
};
