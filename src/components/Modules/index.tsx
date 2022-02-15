import React, { Fragment } from "react";
import *as S from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";

interface Props {
    values: Array<Object>
}

export const Modules = ({ values = [] }: Props) => {
    const navigation = useNavigation();

    return (
        <Fragment>
            <S.Scrool horizontal={true} showsHorizontalScrollIndicator={false}>
                {values.map((item, index) => {
                    return (
                        <S.Card key={index} style={S.Styles.Shadow}
                            onPress={() => {
                                navigation.navigate(
                                    "ViewContents",
                                    {
                                        id_module: item.id,
                                        name: item.name,
                                    })
                            }}>
                            <S.Row>
                                <S.Title numberOfLines={1}>{item.name}</S.Title>
                                <S.AreaMarkNew>
                                    <S.MarkNew />
                                </S.AreaMarkNew>
                            </S.Row>
                            <S.Container>
                                <S.SubTitle numberOfLines={1}>{item.subjects.name}</S.SubTitle>
                                <S.Row>
                                    <S.ItemCardRow>
                                        <Icon name="coffee" size={14} color='#585858' style={{ marginRight: 5 }} />
                                        <S.Count numberOfLines={0.5}>15/15</S.Count>
                                    </S.ItemCardRow>
                                    <S.ItemCardRow>
                                        <Icon name="gift" size={14} color='#585858' style={{ marginRight: 5 }} />
                                        <S.Points numberOfLines={0.5}>7896</S.Points>
                                    </S.ItemCardRow>
                                </S.Row>
                            </S.Container>
                            {/* <S.LabelPorc porc={`${item.porc-13}%`}>{`${item.porc}%`}</S.LabelPorc>
                            <S.ProgressBack>   
                                <S.Progress porc={`${item.porc}%`} />
                            </S.ProgressBack> */}
                        </S.Card>
                    );
                })}
            </S.Scrool>
        </Fragment>
    )
}