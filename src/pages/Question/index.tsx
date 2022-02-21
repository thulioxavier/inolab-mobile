import React, { Fragment, useState } from "react";
import * as S from "./styles";

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
    const [indexOptionSelect, setIndexOptionSelect] = useState<number | null>(
        null
    );

    return (
        <Fragment>
            <S.Container>
                <S.Header></S.Header>
                <S.Scroll>
                    <S.Content>
                        <S.RowHeader>
                            <S.QuestionsCount>Questão: 06/20</S.QuestionsCount>
                            <S.Time>00:05</S.Time>
                        </S.RowHeader>

                        <S.QuestionContent>
                            <S.QuestionContentScroll nestedScrollEnabled>
                                <S.LabelQuestion>{BodyQuestion}</S.LabelQuestion>
                            </S.QuestionContentScroll>
                        </S.QuestionContent>

                        {ArrayOptions.map((item, key) => {
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
                        <S.H1>Sua Resposta: </S.H1>
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
                            <S.ButtonNext>
                                <S.H1 style={{color: '#f0f0f0', margin: 0, fontSize: 18}}>Próximo</S.H1>
                            </S.ButtonNext>
                        </S.AreaButton>
                    </S.Content>
                </S.Scroll>
            </S.Container>
        </Fragment>
    );
};
