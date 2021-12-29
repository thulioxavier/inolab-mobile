import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Chip } from 'react-native-paper';
import styled from "styled-components";

export const Content = styled(View)`
    width: 100%;
    display: flex;
`;

export const Scrool = styled(ScrollView)``;

export const Item = styled(TouchableOpacity)`
    margin-right: 10px;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #202020;
`;

export const ItemTitle = styled(Text)`
    color: #FAFAFA;
    font-size: 14px;
    font-weight: bold;
`;

export const Label = styled(Text)`
    font-weight:bold;
    font-size: ${(props) => ( props.size ? props.size : '14px')};
`;
