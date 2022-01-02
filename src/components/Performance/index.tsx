import React, { Fragment } from "react";
import Icon from 'react-native-vector-icons/Feather';
import *as S from './styles';

export const Performance = () => {
    return (
        <Fragment>
            <S.Content >
                <S.Conteiner>
                    <S.Row horizontal={true} showsHorizontalScrollIndicator={false}>
                        <S.Card style={[S.Styles.Shadow, {marginLeft: 5}]}>
                            <S.LabelTitle>Acertos</S.LabelTitle>
                            <Icon name="arrow-up" size={20}  color='#00C880' style={{ marginRight: 5 }} />
                            <S.Label>485</S.Label>
                        </S.Card>
                        <S.Card style={[S.Styles.Shadow]}>
                            <S.LabelTitle>Erros</S.LabelTitle>
                            <Icon name="arrow-down" size={20} color='#E75353' style={{ marginRight: 5 }} />
                            <S.Label>85</S.Label>
                        </S.Card>
                        <S.Card style={[S.Styles.Shadow]}>
                            <S.LabelTitle>Pontuação</S.LabelTitle>
                            <Icon name="activity" size={20} color='#ECAE52' style={{ marginRight: 5 }} />
                            <S.Label>3568</S.Label>
                        </S.Card>
                        <S.Card style={[S.Styles.Shadow]}>
                            <S.LabelTitle>Ver Mais</S.LabelTitle>
                            <Icon name="grid" size={20} color='#526eec' style={{ marginRight: 5 }} />
                            <S.Label></S.Label>
                        </S.Card>
                    </S.Row>
                </S.Conteiner>
            </S.Content>
        </Fragment>
    )
}