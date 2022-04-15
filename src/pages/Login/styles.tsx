import { KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { COLORS } from "../../utils";

export const Container = styled(KeyboardAvoidingView)`
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
    padding: 0 5px;
    background-color: ${COLORS.white};
`;

export const Scroll = styled(ScrollView)`

`;

export const Form = styled(View)`
    width: 100%;
`;

export const AreaInput = styled(View)`
    flex-direction: column;
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
    border: 1px solid ${COLORS.grey};
    border-radius: 5px;
`;


export const Input = styled(TextInput)`
    flex: 1;
    width: 100%;
    height: 40px;
    padding: 2px 5px;
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

    background-color: ${COLORS.primary};

    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
`;

export const ButtonEye = styled(TouchableOpacity)`

    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 40px;
    height: 40px;

    background-color: ${COLORS.primary};

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


export const ButtonRadius = styled(TouchableOpacity)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border:  ${(props) => (!props.select ? `1px solid ${COLORS.primary}` : 'none')};
    background-color: ${(props) => (props.select ? COLORS.primary : 'transparent')};
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

export const ErrorArea = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 45px;

    background-color: ${COLORS.red};

    border-radius: 5px;
`;

export const P = styled(Text)`
    font-size: 14px;
    color: ${COLORS.black};

`;

export const Title = styled(Text)`
    font-size: 20px;
    font-weight: bold;
    color: ${COLORS.black};
`;

export const ButtonBack = styled(TouchableOpacity)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 39px;
    height: 39px;
    border: 1px solid ${COLORS.primary};
    background-color: ${COLORS.white};
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
    background-color: ${(props) => (props.color ? props.color : COLORS.primary)} ;
    border-radius: 5px;
`;

export const ViewError = styled(View)`
    width: 100%;
`; 

export const LabelError = styled(Text)`
    color: ${COLORS.red};
    font-size: 12px;
`; 

export const Div =  styled(View)`

`;

export const ResetPass = styled(TouchableOpacity)`
    padding: 5px;
    width: 150px;
`;