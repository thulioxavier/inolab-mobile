import styled from 'styled-components';
import { Image, ScrollView, Text, TouchableOpacity, View, StyleSheet, TextInput} from 'react-native';

export const Container = styled(View)`
    display: flex;
    width: 100%;
    background-color: #FFF;
    height: 100%;
`;

export const Content = styled(ScrollView)`
    padding: 0 5px;
    display: flex;
    width: 100%;
    height: 100%;
`;

export const SectionTitle = styled(Text)`
    width: auto;
    font-size: 14px;
    font-weight: bold;
    color: #464646;
    margin-bottom: 15px;
    margin-top: 10px;
`;

export const Header = styled(View)`
    margin-top: 24px;
    padding: 0 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    margin-bottom: 5px;
    background-color: #FFF;

`;

export const Logo = styled(Image)`
    width: 100px;
    height: 40px;
`;

export const Icon = styled(Image)`
    width: 50px;
    height: 50px;
`;


export const Hello = styled(Text)`
    font-size: 20px;
    font-weight: bold;
    color: #494949;
`;

export const ButtomHeader = styled(TouchableOpacity)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;

    background-color: ${(props) => (props.color ? props.color : '#00C880' )} ;
    border-radius: 5px;
`;

export const ButtomSearch = styled(TouchableOpacity)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: #00C880;
    padding: 5px;
`;

export const InputSearch = styled(TextInput)`
    width: 85%;
    height: 40px;
    color: #484848;
    padding: 5px;
    font-size: 16px;
`;


export const ContentInput = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #FFF;
    border-radius: 5px;   
    border: ${(props) => (props.focus ? '1px solid #bebebe' : '1px solid #CCC')} ;
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
})