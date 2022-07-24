import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Chip } from 'react-native-paper';
import styled from "styled-components";
import { COLORS } from "../../utils";

export const Content = styled(View)`
    width: 100%;
    display: flex;
`;

export const Scrool = styled(ScrollView)`
    height: 50px;
`;

export const Item = styled(TouchableOpacity)`
    height: 30px;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 8px;
    margin-left: 5px;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #F0f0f5;
`;

export const ItemTitle = styled(Text)`
    color: ${COLORS.black};
    font-size: 14px;
`;

export const Label = styled(Text)`
    font-weight:bold;
    font-size: ${(props) => ( props.size ? props.size : '14px')};
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