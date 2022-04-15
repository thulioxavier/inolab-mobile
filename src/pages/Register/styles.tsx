import { KeyboardAvoidingView, Modal, ScrollView, Text, TextInput, TouchableOpacity, View, SafeAreaView, StatusBar} from "react-native";
import styled from "styled-components";
import { COLORS } from "../../utils";

export const Container = styled(SafeAreaView)`
    padding: 0 5px;
    flex: 1;
    background-color: #FFFF;
`;

export const Scroll = styled(ScrollView)`

`;

export const Form = styled(KeyboardAvoidingView)`
    flex: 1;
    padding-top: ${StatusBar.currentHeight};
`;
export const AreaInput = styled(View)`
    width: 100%;
    padding: 5px;
    margin-top: 8px;
`;

export const NextRegister = styled(TouchableOpacity)`
    max-width: 45px;
    height: 45px;
    background-color: ${({current}) => current ? COLORS.yellow : COLORS.grey} ;
    border-radius: 50px;
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
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
    color: ${COLORS.black};
`;

export const LabelButtonRadius = styled(Text)`
    font-size: 13px;
    color: ${COLORS.black};
    margin-left: 5px;
`;



export const Input = styled(TextInput)`
    flex: 1;
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
    border:  ${(props) => (!props.select ? `1px solid ${COLORS.black}` : 'none')};
    background-color: ${(props) => (props.select ? COLORS.yellow : 'transparent')};
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
    border: 1px solid ${COLORS.yellow};
    background-color: ${COLORS.white};
    z-index: 999;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

`;

export const ButtonRegister = styled(TouchableOpacity)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 39px;
    background-color: ${COLORS.yellow};
    position: absolute;
    border-radius: 5px;
`;

export const ViewError = styled(View)`
    width: 100%;
`; 

export const LabelError = styled(Text)`
    color: #EB4A47;
    font-size: 12px;
`; 


export const Alert = styled(Modal)`

`;

export const ModalContent = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;

    background-color: #0000008d;
`;

export const ModalArea = styled(View)`
    justify-content: center;
    align-items: center;

    padding: 5px;
    width: 300px;
    height: 200px;

    border-radius: 5px;
    
    background-color: #ffffff;
`;

export const ModalWebView = styled(View)`

    padding: 5px;
    width: 100%;
    height: 90%;
`;
