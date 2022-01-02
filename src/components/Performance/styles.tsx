import { Text, View, StyleSheet, TouchableOpacityBase, TouchableOpacity, ScrollView } from "react-native";
import styled from "styled-components";

export const Content = styled(View)`
    width: 100%;
    padding: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
`;

export const Title = styled(Text)`
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    color: #202020;
    margin-bottom: 10px;
    
`;

export const Conteiner = styled(View)`
    border-radius: 5px;
    display: flex;
`;

export const Row = styled(ScrollView)`
`;

export const Card = styled(TouchableOpacity)`
    width: 110px;
    height: 100px;
    padding: 5px 10px;
    background-color: #FFF;
    border-radius: 5px;
    color: #FFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-right: 10px;
`;

export const Label = styled(Text)`
    font-size: 13px;
    color: #555555;

`;

export const LabelTitle = styled(Text)`
    font-size: 14px;
    font-weight: bold;
    color: #333333;
`;
export const PorcTotal = styled(View)`
    width: 100%;
    height: 6px;
    background-color: #00C880;
    border-radius: 50px;
`;

export const PorcHit = styled(View)`
    width: ${ (props) => ( (props.total && props.hit ) ? (((Number(props.total) - Number(props.hit))*100)/Number(props.total))+'%' : '0%')};
    height: 6px;
    background-color: #E75353;
    border-radius: 50px;
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
    },

    Border: {
        borderLeftColor: '#b1b1b1',
        borderLeftWidth: 1,
        borderStyle: 'solid',

        borderRightColor: '#b1b1b1',
        borderRightWidth: 1,
    }
})