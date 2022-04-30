import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { COLORS } from "../../utils";

export const DayScroll = styled(ScrollView)`
    width: 100%;
    height: 50px;
`;

export const DayButton = styled(TouchableOpacity)`
    justify-content: center;
    align-items: center;
    width: ${({width}) => width};
`;

export const DayText = styled(Text)`
    font-weight: ${({selected}) => selected ? 'bold' :'normal'};
    color: ${COLORS.black};
`;

export const WeekDayText = styled(Text)`
    font-size: 10px;
    font-weight: ${({selected}) => selected ? 'bold' :'normal'};
    color: ${COLORS.black};
`;

export const DayItem = styled(View)`
    padding: 2px;
    width: 90%;
    height: ${({selected}) => selected ? '40px' :'40px'};
    border: ${({day}) => day ? `2px solid ${COLORS.primary}` : 'none'};
    background-color: ${({selected, back, next, day}) =>  back ? (selected ? COLORS.primary : COLORS.green100 ): selected ? COLORS.primary : (day && !selected) ? COLORS.white : COLORS.grey};
    border-radius: 50px;
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