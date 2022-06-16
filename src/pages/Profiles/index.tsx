import { useNavigation } from "@react-navigation/native";
import React, { Fragment, useState } from "react";
import { Header, InputText } from "../../components";
import { useUser } from "../../hooks/user.hook";
import { COLORS } from "../../utils";
import * as S from './styled';

export const Profiles = () => {

    const { user } = useUser()
    const navigation: any = useNavigation();

    const [name, setName] = useState<string>()
    const [lastName, setLastName] = useState<string>()
    const [code, setCode] = useState<string>()
    const [email, setEmail] = useState<string>()

    const goBackPage = () => {
        navigation.navigate('HomeToAPP')
    }

    const json = { "name": "Thulio", "uuid": "ca71a3f5-79d8-4fd8-b047-b58d98af7c04", "avatar": "https://cdn-icons-png.flaticon.com/512/147/147144.png", "pointsbyuser": "935" }
    return (
        <Fragment>
            <Header title={`Perfil`} btnLeft={goBackPage} btnRight={() => { }} iconRight="tool" iconLeft="arrow-left" leftColor={COLORS.white100} rightColor={COLORS.white100} />
            <S.Container>
                <S.Scroll>

                    <S.Label style={{ textAlign: 'center' }}>Olá, {user.name}</S.Label>
                    <S.H6 style={{ textAlign: 'center' }}>{'26'} lv. #{'Prata'}</S.H6>
                    <S.H6 style={{ textAlign: 'center', fontSize: 10, marginBottom: 10 }}>{json['uuid']}</S.H6>
                    <S.H6 style={{ textAlign: 'right', fontSize: 12 }}>xp [1450/2000]</S.H6>
                    <S.AreaPoints>
                        <S.Points porc={"70"} />
                    </S.AreaPoints>

                    <S.CardLevel>

                    </S.CardLevel>

                    <S.CardPoints>

                    </S.CardPoints>

                    <InputText
                        placeholder="Nome"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="default"
                        value={name}
                        onChange={setName}
                        label={'Nome'}
                        returnKeyType="next"
                    />

                    <InputText
                        placeholder="Sobrenome"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="default"
                        value={lastName}
                        onChange={setLastName}
                        label={'Sobrenome'}
                        returnKeyType="next"
                    />

                    <InputText
                        placeholder="Matricula"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="number-pad"
                        value={code}
                        onChange={setCode}
                        label={'Matricula'}
                        returnKeyType="next"
                    />

                    <InputText
                        placeholder="E-mail"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        value={email}
                        onChange={setEmail}
                        label={'E-mail'}
                        returnKeyType="next"
                    />
                </S.Scroll>
            </S.Container>
        </Fragment>

    )
}