import { Image, TouchableOpacity, Text } from "react-native";
import styled from "styled-components";

export const Container = styled(TouchableOpacity)`
    width: 90%;
    max-height: 100px;
    border-radius: 5px;
    background-color: #FAFAFA;

    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 5px 20px;

    margin-bottom: 5px;
`;

export const Avatar = styled(Image)`
    width: 50px;
    height: 50px;
    border-radius: 50px;
`;

export const Name = styled(Text)`
    font-size: 16px;
    color: #3a3a3a;
`;

export const Positon = styled(Text)`
    font-size: 18px;
    font-weight: bold;
    color: #202020;
`;

export const Lavel = styled(Text)`
    font-size: 12px;
    font-weight: bold;
    color: #527C91;
`;