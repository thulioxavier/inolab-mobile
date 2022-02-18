import React, { Fragment, useEffect, useState } from "react";
import *as S from "./styles";
import { Performance, Modules, Matter } from '../../components/index';
import Icon from 'react-native-vector-icons/Feather';
import { ListNewModules, ListSubjects } from "../../services/api";
import { Alert } from "react-native";


export const Home = () => {

    const [name, setName] = useState<string>('Thúlio');
    const [focus, setFocus] = useState<boolean>(false);
    const [subjects, setSubjects] = useState<any>([]);
    const [newModules, setNewModules] = useState<any>([]);

    const [loading, setLoading] = useState<{matter: boolean}>({
        matter: true,
    })

    useEffect(()=>{
        Subjects();
    },[]);

    useEffect(()=>{
        GetNewModules();
    },[]);

    const Subjects = async () => {
        const result: any = await ListSubjects();
        setSubjects(result.data)
        loading.matter = false,
        setLoading({...loading});
    }

    const GetNewModules = async () => {
        const result: any = await ListNewModules();
        setNewModules(result.data);
    }

    const PlaceholderSubjects = () => {
        return(
            <Fragment>
                <Matter values={[{name: 'carregando'}, {name: 'carregando'},{name: 'carregando'},{name: 'carregando'}]}/>
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
                    <S.ButtomHeader color="#00C880" style={S.Styles.Shadow}>
                        <Icon name="bell" size={24} color='#FAFAFA' />
                    </S.ButtomHeader>
                </S.Header>

                <S.Content>
                    {/* <S.ContentInput focus={focus} >
                        <S.InputSearch editable={false} selectTextOnFocus={false} placeholder="Buscar" onFocus={() => {
                            setFocus(!focus)
                        }} />
                        <S.ButtomSearch disabled={true}>
                            <Icon name="search" size={24} color='#FAFAFA' />
                        </S.ButtomSearch>
                    </S.ContentInput> */}
                    <S.SectionTitle>MATÉRIAS</S.SectionTitle>
                    {
                        loading.matter ? <PlaceholderSubjects/> : <Matter values={subjects} />
                    }
                    <S.SectionTitle>MÓDULUS NOVOS</S.SectionTitle>
                    <Modules values={newModules} />
                    <S.SectionTitle>DESEMPENHO</S.SectionTitle>
                    <Performance />
                </S.Content>
            </S.Container>
        </Fragment>
    )
}