import { useNavigation } from "@react-navigation/native";
import React, { Fragment, useState } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import * as S from "./styles";
import { Logo } from "../../assets/icons";
import { useUser } from "../../hooks/user.hook";
import { useFonts, Inter_700Bold, Inter_500Medium } from '@expo-google-fonts/inter'
import { COLORS } from "../../utils";

export const Login = () => {

  useFonts({ Inter_700Bold, Inter_500Medium });
  
  const [visible, setVisible] = useState<boolean>(true);
  const navigation = useNavigation<any>();


  const messageError = 'Falha na autenticação!'

  const { user, inAuth, setEmail, setPassword, email, password, authError, setAuthError, loading, setLoading } = useUser()

  const [inputError, setInputError] = useState<{ email: boolean, password: boolean }>({ email: false, password: false });

  const handlerError = (email: string | null | undefined, password: string | null | undefined) => {
    if (email && password) {
      inputError.email = false;
      inputError.password = false;
      setInputError({ ...inputError });
      return true;
    }

    if (!email || !password) {

      inputError.email = !(!!email);
      inputError.password = !(!!password);
      setInputError({ ...inputError });

      console.log(inputError);

      setAuthError(true)
      return false
    }
  }

  const handlerLogin = async () => {

    try {
      setLoading(!loading);
      setAuthError(false);

      if (handlerError(email, password)) {
        await inAuth();
      }

    } catch (error) {
      setAuthError(true)
    } finally {
      setLoading(false);
    }
  }

  return (
    <Fragment>
      <S.Container>
        <S.Header>
          <S.Logo source={Logo} style={{ resizeMode: 'contain' }} />
          <S.H1>Entrar</S.H1>
        </S.Header>
        <S.Footer>

          {authError && (<S.Label style={[Style.error, { fontSize: 12 }]}>{messageError}</S.Label>)}

          <S.AreaInput>
            <S.Label>
              E-mail
            </S.Label>
            <S.RowInput>
              <S.IconInput>
                <Icon name="at-sign" size={24} color={COLORS.black} />
              </S.IconInput>
              <S.Input
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={(e) => setEmail(e)}
                value={email}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
              />
            </S.RowInput>
          </S.AreaInput>

          {(authError && inputError.email) && (<S.Label style={Style.error}>O campo e-mail é obrigatorio!</S.Label>)}


          <S.AreaInput>
            <S.Label>
              Senha
            </S.Label>
            <S.RowInput>
              <S.IconInput>
                <Icon name="lock" size={24} color={COLORS.black} />
              </S.IconInput>
              <S.Input
                placeholder="Senha"
                secureTextEntry={visible}
                onChangeText={(e) => setPassword(e)}
                value={password}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="go"
                onSubmitEditing={handlerLogin}
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
          </S.AreaInput>

          {(authError && inputError.password) && (<S.Label style={Style.error}>O campo senha é obrigatorio!</S.Label>)}

          <S.ViewButton style={{ marginTop: 30 }}>
            <S.AreaButton>
              <S.ButtonRegister onPress={handlerLogin} disabled={loading}>
                {!loading ? (
                  <S.Label style={{ color: COLORS.black }}>Entrar</S.Label>
                ) : (
                  <ActivityIndicator color={COLORS.black} size="small" />
                )}
              </S.ButtonRegister>
            </S.AreaButton>
          </S.ViewButton>

          <S.ViewButton style={{ marginTop: 15 }}>
            <S.ButtomGoToPage onPress={() => { navigation.navigate('SingUp') }}  disabled={loading}>
              <S.Label style={{ color: COLORS.primary }}>Cadastre-se</S.Label>
            </S.ButtomGoToPage>
          </S.ViewButton>

        </S.Footer>

      </S.Container>
    </Fragment>
  )
};


const Style = StyleSheet.create({
  error: {
    color: COLORS.red,
    fontWeight: '100',
    fontSize: 11,
    marginLeft: 5
  }
})
