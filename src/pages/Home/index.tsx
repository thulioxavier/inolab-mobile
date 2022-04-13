import React, { Fragment, useEffect, useState } from "react";
import *as S from "./styles";
import { Performance, Modules, Matter } from '../../components/index';
import Icon from 'react-native-vector-icons/Feather';
import { ListNewModules, ListSubjects } from "../../services/api";
import { Alert, Image, Text, View } from "react-native";
import { homeScreen } from "../../assets/icons";


export const Home = () => {

    const [name, setName] = useState<string>('Thúlio');
    const [focus, setFocus] = useState<boolean>(false);
    const [subjects, setSubjects] = useState<any>([]);
    const [newModules, setNewModules] = useState<any>([]);

    const [loading, setLoading] = useState<{ matter: boolean }>({
        matter: true,
    })

    useEffect(() => {
        Subjects();
    }, []);

    useEffect(() => {
        GetNewModules();
    }, []);

    const Subjects = async () => {
        const result: any = await ListSubjects();
        setSubjects(result.data)
        loading.matter = false,
            setLoading({ ...loading });
    }

    const GetNewModules = async () => {
        const result: any = await ListNewModules();
        setNewModules(result.data);
    }

    const PlaceholderSubjects = () => {
        return (
            <Fragment>
                <Matter values={[{ name: 'carregando' }, { name: 'carregando' }, { name: 'carregando' }, { name: 'carregando' }]} />
            </Fragment>
        )
    }

    return (
        <Fragment>

            <S.Container>
                <S.Header>
                    <S.ButtomHeader color="#FFF" style={S.Styles.Shadow}>
                        <Icon name="menu" size={24} color='#333333' />
                    </S.ButtomHeader>
                    <S.Hello>Olá, {name}! </S.Hello>
                    <S.ButtomHeader color="#527C91" style={S.Styles.Shadow}>
                        <Icon name="bell" size={24} color='#FAFAFA' />
                    </S.ButtomHeader>
                </S.Header>

                <S.Content>

                    <S.Row>
                        <View>
                            <Text style={{fontSize: 30, fontWeight: 'bold', marginBottom: 5, color: '#484848'}}>InoLab</Text>
                            <Text style={{fontSize: 14, color: '#484848'}}>Desafiando seu conhecimento.</Text>
                        </View>
                        <Image source={homeScreen}
                            style={{
                                width: 150,
                                height: 150,
                                resizeMode: 'cover',
                                marginLeft: 'auto'
                            }}
                        />
                    </S.Row>
                    <S.SectionTitle>Matérias</S.SectionTitle>
                    {
                        loading.matter ? <PlaceholderSubjects /> : <Matter values={subjects} />
                    }
                    <S.SectionTitle>Módulos novos</S.SectionTitle>
                    <Modules values={newModules} />
                    <S.SectionTitle>Desempenho</S.SectionTitle>
                    <Performance />
                </S.Content>
            </S.Container>
        </Fragment>
    )
}