import { useNavigation } from "@react-navigation/native";
import React, { Fragment, useEffect, useRef, useState, useContext } from "react";
import { Alert, Platform, ActivityIndicator, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { LoginUser } from "../../services/api";
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserContexts from "../../contexts/UserContexts";

import * as S from "./styles";
import {Login as LoginImg } from "../../assets/icons";
import { COLORS } from "../../utils";

type Data = {
  error?: object;
  resultToken?: object;
  resultUser?: object;
};

type ResultRequeste = {
  data: (Data & object) | string;
  error: object;
};

type ErrorRegister = {
  nameError: string | null;
  emailError: string | null;
  passwordError: string | null;
};

export const Login: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(true);
  const [acept, setAcept] = useState<boolean>(false);

  const [errorLogin, setErrorLogin] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [errors, setErrors] = useState<object>({
    emailError: null,
    passwordError: null,
  });

  const emailInput = useRef();
  const passInput = useRef();
  const [err, setErr] = useState<boolean>(false);

  const Error = () => {
    let aux: boolean = false;

    if (!email) {
      errors.emailError = "Campo e-mail é obrigatorio!";
      aux = true;
    } else {
      if (!email.includes("@")) {
        errors.emailError =
          "Informe um e-mail valido, ex: (@gmail, @hotmail, @yahoo)";
        aux = true;
      } else {
        errors.emailError = null;
      }
    }

    if (!password) {
      errors.passwordError = "Campo senha é obrigatorio!";
      aux = true;
    } else {
      errors.passwordError = null;
    }

    setErrors({ ...errors });
    setErr(aux);
    return aux;
  };

  useEffect(() => {
    setTimeout(() => {
      setErrorLogin(false);
    }, 5000);
  }, [errorLogin]);

  const handleSubmit = async () => {
    if (!Error()) {
      setLoading(true);
      await LoginUser({ email, password })
        .then(async (result: ResultRequeste) => {
          if (!result.data.json) {
            setLoading(false);
            setErrorLogin(true);
          } else if (result.data.json.data.status) {

            await AsyncStorage.setItem("@token", result.data.json.data.TOKEN)

            navigation.navigate("Home");
            setLoading(false);
          } else {
            setLoading(false);
            setErrorLogin(true);
          }
        })
        .catch((reject) => {
          setLoading(false);
          setErrorLogin(true);
        });
    } else {
      return false;
    }
  };

  const Requere = () => {
    return (
      <>
        <S.Label style={{ color: COLORS.red }}>*</S.Label>
      </>
    );
  };

  return (
    <Fragment>
      <S.Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <S.Form>
        <Image source={LoginImg} style={{
              width: 250,
              height: 250,
              marginLeft: 'auto',
              marginRight: 'auto',
              resizeMode: 'contain'
            }}/>
          <S.ViewTitle>
            <S.Title>Entrar</S.Title>
          </S.ViewTitle>

          <S.AreaInput>
            <S.Label>
              E-mail <Requere />
            </S.Label>
            <S.RowInput>
              <S.IconInput>
                <Icon name="at-sign" size={24} color={COLORS.black} />
              </S.IconInput>
              <S.Input
                editable={!loading}
                placeholder="Email Adress"
                keyboardType="email-address"
                onChangeText={(e) => setEmail(e)}
                value={email}
                autoCapitalize="none"
                autoCorrect={false}
                ref={emailInput}
                onSubmitEditing={() => {
                  passInput.current.focus();
                }}
                returnKeyType="next"
              />
            </S.RowInput>
            {err && errors.emailError ? (
              <S.ViewError>
                <S.LabelError numberOfLines={1}>
                  {errors.emailError}
                </S.LabelError>
              </S.ViewError>
            ) : null}
          </S.AreaInput>

          <S.AreaInput>
            <S.Label>
              Senha <Requere />
            </S.Label>
            <S.RowInput>
              <S.IconInput>
                <Icon name="lock" size={24} color={COLORS.black} />
              </S.IconInput>
              <S.Input
                editable={!loading}
                style={{ width: "70%" }}
                secureTextEntry={visible}
                placeholder="Password"
                onChangeText={(e) => setPassword(e)}
                value={password}
                autoCapitalize="none"
                autoCorrect={false}
                ref={passInput}
                returnKeyType="go"
                onSubmitEditing={handleSubmit}
              />
              <S.ButtonEye
                onPress={() => {
                  setVisible(!visible);
                }}
              >
                <Icon
                  name={visible ? "eye" : "eye-off"}
                  size={24}
                  color={COLORS.black}
                />
              </S.ButtonEye>
            </S.RowInput>
            {err && errors.passwordError ? (
              <S.ViewError>
                <S.LabelError>{errors.passwordError}</S.LabelError>
              </S.ViewError>
            ) : null}
          </S.AreaInput>

          <S.Div>
            <S.ResetPass
              onPress={() => {
                navigation.navigate("Reset");
              }}
            >
              <S.Label style={{ fontSize: 13, color: COLORS.red }}>
                Esqueceu a senha?
              </S.Label>
            </S.ResetPass>
          </S.Div>
          <S.ViewButton>
            <S.AreaButton>
              <S.ButtonRegister onPress={handleSubmit}>
                {!loading ? (
                  <S.Label style={{ color: COLORS.black }}>Entrar</S.Label>
                ) : (
                  <ActivityIndicator color={COLORS.black} size="small" />
                )}
              </S.ButtonRegister>
            </S.AreaButton>
          </S.ViewButton>
          {errorLogin ? (
            <S.ViewButton>
              <S.AreaButton>
                <S.ErrorArea>
                  <S.Label style={{ color: COLORS.white }}>
                    Falha ao se autenticar!!
                  </S.Label>
                </S.ErrorArea>
              </S.AreaButton>
            </S.ViewButton>
          ) : null}

          <S.ViewButton>
            <S.AreaButton>
              <S.ButtonRegister
                onPress={() => {
                  navigation.navigate("SingUp");
                }}
                color={COLORS.white}
              >
                <S.Label
                  style={{ color: COLORS.black, fontWeight: "400", fontSize: 15 }}
                >
                  Ainda não tem uma conta?
                  <S.Label style={{ color: COLORS.black, fontSize: 15 }}>
                    {" "}
                    Cadastre-se{" "}
                  </S.Label>
                </S.Label>
              </S.ButtonRegister>
            </S.AreaButton>
          </S.ViewButton>
        </S.Form>
      </S.Container>
    </Fragment>
  );
};
