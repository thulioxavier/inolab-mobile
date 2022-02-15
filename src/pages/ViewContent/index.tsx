import React, { Fragment, useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";
import { GetContent } from "../../services/api";
import { Text } from "react-native-paper";

export const ViewContent = ({ route }: any) => {
  const navigation = useNavigation();
  const { idContent, name } = route.params;

  const [select, setSelect] = useState<Object>({
    init: true,
    play: false,
    exemple: false,
    ref: false,
  });

  const [values, setValues] = useState<any>();

  useEffect(() => {
    getContent();
  }, []);

  const getContent = async () => {
    const result = await GetContent(idContent);
    setValues(result.data[0][0]);
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
                select.exemple = false;
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
                select.exemple = false;
                select.ref = false;
                setSelect({ ...select });
              }}
            >
              <S.Label select={select.play}>Mídia</S.Label>
            </S.TabButton>
            <S.TabButton
              select={select.exemple}
              onPress={() => {
                select.init = false;
                select.play = false;
                select.exemple = !select.exemple;
                select.ref = false;
                setSelect({ ...select });
              }}
            >
              <S.Label select={select.exemple}>Exemplo</S.Label>
            </S.TabButton>
            <S.TabButton
              select={select.ref}
              onPress={() => {
                select.init = false;
                select.play = false;
                select.exemple = false;
                select.ref = !select.ref;
                setSelect({ ...select });
              }}
            >
              <S.Label select={select.ref}>Referência</S.Label>
            </S.TabButton>
          </S.TabRow>

          <Text>{values?.body}</Text>
        </S.Content>
      </S.Container>
    </Fragment>
  );
};
