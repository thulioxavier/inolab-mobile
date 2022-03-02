import React, { Fragment, useEffect, useState } from "react";
import { Alert, Platform, Vibration } from "react-native";
import { GetQuestionsByContent } from "../../services/api";
import * as S from "./styles";
import { useClock } from 'react-native-timer-hooks';

const ArrayOptions = [
    {
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industr, Lorem Ipsum is simply dummy text of the printing and typesetting industr. Lorem Ipsum is simply dummy text of the printing and typesetting industr, Lorem Ipsum is simply dummy text of the printing and typesetting industr",
    },
];

const BodyQuestion =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industr, Lorem Ipsum is simply dummy text of the printing and typesetting industr. Lorem Ipsum is simply dummy text of the printing and typesetting industr, Lorem Ipsum is simply dummy text of the printing and typesetting industr, Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industr, Lorem Ipsum is simply dummy text of the printing and typesetting industr. Lorem Ipsum is simply dummy text of the printing and typesetting industr, Lorem Ipsum is simply dummy text of the printing and typesetting industr, Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industr, Lorem Ipsum is simply dummy text of the printing and typesetting industr. Lorem Ipsum is simply dummy text of the printing and typesetting industr, Lorem Ipsum is simply dummy text of the printing and typesetting industr";

const ArrayBackground = ["#00C880", "#FFBA1C", "#E75353", "#00A3FE"];

const ArrayEmojis = ["😂", "🤔", "🤓", "😱"];

export const Question = ({ route }: any) => {
    const [indexOptionSelect, setIndexOptionSelect] = useState<number | null>(null);
    const [values, setValues] = useState<any>([]);

    const [currentQuestion, setCurrentQuestion] = useState<number>(1);
    const [arrayQuestionCount, setArrayQuestionCount] = useState<Array<number>>([]);
    const [counter, start, pause, reset, isRunning] = useClock(0, 1000, false);
    const [min, setMin] = useState<number>(0)
    const [time, setTime] = useState<number>(0)

    const { idContent, name } = route.params;

    if(counter == 60){
        setMin(min+1)
        reset()
    }

    useEffect(()=>{
        setTime(time+1);
        
    },[counter])

    useEffect(() => {
        getQuestions();
        start()
    }, []);

    if(values[currentQuestion]?.time === time){
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

    const nextQuestion = () => {
        const countQuestion = values.length;

        if (currentQuestion < countQuestion) {
            setCurrentQuestion(currentQuestion + 1);
            setArrayQuestionCount([...[]])
            reset()
            setMin(0);
        } else {

        }
    }

    return (
        <Fragment>
            <S.Container>
                <S.Header></S.Header>
                <S.Scroll>
                    <S.Content>
                        <S.RowHeader>
                            <S.QuestionsCount>Questão: {currentQuestion}/{values.length}</S.QuestionsCount>
                            <S.Time style={{color: values[currentQuestion]?.time < time ? "#E75353" : "#00C880"}}>{min < 10 ? "0"+min : min}:{counter}</S.Time>
                        </S.RowHeader>
                        <S.RowContent>
                            {
                                values?.map((item: any, key: number) => {
                                    return(
                                        <Fragment key={key}>
                                            <S.Circle style={{backgroundColor: (currentQuestion-1) === key ? "#ECAE52" : (currentQuestion-1) > key ? "#00C880" : "#DDD"}}></S.Circle>
                                        </Fragment>
                                    )
                                })
                            }

                        </S.RowContent>
                        <S.QuestionContent>
                            <S.QuestionContentScroll nestedScrollEnabled>
                                <S.LabelQuestion>{values[currentQuestion - 1]?.body}</S.LabelQuestion>
                            </S.QuestionContentScroll>
                        </S.QuestionContent>

                        {values[currentQuestion - 1]?.options?.map((item: any, key: number) => {
                            return (
                                <Fragment key={key}>
                                    <S.Options
                                        background="#DDD"
                                        onPress={() => {
                                            setIndexOptionSelect(key);
                                        }}
                                        style={{
                                            backgroundColor:
                                                key === indexOptionSelect
                                                    ? "#acacac"
                                                    : ArrayBackground[key],
                                        }}
                                    >
                                        <S.IconOptions>{ArrayEmojis[key]}</S.IconOptions>
                                        <S.LabelOptions style={{ color: "#FFFF" }}>
                                            {item.body}
                                        </S.LabelOptions>
                                    </S.Options>
                                </Fragment>
                            );
                        })}
                        <S.H1>SUA RESPOSTA: </S.H1>
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

                        <S.AreaButton>
                            <S.ButtonNext onPress={() => {
                                nextQuestion()
                            }}>
                                <S.H1 style={{ color: '#f0f0f0', marginBottom: 0, fontSize: 18 }}> {currentQuestion !== values.length ?'Próximo' : 'Concluir'}</S.H1>
                            </S.ButtonNext>
                        </S.AreaButton>
                    </S.Content>
                </S.Scroll>
            </S.Container>
        </Fragment>
    );
};
