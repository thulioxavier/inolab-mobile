import { useNavigation } from "@react-navigation/native";
import React, { Fragment } from "react";
import { LogoGreen } from "../../assets/icons";
import { ImgPag1 } from "../../assets/img";
import *as S from './styles';

export const Intro: React.FC = () => {
    const navigation = useNavigation();

    return (
        <Fragment>
            <S.Container>
                <S.Img source={ImgPag1} style={{ resizeMode: 'contain' }} />
                <S.Logo source={LogoGreen} style={{ resizeMode: 'contain' }} />
                <S.P>
                    Lorem Ipsum is simply dummy
                    text of the printing and typesetting
                    industry.
                </S.P>

                <S.ButtonView>
                    <S.ButtonLogin onPress={() => {navigation.navigate('SingIn')}}>
                        <S.Label>ENTRAR</S.Label>
                    </S.ButtonLogin>

                    <S.ButtonRegister onPress={() => {navigation.navigate('SingUp')}}>
                        <S.Label>CADASTRE-SE</S.Label>
                    </S.ButtonRegister>
                </S.ButtonView>
            </S.Container>
        </Fragment>
    )
}