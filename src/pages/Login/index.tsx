import { useNavigation } from "@react-navigation/native";
import React, { Fragment, useRef, useState } from "react";
import { Alert, Platform } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { RegisterUser } from "../../services/api";
import *as S from './styles';

type Data = {
    error?: object,
    resultToken?: object,
    resultUser?: object,
}

type ResultRequeste = {
    data: Data & object | string,
    error: object,
}

type ErrorRegister = {
    nameError: string | null,
    emailError: string | null,
    passwordError: string | null

}


export const Login: React.FC = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [visible, setVisible] = useState<boolean>(true);
    const [acept, setAcept] = useState<boolean>(false);
    const [errors, setErrors] = useState<object>({
        emailError: null,
        passwordError: null,
    });

    const nameInput = useRef();
    const emailInput = useRef();
    const passInput = useRef();

    const [err, setErr] = useState<boolean>(false);

    const Error = () => {

        let aux: boolean = false;

        if (!email) {
            errors.emailError = 'Campo e-mail é obrigatorio!';
            aux = true;
        } else {
            if (!email.includes('@')) {
                errors.emailError = 'Informe um e-mail valido, ex: (@gmail, @hotmail, @yahoo)';
                aux = true;
            } else {
                errors.emailError = null;
            }
        }

        if (!password) {
            errors.passwordError = 'Campo senha é obrigatorio!';
            aux = true;
        } else {
            errors.passwordError = null;
        }

        setErrors({ ...errors });
        setErr(aux);
        return aux;
    }

    const handleSubmit = async () => {
        if (!Error()) {
            await RegisterUser({ email, name, password })
                .then((result: ResultRequeste) => {
                    if (result.data.error) {
                        Alert.alert(result.data.error)
                    } else {
                        navigation.navigate('Home')
                    }
                }).catch((reject) => {
                    console.log(reject.error);
                });
        } else {
            return false;
        }
    }

    const Requere = () => {
        return (
            <>
                <S.Label style={{ color: '#E75353' }}>*</S.Label>
            </>
        )
    }

    return (
        <Fragment>


            <S.Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <S.Form>
                    <S.ViewTitle>
                        <S.Title>ENTRAR</S.Title>
                    </S.ViewTitle>
                    <S.AreaInput>
                        <S.Label>E-mail <Requere /></S.Label>
                        <S.RowInput>
                            <S.IconInput>
                                <Icon name="at-sign" size={20} color='#FFFF' />
                            </S.IconInput>
                            <S.Input
                                placeholder="Email Adress"
                                keyboardType="email-address"
                                onChangeText={(e) => setEmail(e)}
                                autoCapitalize="none"
                                autoCorrect={false}
                                ref={emailInput}
                                onSubmitEditing={() => { passInput.current.focus(); }}
                                returnKeyType="next"
                            />
                        </S.RowInput>
                        {err && errors.emailError ?
                            <S.ViewError>
                                <S.LabelError numberOfLines={1}>{errors.emailError}</S.LabelError>
                            </S.ViewError>
                            : null
                        }
                    </S.AreaInput>
                    <S.AreaInput>
                        <S.Label>Senha <Requere /></S.Label>
                        <S.RowInput>
                            <S.IconInput>
                                <Icon name="lock" size={20} color='#FFFF' />
                            </S.IconInput>
                            <S.Input
                                style={{ width: '70%' }}
                                secureTextEntry={visible}
                                placeholder="Password"
                                onChangeText={(e) => setPassword(e)}
                                autoCapitalize="none"
                                autoCorrect={false}
                                ref={passInput}
                                returnKeyType="go"
                                onSubmitEditing={handleSubmit}
                            />
                            <S.ButtonEye onPress={() => { setVisible(!visible) }}>
                                <Icon name={visible ? "eye" : "eye-off"} size={20} color='#FFFF' />
                            </S.ButtonEye>
                        </S.RowInput>
                        {err && errors.passwordError ?
                            <S.ViewError>
                                <S.LabelError>{errors.passwordError}</S.LabelError>
                            </S.ViewError>
                            : null
                        }
                    </S.AreaInput>
                    <S.Div>
                        <S.ResetPass>
                            <S.Label style={{ fontSize: 13, color: '#E75353' }}>Esqueceu a senha?</S.Label>
                        </S.ResetPass>
                    </S.Div>
                    <S.ViewButton>
                        <S.AreaButton>

                            <S.ButtonRegister onPress={handleSubmit}>
                                <S.Label style={{ color: '#FFFF' }}>
                                    ENTRAR
                                </S.Label>
                            </S.ButtonRegister>
                        </S.AreaButton>
                    </S.ViewButton>

                    <S.ViewButton>
                        <S.AreaButton>
                            <S.ButtonRegister onPress={() => { navigation.navigate('SingUp') }} color="#ffffff">
                                <S.Label style={{ color: '#585858', fontWeight: '400', fontSize: 15 }}>
                                    Ainda não tem uma conta?<S.Label style={{ color: '#141414', fontSize: 15 }}> Cadastre-se </S.Label>
                                </S.Label>
                            </S.ButtonRegister>
                        </S.AreaButton>
                    </S.ViewButton>
                </S.Form>
            </S.Container>

        </Fragment>
    )
}