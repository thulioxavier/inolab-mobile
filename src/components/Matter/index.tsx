import React, { Fragment } from "react";
import { Alert } from "react-native";
import *as S from './styles';

interface Matter {
    values: Array<Object>
}

export const Matter = ({ values = [] }: Matter) => {
    return (
        <Fragment>
            <S.Content>
                <S.Scrool horizontal={true} showsHorizontalScrollIndicator={false}>
                    {values.map((item, index) => {
                        return (
                            <S.Item key={index}>
                                <S.ItemTitle>
                                    {item.name}
                                </S.ItemTitle>
                            </S.Item>
                        );
                    })}
                </S.Scrool>
            </S.Content>
        </Fragment>
    )
}