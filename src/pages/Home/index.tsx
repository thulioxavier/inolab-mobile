import React, { Fragment, useState } from "react";
import *as S from "./styles";
import { VideoNews, Performance, Modules, Matter } from '../../components/index';

import { Logo, LogoGreen } from "../../assets/icons";
import Icon from 'react-native-vector-icons/Feather';

const values = [
    {
        title: 'Logica de Programação'
    },
    {
        title: 'LP2'
    },
    {
        title: 'Matematica Discreta'
    },
    {
        title: 'Materia 4'
    },
    {
        title: 'Materia 5'
    },
    {
        title: 'Materia 6'
    },
    {
        title: 'Materia 7'
    },
    {
        title: 'Materia 8'
    },
    {
        title: 'Materia 9'
    },
]


const valuesModules = [
    {
        title: 'Utilizando a estrutura condicional if/else',
        matter: 'Logica de Programação',
        porc: 25,
    },
    {
        title: 'Normalização',
        matter: 'Banco de Dados',
        porc: 56,
    },
    {
        title: 'Teste de conteudo',
        matter: 'Materia 7',
        porc: 78,
    },
    {
        title: 'Teste de conteudo',
        matter: 'Materia 1',
        porc: 12,
    },
    {
        title: 'Teste de conteudo',
        matter: 'Materia 5',
        porc: 4,
    },
    {
        title: 'Teste de conteudo',
        matter: 'Materia 8',
        porc: 19,
    },
    {
        title: 'Teste de conteudo',
        matter: 'Materia 8',
        porc: 98,
    },
    {
        title: 'Teste de conteudo',
        matter: 'Materia 8',
        porc: 100,
    },
    {
        title: 'Teste de conteudo',
        matter: 'Materia 8',
        porc: 0,
    },
]

const videos = [
    {
        uri: 'https://www.youtube.com/watch?v=xegH4A6CH04',
    },

    {
        uri: 'https://www.youtube.com/watch?v=VspRRDy_V8o',
    },

    {
        uri: 'https://www.youtube.com/watch?v=AcP44hMcXNE',
    },

    {
        uri: 'https://www.youtube.com/watch?v=-1M4gLLDxzs',
    },
]



export const Home = () => {

    const [name, setName] = useState('Thúlio');
    const [focus, setFocus] = useState(false);
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
                    <S.ContentInput focus={focus} >
                        <S.InputSearch placeholder="Buscar" onFocus={() => {
                            setFocus(!focus)
                        }} />
                        <S.ButtomSearch>
                            <Icon name="search" size={24} color='#FAFAFA' />
                        </S.ButtomSearch>
                    </S.ContentInput>
                    <S.SectionTitle>MATÉRIAS</S.SectionTitle>
                    <Matter values={values} />
                    <S.SectionTitle>MÓDULUS NOVOS</S.SectionTitle>
                    <Modules values={valuesModules} />
                    <S.SectionTitle>DESEMPENHO</S.SectionTitle>
                    <Performance />
                </S.Content>
            </S.Container>
        </Fragment>
    )
}