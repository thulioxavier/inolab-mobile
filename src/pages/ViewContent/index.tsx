import React, { Fragment, useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import * as Linking from "expo-linking";
import * as S from "./styles";
import { GetContentById } from "../../services/api";
import { Alert, Image, useWindowDimensions } from "react-native";
import Html from 'react-native-render-html';
import { Header } from "../../components";
import { COLORS } from "../../utils";
import { Game } from "../../assets/icons";
import * as Animatable from 'react-native-animatable';
export const ViewContent = ({ route }: any) => {
  const navigation = useNavigation();
  const { idContent, name } = route.params;
  const { width } = useWindowDimensions();

  const [visible, setVisible] = useState<boolean>(false);

  const [select, setSelect] = useState<Object>({
    init: true,
    play: false,
    example: false,
    ref: false,
  });

  const [values, setValues] = useState<any>();

  useEffect(() => {
    getContent();
  }, []);

  const getContent = async () => {
    try {
      const result = await GetContentById(Number(idContent));
      if (result?.data?.status) {
        setValues(result.data.response);
      } else {
        Alert.alert("Não foi possível lista as informações!");
      }
    } catch (error) {
      Alert.alert("Não foi possível lista as informações!");
    }
  };

  const Body = (abstract: string, body: string) => {
    return (
      <Fragment>
        <S.Container style={{ marginBottom: 80 }}>
          <S.SectionTitle>Resumo</S.SectionTitle>
          <S.Label style={{ color: "black", textAlign: "justify" }}>
            {abstract}
          </S.Label>
          <S.SectionTitle>{values?.title}</S.SectionTitle>
          <Html contentWidth={width} source={{ html: body }} />
        </S.Container>
      </Fragment>
    );
  };

  const PlayContent = (play: Array<object>) => {
    return (
      <Fragment>
        {play?.map((item, key) => {
          return (
            <Fragment key={key}>
              <S.ButtonLink
                onPress={() => {
                  openLink(item?.url);
                }}
              >
                <Icon
                  name="link"
                  size={19}
                  color={COLORS.black}
                  style={{ marginRight: 5 }}
                />
                <S.Label
                  style={{ fontWeight: "bold", color: COLORS.black }}
                  numberOfLines={1}
                >
                  {item?.title}
                </S.Label>
              </S.ButtonLink>
            </Fragment>
          );
        })}
      </Fragment>
    );
  };

  const ExamplesContent = (examples: string) => {
    return (
      <Fragment>
        <S.Container style={{ marginBottom: 80 }}>
          <Html contentWidth={width} source={{ html: examples }} />
        </S.Container>
      </Fragment>
    );
  };

  const ReferencesContent = (references: Array<object>) => {
    return (
      <Fragment>
        {references?.map((item, key) => {
          return (
            <Fragment key={key}>
              <S.Label style={{ color: "black" }}> • {item?.body}</S.Label>
            </Fragment>
          );
        })}
      </Fragment>
    );
  };

  const openLink = (link: string) => {
    Linking.openURL(link);
  };

  const ShowInfo = () => {
    return (
      <Fragment>
        <S.ModalR
          animationType="fade"
          visible={visible}
          transparent={true}
          onRequestClose={() => {
            setVisible(false);
          }}
        >
          <S.ModalContent>
            <S.ModalHeader color={COLORS.primary} >
              <S.ButtonIconClose
                onPress={() => {
                  setVisible(false);
                }}
              >
                <Icon
                  name="x-circle"
                  size={25}
                  color={COLORS.white}
                  style={{ marginRight: 5 }}
                />
              </S.ButtonIconClose>
            </S.ModalHeader>

            <S.ModalArea>
              <Animatable.Text animation="fadeIn" useNativeDriver style={{ marginBottom: 10 }}>
                <S.LabelTitle style={{ fontSize: 18 }}>
                  E vamos lá!
                </S.LabelTitle>
              </Animatable.Text>

              <Animatable.View animation="pulse" easing="ease-out" useNativeDriver iterationCount="infinite">
                <Image source={Game} style={{
                  marginRight: 'auto',
                  marginLeft: 'auto',
                  width: 210,
                  height: 100,
                  resizeMode: 'cover',
                }} />

              </Animatable.View>
              <S.ButtonPlayModal
                onPress={() => {
                  setVisible(false)
                  navigation.navigate("Question", { idContent: values?.id });
                }}
              >
                <Animatable.Text animation="rotate" easing="ease-out" useNativeDriver iterationCount={5}>
                  <Icon
                    name="play"
                    size={30}
                    color={COLORS.black}
                  />
                </Animatable.Text>
              </S.ButtonPlayModal>

            </S.ModalArea>
          </S.ModalContent>
        </S.ModalR>
      </Fragment>
    );
  };

  const caseContentInfo = () => {
    if (select.init) {
      return Body(values?.abstract, values?.body);
    } else if (select.play) {
      return PlayContent(values?.content_Videos);
    } else if (select.example) {
      return ExamplesContent(values?.example);
    } else {
      return ReferencesContent(values?.references);
    }
  };

  return (
    <Fragment>
      <S.Container>
        <Header iconLeft="arrow-left" btnLeft={() => { navigation.goBack() }} btnRight={() => { }} leftColor={COLORS.white100} rightColor={COLORS.primary} iconRight="menu" title="Conteúdo" />
        <S.Content>
          <S.SectionTitle numberOfLines={1}>{name}</S.SectionTitle>
          <S.TabRow>
            <S.TabButton
              select={select.init}
              onPress={() => {
                select.init = !select.init;
                select.play = false;
                select.example = false;
                select.ref = false;
                setSelect({ ...select });
              }}
            >
              <S.Label select={select.init}>Introdução</S.Label>
            </S.TabButton>
            <S.TabButton
              select={select.play}
              onPress={() => {
                select.init = false;
                select.play = !select.play;
                select.example = false;
                select.ref = false;
                setSelect({ ...select });
              }}
            >
              <S.Label select={select.play}>Mídia</S.Label>
            </S.TabButton>
            <S.TabButton
              select={select.example}
              onPress={() => {
                select.init = false;
                select.play = false;
                select.example = !select.example;
                select.ref = false;
                setSelect({ ...select });
              }}
            >
              <S.Label select={select.example}>Exemplo</S.Label>
            </S.TabButton>
            <S.TabButton
              select={select.ref}
              onPress={() => {
                select.init = false;
                select.play = false;
                select.example = false;
                select.ref = !select.ref;
                setSelect({ ...select });
              }}
            >
              <S.Label select={select.ref}>Referência</S.Label>
            </S.TabButton>
          </S.TabRow>
          {caseContentInfo()}
          {select.init ? (
            <S.ButtonPlay
              onPress={() => {
                setVisible(true)
                // navigation.navigate("Question", { idContent: values?.id });
              }}
            >
              <Animatable.Text animation="pulse" easing="ease-out" useNativeDriver iterationCount="infinite">
                <Icon
                  name="play"
                  size={30}
                  color={COLORS.black}
                />
              </Animatable.Text>
            </S.ButtonPlay>
          ) : null}
        </S.Content>
        {ShowInfo()}
      </S.Container>
    </Fragment>
  );
};
