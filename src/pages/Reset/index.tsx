import { useNavigation } from "@react-navigation/native";
import React, { Fragment, useRef, useState } from "react";
import { Alert, Platform } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import Icon from "react-native-vector-icons/Feather";
import { RegisterUser } from "../../services/api";
import * as S from "./styles";

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

export const Reset: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(true);
  const [acept, setAcept] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

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

  const handleSubmit = async () => {
    navigation.navigate("Home");
  };

  const Requere = () => {
    return (
      <>
        <S.Label style={{ color: "#E75353" }}>*</S.Label>
      </>
    );
  };

  return (
    <Fragment>
      <S.Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <S.Form>
          <S.ViewTitle>
            <S.Title>RECUPERAR SENHA</S.Title>
            <S.Label
              style={{
                fontSize: 16,
                fontWeight: "normal",
                color: "#616161",
                marginTop: 15,
              }}
            >
              Um e-mail será enviado com a sua nova senha.
            </S.Label>
          </S.ViewTitle>
          <S.AreaInput>
            <S.Label>
              E-mail <Requere />
            </S.Label>
            <S.RowInput>
              <S.IconInput>
                <Icon name="at-sign" size={20} color="#FFFF" />
              </S.IconInput>
              <S.Input
                placeholder="Email Adress"
                keyboardType="email-address"
                onChangeText={(e) => setEmail(e)}
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

          <S.ViewButton>
            <S.AreaButton>
              <S.ButtonBack
                disabled={loading}
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Icon name="arrow-left" size={20} color="#00C880" />
              </S.ButtonBack>
              <S.ButtonRegister onPress={handleSubmit} disabled={loading}>
                {!loading ? (
                  <S.Label style={{ color: "#FFFF" }}>ENVIAR</S.Label>
                ) : (
                  <ActivityIndicator color="#FFF" size="small" />
                )}
              </S.ButtonRegister>
            </S.AreaButton>
          </S.ViewButton>
        </S.Form>
      </S.Container>
    </Fragment>
  );
};
