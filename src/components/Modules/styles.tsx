import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Modal } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
    display: flex;

    width: 100%;

    justify-content: space-between;
    align-items: flex-start;
`;

export const Card = styled(TouchableOpacity)`
    margin: 5px;
    margin-right: 5px;
    
    width: 250px;
    height: 130px;
    padding: 5px;

    background-color: #FFFF;
    border-radius: 5px;
    margin-bottom: 7px;
`;

export const ProgressBack = styled(View)`
    width: 100%;
    height: 10px;

    border-radius: 50px;
    background-color: #333333;
`;
export const Progress = styled(View)`
    width: ${(props) => (props.porc ? props.porc : '0%')};
    height: 10px;

    border-radius: 50px;
    background-color: #00C880;
`;

export const Title = styled(Text)`
    font-size: 18px;
    font-weight: bold;
    color: #333333;    
`;

export const SubTitle = styled(Text)`
    font-size: 14px;
    margin-bottom: 15px;
    color: #585858;
`;

export const Points = styled(Text)`
    font-size: 14px;
    font-weight: bold;
    color: #00C880;
`;

export const ItemCardRow = styled(View)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;

`;

export const Count = styled(Text)`
    font-size: 14px;
    font-weight: bold;
    color: #585858;
`;

export const AreaMarkNew = styled(View)`
    width: 10%;
    display: flex;
    align-items: flex-end;
`;

export const Row = styled(View)`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const MarkNew = styled(View)`
    width: 15px;
    height: 15px;
    border-radius: 50px;
    background-color: #00C880;
`;

export const Scrool = styled(ScrollView)`

`;
export const LabelPorc = styled(Text)`
    margin-left: ${(props) => (props.porc && props.porc != '-13%' ? props.porc : '0%')};
    font-size: 12px;
    color: #3a3a3a ;
    font-weight: bold;
`;

export const Styles = StyleSheet.create({
    Shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})