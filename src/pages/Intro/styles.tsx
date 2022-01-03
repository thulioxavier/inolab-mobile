import { Image, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";

export const Container = styled(KeyboardAvoidingView)`
    width: 100%;
    padding: 0 5px;
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #FFFF;
`;

export const Img = styled(Image)`
    width: 250px;
    height: 180px;
`;
export const Logo = styled(Image)`
    width: 120px;
    height: 50px;
`;

export const P = styled(Text)`
    font-size: 16px;
    color: #4d4d4d;
    text-align: center;
`;

export const ButtonView = styled(View)`
    background-color: #202020;
    width: 100%;
    height: 40px;
    border-radius: 5px;

    margin-top: 150px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ButtonLogin = styled(TouchableOpacity)`
    background-color: #00C880;
    width: 40%;
    height: 40px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    justify-content: center;
    align-items: center;
`;
export const ButtonRegister = styled(TouchableOpacity)`
    background-color: #202020;
    width: 60%;
    height: 40px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    
    justify-content: center;
    align-items: center;
`;

export const Label = styled(Text)`
    font-size: 14px;
    font-weight: bold;
    color: #FFFF;
`;