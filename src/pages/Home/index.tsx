import React, { Fragment, useEffect, useState } from "react";
import *as S from "./styles";
import { Performance, Modules, Matter, HomeMonthScroll, HomeDayScroll, Header } from '../../components/index';
import { ListNewModules, ListSubjects, SelectDateAnswer } from "../../services/api";
import { Image, Text, View } from "react-native";
import { homeScreen } from "../../assets/icons";
import { COLORS } from "../../utils";
import * as Animatable from 'react-native-animatable';
import { useUser } from "../../hooks/user.hook";

export const Home = () => {

    const today = new Date();

    const [selectedMonth, setSelectedMonth] = useState<any>(today.getMonth());
    const [selectedDay, setSelectedDay] = useState<any>(today.getDate());
    const [subjects, setSubjects] = useState<any>([]);
    const [newModules, setNewModules] = useState<any>([]);

    const [answerDate, setAnswerDate] = useState<any>(Object)
    const [loading, setLoading] = useState<{ matter: boolean }>({
        matter: true,
    });

    const { user } = useUser()

    useEffect(() => {
        Subjects();
    }, []);

    useEffect(() => {
        GetNewModules();
    }, []);

    useEffect(() => {
        selectDateInfo();
    }, [selectedDay, selectedMonth]);

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

    //segundo parametro id user
    const selectDateInfo = async () => {
        const result: any = await SelectDateAnswer(`${new Date().getFullYear()}-${Number(selectedMonth + 1) < 10 ? '0' + (selectedMonth + 1) : (selectedMonth + 1)}-${selectedDay < 10 ? '0' + selectedDay : selectedDay}`, Number(user.id));
        setAnswerDate(result.data);
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

                <Header title={`Olá, ${user.name}! `} btnLeft={() => { }} btnRight={() => { }} iconRight="bell" iconLeft="menu" leftColor={COLORS.white100} rightColor={COLORS.primary} />

                <S.Content>
                    <S.Row>
                        <View>
                            <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 5, color: COLORS.black }}>InoLab</Text>
                            <Animatable.View animation="bounceInDown" easing="ease-out" useNativeDriver iterationCount={1}>
                                <Text style={{ fontSize: 14, color: COLORS.black }}>Desafiando seu conhecimento.</Text>
                            </Animatable.View>
                        </View>
                        <Animatable.View animation="pulse" easing="ease-out" useNativeDriver iterationCount={5}>

                            <Image source={homeScreen}
                                style={{
                                    width: 150,
                                    height: 150,
                                    resizeMode: 'cover',
                                    marginLeft: 'auto'
                                }}
                            />
                        </Animatable.View>

                    </S.Row>
                    <S.SectionTitle>Matérias</S.SectionTitle>
                    {
                        loading.matter ? <PlaceholderSubjects /> : <Matter values={subjects} />
                    }
                    <S.SectionTitle>Módulos novos</S.SectionTitle>
                    <Modules values={newModules} />
                    <S.SectionTitle>Desempenho</S.SectionTitle>
                    <HomeMonthScroll
                        selectedMonth={selectedMonth}
                        setSelectedMonth={setSelectedMonth}
                    />
                    <HomeDayScroll
                        selectedMonth={selectedMonth}
                        selectedDay={selectedDay}
                        setSelectedDay={setSelectedDay}
                    />

                    <S.CardAnswer style={S.Styles.Shadow}>
                        <S.HeaderCardAnswer>
                            <S.HeaderText>{`${selectedDay < 10 ? '0' + selectedDay : selectedDay}/${Number(selectedMonth + 1) < 10 ? '0' + (selectedMonth + 1) : (selectedMonth + 1)}/${new Date().getFullYear()}`}</S.HeaderText>
                        </S.HeaderCardAnswer>
                        <S.BodyCardAnswer>
                            <S.AreaText>
                                <S.StatusPoints correct={true} />
                                <S.BodyText> Acertos: {`${answerDate?.right?._sum.points ? answerDate?.right?._sum.points : 0}`}</S.BodyText>
                            </S.AreaText>
                            <S.AreaText>
                                <S.StatusPoints correct={false} />
                                <S.BodyText> Erros: {`${answerDate?.wrong?._sum.points ? answerDate?.wrong?._sum.points : 0}`}</S.BodyText>
                            </S.AreaText>
                        </S.BodyCardAnswer>
                    </S.CardAnswer>

                    <Performance />


                </S.Content>
            </S.Container>
        </Fragment>
    )
}