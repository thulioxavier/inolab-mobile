import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { Fragment, useRef, useState } from "react";
import { Platform, ActivityIndicator, Linking, Image } from "react-native";

import { WebView } from "react-native-webview";
import Icon from "react-native-vector-icons/Feather";
import { RegisterUser } from "../../services/api";
import * as S from "./styles";

import { Register as RegisterImg, Register_2 } from '../../assets/icons';
import { COLORS } from "../../utils";

type Data = {
  error?: object;
  resultToken?: object;
  resultUser?: object;
};


export const Register: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [registration, setRegistration] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(true);
  const [sexo, setSexo] = useState();

  const [acept, setAcept] = useState<boolean>(false);
  const [errors, setErrors] = useState<object>({
    nameError: null,
    lastNameError: null,
    emailError: null,
    passwordError: null,
    aceptError: null,
    sexoError: null,
    registrationError: null,
  });

  const [urlAvatar, setUrlAvatar] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const [showCreateAvatar, setShowCreateAvatar] = useState<boolean>(false);
  const [showAvatarDown, setShowAvatarDown] = useState<boolean>(false);
  const [prox, setProx] = useState<boolean>(false);
  const registrationInput = useRef();
  const lastNameInput = useRef();
  const emailInput = useRef();
  const passInput = useRef();

  const [nextPage, setNextPage] = useState(false);

  const [err, setErr] = useState<boolean>(false);

  const [erroModal, setErroModal] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const Error = () => {
    let aux: boolean = false;
    if (!name) {
      errors.nameError = "Campo nome é obrigatorio!";
      aux = true;
    } else {
      errors.nameError = null;
    }

    if (!lastName) {
      errors.lastNameError = "Campo Sobrenome é obrigatorio!";
      aux = true;
    } else {
      errors.lastNameError = null;
    }
    if (!registration) {
      errors.registrationError = "Campo matricula é obrigatorio!";
      aux = true;
    } else {
      errors.registrationError = null;
    }
    if (!email) {
      errors.emailError = "Campo e-mail é obrigatorio!";
      aux = true;
    } else {
      if (!email.includes("@")) {
        errors.emailError =
          "Informe um e-mail valido!: @gmail, @hotmail, @yahoo";
        aux = true;
      } else {
        errors.emailError = null;
      }
    }

    if (!password) {
      errors.passwordError = "Campo senha é obrigatorio!";
      aux = true;
    } else {
      if (password.length < 6) {
        errors.passwordError = "A senha deve ter pelo menos 6 caracteres!";
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
    setErr(aux);
    return aux;
  };

  const handleSubmit = async () => {
    if (!Error()) {
      setLoading(true);
      try {
        const result = await RegisterUser({
          email,
          name,
          password,
          registration,
          lastName,
        });
        if (result.data.status) {
          navigation.navigate("Home");
          setLoading(false);
        } else {
          setErroModal(result.error);
          setShow(true);
          setLoading(false);
        }
      } catch (error) {
        setErroModal("Tente novamente mais tarde!!");
        setShow(true);
        setLoading(false);
      }
    }
  };

  const Required = () => {
    return (
      <>
        <S.Label style={{ color: COLORS.red }}>*</S.Label>
      </>
    );
  }

  const AlertModal = () => (
    <Fragment>
      <S.Alert
        animationType="fade"
        visible={show}
        transparent={true}
        onRequestClose={() => {
          setShow(false);
        }}
      >
        <S.ModalContent>
          <S.ModalArea>
            <S.Label
              style={{
                fontSize: 16,
                textAlign: "center",
                marginBottom: 20,
                fontWeight: "100",
              }}
            >
              {erroModal}
            </S.Label>
            <S.ViewButton>
              <S.AreaButton>
                <S.ButtonRegister
                  onPress={() => {
                    setShow(false);
                  }}
                >
                  <S.Label style={{ color: COLORS.black }}>OK</S.Label>
                </S.ButtonRegister>
              </S.AreaButton>
            </S.ViewButton>
          </S.ModalArea>
        </S.ModalContent>
      </S.Alert>
    </Fragment>
  );

  return (
    <Fragment>
      <S.Container
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ paddingTop: StatusBar.currentHeight }}
      >
        <S.Form>
          <S.Scroll showsVerticalScrollIndicator={false} >
            <Image source={nextPage ? RegisterImg : Register_2} style={{
              width: 250,
              height: 250,
              marginLeft: 'auto',
              marginRight: 'auto',
              resizeMode: 'cover'
            }} />

            <S.ViewTitle style={{ marginTop: -30 }}>
              <S.Title>Cadastre-se</S.Title>
            </S.ViewTitle>

            <S.Row style={{
              justifyContent: 'space-between',
              marginTop: 25
            }}>

              <S.NextRegister current={nextPage === false} onPress={() => { setNextPage(false) }}>
                <Icon name="clipboard" size={28} color={COLORS.black} />
              </S.NextRegister>

              <S.NextRegister current={nextPage === true} onPress={() => { setNextPage(true) }}>
                <Icon name="shield" size={28} color={COLORS.black} />
              </S.NextRegister>
            </S.Row>

            {
              !nextPage ? (

                <Fragment>
                  <S.AreaInput>
                    <S.Label>
                      Nome <Required />
                    </S.Label>
                    <S.RowInput>
                      <S.IconInput>
                        <Icon name="user" size={24} color={COLORS.black} />
                      </S.IconInput>
                      <S.Input
                        editable={!loading}
                        placeholder="Nome"
                        keyboardType="default"
                        onChangeText={(e) => setName(e)}
                        value={name}
                        autoCapitalize="words"
                        autoCorrect={false}
                        returnKeyType="next"
                        onSubmitEditing={() => {
                          lastNameInput.current.focus();
                        }}
                        blurOnSubmit={false}
                      />
                    </S.RowInput>
                    {err && errors.nameError ? (
                      <S.ViewError>
                        <S.LabelError>{errors.nameError}</S.LabelError>
                      </S.ViewError>
                    ) : null}
                  </S.AreaInput>

                  <S.AreaInput>
                    <S.Label>
                      Sobrenome <Required />
                    </S.Label>
                    <S.RowInput>
                      <S.IconInput>
                        <Icon name="user" size={24} color={COLORS.black} />
                      </S.IconInput>
                      <S.Input
                        editable={!loading}
                        placeholder="Sobrenome"
                        keyboardType="default"
                        onChangeText={(e) => setLastName(e)}
                        value={lastName}
                        autoCapitalize="words"
                        autoCorrect={false}
                        returnKeyType="next"
                        ref={lastNameInput}
                        onSubmitEditing={() => {
                          registrationInput.current.focus();
                        }}
                        blurOnSubmit={false}
                      />
                    </S.RowInput>
                    {err && errors.lastNameError ? (
                      <S.ViewError>
                        <S.LabelError>{errors.lastNameError}</S.LabelError>
                      </S.ViewError>
                    ) : null}
                  </S.AreaInput>

                  <S.ViewButton style={{ marginTop: 30, marginBottom: 30 }}>
                    <S.AreaButton>
                      <S.ButtonBack
                        disabled={loading}
                        onPress={() => {
                          navigation.goBack();
                        }}
                      >
                        <Icon name="arrow-left" size={24} color={COLORS.primary} />
                      </S.ButtonBack>
                      <S.ButtonRegister onPress={() => {
                        if (name && lastName) {
                          setNextPage(true);
                        }

                        Error();

                      }} disabled={loading}>
                        {!loading ? (
                          <S.Label style={{ color: COLORS.black }}>Continuar</S.Label>
                        ) : (
                          <ActivityIndicator color="#f0f0f5" size="small" />
                        )}
                      </S.ButtonRegister>
                    </S.AreaButton>
                  </S.ViewButton>
                </Fragment>

              ) : (
                <Fragment>
                  <S.AreaInput>
                    <S.Label>
                      Matricula <Required />
                    </S.Label>
                    <S.RowInput>
                      <S.IconInput>
                        <Icon name="database" size={24} color={COLORS.black} />
                      </S.IconInput>
                      <S.Input
                        editable={!loading}
                        placeholder="Sua Matricula"
                        keyboardType="numeric"
                        onChangeText={(e) => setRegistration(e)}
                        value={registration}
                        autoCapitalize="none"
                        autoCorrect={false}
                        ref={registrationInput}
                        onSubmitEditing={() => {
                          emailInput.current.focus();
                        }}
                        returnKeyType="next"
                      />
                    </S.RowInput>
                    {err && errors.registrationError ? (
                      <S.ViewError>
                        <S.LabelError numberOfLines={1}>
                          {errors.registrationError}
                        </S.LabelError>
                      </S.ViewError>
                    ) : null}
                  </S.AreaInput>



                  <S.AreaInput>
                    <S.Label>
                      E-mail <Required />
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
                      Senha <Required />
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

                  <S.AreaInput style={{ marginTop: 5 }}>
                    <S.Row>
                      <S.ButtonRadius
                        select={acept}
                        onPress={() => {
                          setAcept(!acept);
                        }}
                      >
                        <Icon
                          name="check"
                          size={14}
                          color={COLORS.black}
                        />
                      </S.ButtonRadius>
                      <S.LabelButtonRadius
                        style={err && errors.aceptError ? { color: COLORS.red } : null}
                      >
                        Aceitar termos de uso.
                      </S.LabelButtonRadius>
                    </S.Row>
                  </S.AreaInput>

                  <S.ViewButton style={{ marginBottom: 30 }}>
                    <S.AreaButton>
                      <S.ButtonBack
                        disabled={loading}
                        onPress={() => {
                          setNextPage(false);
                          Error();
                        }}
                      >
                        <Icon name="arrow-left" size={24} color={COLORS.primary} />
                      </S.ButtonBack>
                      <S.ButtonRegister onPress={handleSubmit} disabled={loading}>
                        {!loading ? (
                          <S.Label style={{ color: COLORS.black }}>Cadastrar</S.Label>
                        ) : (
                          <ActivityIndicator color={COLORS.black} size="small" />
                        )}
                      </S.ButtonRegister>
                    </S.AreaButton>
                  </S.ViewButton>
                </Fragment>
              )
            }
          </S.Scroll>
        </S.Form>
        {AlertModal()}
      </S.Container>
    </Fragment>
  );
};
