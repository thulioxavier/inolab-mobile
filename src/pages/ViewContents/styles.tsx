import { SafeAreaView, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import styled from "styled-components";



export const Container = styled(View)`
    flex: 1;
    background-color: #FFFF;
    
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
    background-color: #ffffff;
`;

export const Hello = styled(Text)`
    font-size: 18px;
    font-weight: bold;
    color: #494949;
`;

export const TitlePage = styled(Text)`
    padding: 5px 0;
    font-weight: 400;
    font-size: 18px;
    color: #494949;
`;
export const AreaList = styled(SafeAreaView)`
    flex: 1;   
    width: 100%;
    padding: 5px;
    background-color: #FFFF;
`;

export const Title = styled(Text)`
    font-size: 20px;
    font-weight: bold;
    color: #333333;    

    justify-content: center;
    align-items: center;
`;

export const SubTitle = styled(Text)`
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 2px;
    color: #585858;
`;

export const Abstract = styled(Text)`
    font-size: 14px;
    margin-bottom: 15px;

    text-align: justify;
    color: #585858;
`;

export const CardArea = styled(View)`
    flex: 1;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 5px;
`;

export const CardContent = styled(TouchableOpacity)`
    flex: 1;
    width: 98%;
    height: 120px;

    border-left-width: 8px;
    border-left-color: #527C91;
    border-style: solid;
    margin-top: 5px;
    padding: 5px;
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