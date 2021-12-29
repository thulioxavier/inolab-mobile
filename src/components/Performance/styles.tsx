import { Text, View, StyleSheet } from "react-native";
import styled from "styled-components";

export const Content = styled(View)`
    width: 100%;
    padding: 5px;
    margin-top: 5px;
`;

export const Conteiner = styled(View)`
    height: 150px;
    border-radius: 5px;
    background-color: #00C880;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const Row = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Card = styled(View)`
    width: 30%;
    height: 80px;
    padding: 5px 10px;
    background-color: #FFF;
    border-radius: 5px;
    color: #FFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Label = styled(Text)`
    font-size: 14px;
    color: #333333;

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
    }
})