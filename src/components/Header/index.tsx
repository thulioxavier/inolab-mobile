import React, { Fragment } from "react";
import *as S from "./styles";
import Icon from 'react-native-vector-icons/Feather';
import { COLORS } from "../../utils";

export const Header = (props: any) => {
    return(
        <Fragment>
            <S.Header>
                    <S.ButtomHeader color={props.leftColor} style={S.Styles.Shadow} onPress={()=>{props?.btnLeft()}}>
                        <Icon name={props.iconLeft} size={24} color={COLORS.black} />
                    </S.ButtomHeader>
                    <S.Hello>{props.title}</S.Hello>
                    <S.ButtomHeader color={props.rightColor} style={S.Styles.Shadow} onPress={()=>{props?.btnRight()}} >
                        <Icon name={props.iconRight} size={24} color={COLORS.black} />
                    </S.ButtomHeader>
                </S.Header>
        </Fragment>
    )
}