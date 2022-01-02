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


export const Register = () => {

    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [visible, setVisible] = useState<boolean>(true);
    const [acept, setAcept] = useState<boolean>(false);
    const [errors, setErrors] = useState<object>({
        nameError: null,
        emailError: null,
        passwordError: null,
        aceptError: null,
    });

    const nameInput = useRef();
    const emailInput = useRef();
    const passInput = useRef();

    const [err, setErr] = useState<boolean>(false);

    const Error = () => {

        let aux: boolean = false;

        if (!name) {
            errors.nameError = 'Campo nome é obrigatorio!';
            aux = true;
        } else {
            errors.nameError = null;
        }

        if (!email) {
            errors.emailError = 'Campo e-mail é obrigatorio!';
            aux = true;
        } else {
            if (!email.includes('@')) {
                errors.emailError = 'Informe um e-mail valido!: @gmail, @hotmail, @yahoo';
                aux = true;
            } else {
                errors.emailError = null;
            }
        }

        if (!password) {
            errors.passwordError = 'Campo senha é obrigatorio!';
            aux = true;
        } else {
            if (password.length < 6) {
                errors.passwordError = 'A senha deve ter pelo menos 6 caracteres!';
                aux = true;
            } else {
                errors.passwordError = null;
            }
        }

        if (!acept) {
            errors.aceptError = true;
            aux = true;
        } else {
            errors.aceptError = null;
        }

        setErrors({ ...errors });
        return aux;
    }

    const handleSubmit = async () => {
        Error();
        setErr(Error());

        // if (!err) {
        //     await RegisterUser({ email, name, password }).then((result: ResultRequeste) => {
        //         console.log(result.data);
        //         if (result.data.error) {
        //             Alert.alert(result.data.error)
        //         } else {
        //             Alert.alert('Deu certo')
        //         }
        //     }).catch((reject) => {
        //         console.log(reject.error);
        //     });
        // } else {
        //     return false;
        // }

    }

    return (
        <Fragment>

            <S.Container
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <S.Scroll>
                    <S.Form>
                        <S.ViewTitle>
                            <S.Title>Registre-se</S.Title>
                        </S.ViewTitle>
                        <S.AreaInput>
                            <S.Label>Nome</S.Label>
                            <S.RowInput>
                                <S.IconInput>
                                    <Icon name="user" size={20} color='#FFFF' />
                                </S.IconInput>
                                <S.Input
                                    placeholder="Username"
                                    keyboardType="default"
                                    onChangeText={(e) => setName(e)}
                                    autoCapitalize="words"
                                    autoCorrect={false}
                                    returnKeyType="next"
                                    onSubmitEditing={() => { emailInput.current.focus(); }}
                                    blurOnSubmit={false}
                                />
                            </S.RowInput>
                            {err && errors.nameError ?
                                <S.ViewError>
                                    <S.LabelError>{errors.nameError}</S.LabelError>
                                </S.ViewError>
                                : null
                            }
                        </S.AreaInput>

                        <S.AreaInput>
                            <S.Label>E-mail</S.Label>
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
                            <S.Label>Senha</S.Label>
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
                        <S.AreaInput style={{ marginTop: -5 }} >
                            <S.Row>
                                <S.ButtonRadius select={acept} onPress={() => { setAcept(!acept) }}>
                                    <Icon name='check' size={14} color={`${acept ? "#FFF" : '#202020'}`} />
                                </S.ButtonRadius>
                                <S.LabelButtonRadius style={err && errors.aceptError ? { color: '#E75353' } : null}>Aceitar termos de uso.</S.LabelButtonRadius>
                            </S.Row>
                        </S.AreaInput>
                        <S.ViewButton>
                            <S.AreaButton>
                                <S.ButtonBack>
                                    <Icon name='arrow-left' size={20} color='#00C880' />
                                </S.ButtonBack>
                                <S.ButtonRegister onPress={handleSubmit}>
                                    <S.Label style={{ color: '#FFFF' }}>
                                        CADASTRAR
                                    </S.Label>
                                </S.ButtonRegister>
                            </S.AreaButton>
                        </S.ViewButton>
                    </S.Form>
                </S.Scroll>
            </S.Container>
        </Fragment>
    )
}