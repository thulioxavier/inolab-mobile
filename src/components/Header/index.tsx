import React, { Fragment } from "react";
import *as S from "./styles";
import Icon from 'react-native-vector-icons/Feather';
import { COLORS } from "../../utils";
import * as Animatable from 'react-native-animatable';

export const Header = (props: any) => {
    return (
        <Fragment>
            <S.Header>
                <S.ButtomHeader color={props.leftColor} style={S.Styles.Shadow} onPress={() => { props?.btnLeft() }}>
                    <Icon name={props.iconLeft} size={24} color={COLORS.black} />
                </S.ButtomHeader>
                <S.Hello>{props.title}</S.Hello>

                {
                    props.iconRight === 'bell' ? (
                        <Animatable.View animation="tada" easing="ease-out" useNativeDriver iterationCount={3}>
                            <S.ButtomHeader color={props.rightColor} style={S.Styles.Shadow} onPress={() => { props?.btnRight() }} >
                                <Icon name={props.iconRight} size={24} color={COLORS.black} />
                            </S.ButtomHeader>
                        </Animatable.View>
                    ) : (
                        <S.ButtomHeader color={props.rightColor} style={S.Styles.Shadow} onPress={() => { props?.btnRight() }} >
                            <Icon name={props.iconRight} size={24} color={COLORS.black} />
                        </S.ButtomHeader>
                    )
                }

            </S.Header>
        </Fragment>
    )
}