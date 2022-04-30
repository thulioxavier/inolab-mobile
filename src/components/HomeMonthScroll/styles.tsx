import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { COLORS } from "../../utils";

export const MonthScroll = styled(ScrollView)`
    width: 100%;
    height: 60px;
`;

export const MonthButton = styled(TouchableOpacity)`
    justify-content: center;
    align-items: center;
    width: ${({width}) => width};
`;

export const MonthText = styled(Text)`
    font-weight: ${({selected}) => selected ? 'bold' :'normal'};
    color: ${COLORS.black};
`;

export const MonthItem = styled(View)`
    width: 90%;
    height: ${({selected}) => selected ? '40px' :'30px'};
    background-color: ${({selected}) => selected ? COLORS.primary :COLORS.grey};
    border-radius: 40px;
    justify-content: center;
    align-items: center;
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
    }
})