import { KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styled from "styled-components";

export const Container = styled(KeyboardAvoidingView)`
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
    padding: 0 5px;
    background-color: #ffffff;
`;

export const Scroll = styled(ScrollView)`
    background-color: #076ed454;
`;

export const Form = styled(View)`
    width: 100%;
`;

export const AreaInput = styled(View)`
    width: 100%;
    padding: 5px;
    margin-top: 8px;
`;

export const RowInput = styled(View)`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 4px;
    border: 1px solid #DDD;
    border-radius: 5px;
`;

export const ViewButton = styled(View)`
    width: 100%;
    padding: 5px;
    margin-top: 8px;
`;
export const Row = styled(View)`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
`;

export const IconInput = styled(View)`

    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 40px;

    background-color: #00C880;

    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
`;

export const ButtonEye = styled(TouchableOpacity)`

    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 40px;
    height: 40px;

    background-color: #00C880;

    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
`;

export const Label = styled(Text)`
    font-size: 14px;
    font-weight: bold;
    color: #494949;
`;

export const LabelButtonRadius = styled(Text)`
    font-size: 13px;
    color: #494949;
    margin-left: 5px;
`;


export const Input = styled(TextInput)`
    width: 100%;
    height: 40px;
    padding: 2px 5px;
`;

export const ButtonRadius = styled(TouchableOpacity)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border:  ${(props) => (!props.select ? '1px solid #00C880' : 'none')};
    background-color: ${(props) => (props.select ? '#00C880' : 'transparent')};
    border-radius: 5px;
`;

export const AreaButton = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 4px;
    border-radius: 5px;
`;

export const ViewTitle = styled(View)`
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const P = styled(Text)`
    font-size: 14px;
    color: #3f3f3f;

`;

export const Title = styled(Text)`
    font-size: 20px;
    font-weight: bold;
    color: #3f3f3f;
`;

export const ButtonBack = styled(TouchableOpacity)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 39px;
    height: 39px;
    border: 1px solid #00C880;
    background-color: #FFF;
    z-index: 999;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

`;

export const ButtonRegister = styled(TouchableOpacity)`
    display: flex;
    min-height: 39px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 39px;
    background-color: ${(props) => (props.color ? props.color : '#00C880')} ;
    border-radius: 5px;
`;

export const ViewError = styled(View)`
    width: 100%;
`; 

export const LabelError = styled(Text)`
    color: #E75353;
    font-size: 12px;
`; 

export const Div =  styled(View)`

`;

export const ResetPass = styled(TouchableOpacity)`
    padding: 5px;
    width: 150px;
`;