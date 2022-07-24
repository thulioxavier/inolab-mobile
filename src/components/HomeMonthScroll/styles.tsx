import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { COLORS } from "../../utils";

export const MonthScroll = styled(ScrollView)`
    width: 100%;
    height: 60px;
    background-color: #FFF;

`;

export const MonthButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: ${({width}) => width};
    background-color: #FFF;

`;

export const MonthText = styled.Text`
    font-weight: ${({selected}) => selected ? 'bold' :'normal'};
    color:  ${({selected}) => selected ? COLORS.black : COLORS.black};
    
`;

export const MonthItem = styled.View`
    width: 90%;
    height: ${({selected}) => selected ? '40px' :'30px'};
    background-color: ${({selected}) => selected ? COLORS.primary :'#F0f0f5'};
    border-radius: 40px;
    justify-content: center;
    align-items: center;
    
`;


export const Styles = StyleSheet.create({
    Shadow: {
        shadowColor: "#0000007a",
        shadowOffset: {
            width: 1,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 50,

        elevation: 5,
    }
})