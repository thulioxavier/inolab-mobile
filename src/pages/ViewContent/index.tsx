import React, { useState, useEffect, Fragment } from "react";
import { Alert, FlatList, Text } from "react-native";
import { ListContentsModelus } from "../../services/api";
import Icon from 'react-native-vector-icons/Feather';

import *as S from './styles'
import { useNavigation } from "@react-navigation/native";


export const ViewContent = ({ route }: any) => {

    const navigation = useNavigation();

    const { id_module, name }: any = route.params;
    const [contents, setContents] = useState<any>([])

    useEffect(() => {
        getContents();
    }, []);

    const getContents = async () => {
        try {
            const response: any = await ListContentsModelus(Number(id_module));
            setContents(response.data[0])
        } catch (error) {
            Alert.alert("Não Foi Possivel Listar os Conteudos");
        }
    }
    return (
        <Fragment>
            <S.Container>
                <S.Header>
                <S.ButtomHeader color="#FFF" style={S.Styles.Shadow} onPress={()=>{navigation.goBack()}}>
                        <Icon name="arrow-left" size={24} color='#333333' />
                    </S.ButtomHeader>
                    <S.Hello>Conteúdo</S.Hello>
                    <S.ButtomHeader color="#00C880" style={S.Styles.Shadow}>
                        <Icon name="menu" size={24} color='#FAFAFA' />
                    </S.ButtomHeader>
                </S.Header>
                <S.AreaList >
                    <S.TitlePage
                        numberOfLines={1}
                    >{name}</S.TitlePage>
                    <FlatList
                        data={contents}
                        renderItem={({ item }) => {
                            return (
                                <Fragment>
                                    <S.CardArea>
                                    <S.CardContent>
                                        <S.Title numberOfLines={1}>
                                            {item.title}
                                        </S.Title>
                                        <S.SubTitle numberOfLines={1}>{item.modules.name}</S.SubTitle>
                                        <S.Abstract numberOfLines={3}>{item.abstract}</S.Abstract>
                                    </S.CardContent>
                                    </S.CardArea>
                                </Fragment>
                            )
                        }}
                        keyExtractor={item => item.id}
                    />
                </S.AreaList>
            </S.Container>
        </Fragment>
    )
}