import React, { Fragment } from "react";
import { ScrollView, Text, FlatList, View, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { Coroa } from "../../assets/icons";
import { PodiumUser } from "../../components";

import *as S from './styles';

const DATA: Array<object> = []

export const Podium = () => {

    const Item = ({ name }) => (
        <View style={styles.item}>
            <Text style={styles.name}>{name}</Text>
        </View>
    );

    const renderItem = ({ item }) => (
        <View>

            <PodiumUser values={item} />
        </View>
    );


    return (
        <Fragment>
            <S.Container>
                <S.TitleContent>
                    <S.Title>Ranking</S.Title>
                </S.TitleContent>
                <S.PodiumContent>
                    <S.PodiumArea>
                        <S.Avatar size="60px" source={{ uri: 'https://brasil.emeritus.org/wp-content/uploads/2020/01/gesta%CC%83o-de-pessoas-.jpg' }} color="#00A3FE" />
                        <S.Label numberOfLines={1}>Thulio</S.Label>
                        <S.PodiumCol color="#00A3FE" col="110px" style={{ borderTopLeftRadius: 5 }}>
                            <S.PodiumLabel size="50px">2</S.PodiumLabel>
                        </S.PodiumCol>
                    </S.PodiumArea>

                    <S.PodiumArea >
                        <S.AvatarContent>
                            <S.Coroa source={Coroa} />
                            <S.AvatarOne size="75px" source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgcnTBdrKlUehvNHl5dFGKzukdSfxceDk64w&usqp=CAU' }} style={{ resizeMode: 'cover' }} />
                            <S.Label numberOfLines={1}>Anna</S.Label>
                        </S.AvatarContent>
                        <S.PodiumCol color="#527C91" col="150px" style={{ borderTopRightRadius: 5, borderTopLeftRadius: 5 }} >
                            <S.PodiumLabel size="60px">1</S.PodiumLabel>
                        </S.PodiumCol>
                    </S.PodiumArea>

                    <S.PodiumArea >
                        <S.Avatar color="#EED600" source={{ uri: 'https://img.freepik.com/fotos-gratis/uma-bela-mulher-afro-americana-de-cabelo-encaracolado-sugere-clicar-em-pontos-de-link-em-um-espaco-de-copia-em-branco-para-mostrar-suportes-sobre-a-parede-branca-e-usar-um-macacao-laranja-basico-pessoas-e-conceito-de-publicidade_273609-49828.jpg?size=626&ext=jpg' }} />
                        <S.Label numberOfLines={1}>Julia</S.Label>
                        <S.PodiumCol color="#EED600" col="70px" style={{ borderTopRightRadius: 5 }} >
                            <S.PodiumLabel size="40px">3</S.PodiumLabel>
                        </S.PodiumCol>
                    </S.PodiumArea>

                </S.PodiumContent>
                <SafeAreaView style={styles.container}>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        initialScrollIndex={4}
                    />

                </SafeAreaView>


            </S.Container>
        </Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
