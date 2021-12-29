import React, { Fragment } from "react";
import Icon from 'react-native-vector-icons/Feather';
import *as S from './styles';

export const Performance = () => {
    return (
        <Fragment>
            <S.Content >
                <S.Conteiner style={S.Styles.Shadow}>
                    <S.Row>
                        <S.Card>
                            <S.LabelTitle>Acertos</S.LabelTitle>
                            <Icon name="arrow-up" size={14} color='#00C880' style={{ marginRight: 5 }} />
                            <S.Label>485</S.Label>
                        </S.Card>
                        <S.Card>
                            <S.LabelTitle>Erros</S.LabelTitle>
                            <Icon name="arrow-down" size={14} color='#E75353' style={{ marginRight: 5 }} />
                            <S.Label>85</S.Label>
                        </S.Card>
                        <S.Card>
                            <S.LabelTitle>Pontuação</S.LabelTitle>
                            <Icon name="activity" size={14} color='#ECAE52' style={{ marginRight: 5 }} />
                            <S.Label>3568</S.Label>
                        </S.Card>
                    </S.Row>
                </S.Conteiner>
            </S.Content>
        </Fragment>
    )
}