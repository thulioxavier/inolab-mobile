import React, { Fragment, useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import * as Linking from "expo-linking";
import * as S from "./styles";
import { GetContentById } from "../../services/api";
import { Alert } from "react-native";

export const ViewContent = ({ route }: any) => {
  const navigation = useNavigation();
  const { idContent, name } = route.params;

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
      const result = await GetContentById(idContent);
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

          <S.Label style={{ color: "black", textAlign: "justify" }}>
            {body}
          </S.Label>
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
                  color="#00C880"
                  style={{ marginRight: 5 }}
                />
                <S.Label
                  style={{ fontWeight: "bold", color: "#484848" }}
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

  const ExamplesContent = (examples: Array<object>) => {
    return (
      <Fragment>
        {examples?.map((item, key) => {
          return (
            <Fragment key={key}>
              <S.SectionTitle numberOfLines={1}>{item?.title}</S.SectionTitle>

              <S.Label style={{ color: "black" }}> • {item?.body}</S.Label>
            </Fragment>
          );
        })}
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

  const caseContentInfo = () => {
    if (select.init) {
      return Body(values?.abstract, values?.body);
    } else if (select.play) {
      return PlayContent(values?.content_Videos);
    } else if (select.example) {
      return ExamplesContent(values?.examples);
    } else {
      return ReferencesContent(values?.references);
    }
  };

  return (
    <Fragment>
      <S.Container>
        <S.Header>
          <S.ButtomHeader
            color="#FFF"
            style={S.Styles.Shadow}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon name="arrow-left" size={24} color="#333333" />
          </S.ButtomHeader>
          <S.Hello>Conteúdo</S.Hello>

          <S.ButtomHeader color="#00C880" style={S.Styles.Shadow}>
            <Icon name="menu" size={24} color="#FAFAFA" />
          </S.ButtomHeader>
        </S.Header>

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
                navigation.navigate("Question", {idContent: values?.id});
              }}
            >
              <S.Label style={{ fontSize: 16 }}>Iniciar</S.Label>
            </S.ButtonPlay>
          ) : null}
        </S.Content>
      </S.Container>
    </Fragment>
  );
};
