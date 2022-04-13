import React, { Fragment } from "react";
import { Text, View } from "react-native";

import *as S from './styles'

interface Props {
    values: Array<Object>
}

export const PodiumUser = ({ values = [] }: Props) => {

    return (
        <Fragment>
            <S.Container>
                <S.Avatar source={{uri: values.url}} />
                <View
                    style={{
                        width: '60%',
                    }}
                >
                    <S.Name
                        numberOfLines={1}
                    >{values.name}</S.Name>
                    <S.Positon>Rancking: {values.positon}°</S.Positon>
                </View>
                <S.Lavel>Lv. {values.lavel}</S.Lavel>
            </S.Container>
        </Fragment>
    )
}