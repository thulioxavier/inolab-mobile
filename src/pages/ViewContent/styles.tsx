import styled from 'styled-components';
import { Image, ScrollView, Text, TouchableOpacity, View, StyleSheet, TextInput} from 'react-native';

export const Container = styled(View)`
    flex: 1;
    width: 100%;
    background-color: #FFF;
    height: 100%;

    justify-content: center;
    align-items: center;
`;

export const Content = styled(ScrollView)`
    padding: 0 5px;
    flex: 1;
    width: 100%;
    height: 100%;
`;

export const SectionTitle = styled(Text)`
    width: auto;
    font-size: 16px;
    font-weight: 700;
    color: #5f5f5f;
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const ButtonPlay = styled(TouchableOpacity)`
    position: absolute;
    width: 100px;
    height: 45px;
    align-items: center;
    justify-content: center;
    right: 10px;
    bottom: 15px;
    border-radius: 5px;
    background-color: #527C91;
`;

export const ButtonLink = styled(TouchableOpacity)`
    width: 100%;
    height: 35px;
    flex: 1;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    margin-top: 10px;
    padding: 0 10px;

    background-color: #f0f0f0;
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

export const TabRow = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-radius: 5px;

    background-color: #527C91;
`;

export const TabButton = styled(TouchableOpacity)`
    width: 25%;
    height: 35px;

    padding: 5px;
    border-radius: 5px;

    background-color: ${(props) => (props.select ? '#484848' :  '#527C91')};
    justify-content: center;
    align-items: center;
`;
export const Hello = styled(Text)`
    font-size: 18px;
    font-weight: bold;
    color: #494949;
`;
export const Icon = styled(Image)`
    width: 50px;
    height: 50px;
`;


export const Label = styled(Text)`
    font-size: 14px;
    color:${(props) => (props.select ? '#527C91' :  '#FFFF')};
`;

export const ButtomHeader = styled(TouchableOpacity)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;

    background-color: ${(props) => (props.color ? props.color : '#527C91' )} ;
    border-radius: 5px;
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