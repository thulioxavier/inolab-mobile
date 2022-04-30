import React, { useState, useEffect, Fragment } from "react";
import { Alert, FlatList, Text } from "react-native";
import { ListContentsModelus } from "../../services/api";
import Icon from "react-native-vector-icons/Feather";

import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../utils";
import { Header } from "../../components";

export const ViewContents = ({ route }: any) => {
  const navigation = useNavigation();

  const { id_module, name }: any = route.params;
  const [contents, setContents] = useState<any>([]);

  useEffect(() => {
    getContents();
  }, []);

  const getContents = async () => {
    try {
      const response: any = await ListContentsModelus(Number(id_module));
      setContents(response.data[0]);
    } catch (error) {
      Alert.alert("Não Foi Possivel Listar os Conteudos");
    }
  };

  const viewContent = (idContent: number, name: string) => {
    navigation.navigate("ViewContent", {
        idContent,
      name,
    });
  };
  return (
    <Fragment>
      <S.Container>
        <Header 
          iconRight="menu"
          iconLeft="arrow-left"
          title="Conteúdos"
          btnLeft={() => {navigation.goBack()}}
          btnRight={() => {}}
          leftColor={COLORS.white100} rightColor={COLORS.primary}
        />
        
        <S.AreaList>
          <S.TitlePage numberOfLines={1}>{name}</S.TitlePage>
          <FlatList
            data={contents}
            renderItem={({ item }) => {
              return (
                <Fragment>
                    <S.CardContent  style={S.Styles.Shadow} onPress={() => {viewContent(Number(item.id), item.title)}}>
                      <S.Title numberOfLines={1}>{item.title}</S.Title>
                      <S.SubTitle numberOfLines={1}>
                        {item.modules.name}
                      </S.SubTitle>
                      <S.Abstract numberOfLines={3}>{item.abstract}</S.Abstract>
                    </S.CardContent>
                </Fragment>
              );
            }}
            keyExtractor={(item) => item.id}
          />
        </S.AreaList>
      </S.Container>
    </Fragment>
  );
};
