import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
    flex: 1;
    background-color: #FFFF;
`;

export const Content = styled(View)`
    padding: 0 5px;
    display: flex;
    width: 100%;
    height: 100%;
`;

export const Scroll = styled(ScrollView)`

`;

export const RowHeader = styled(View)`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    padding: 5px 0;
`;

export const ContentCardEmoji = styled(View)`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 20px;
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

export const Hello = styled(Text)`
    font-size: 18px;
    font-weight: bold;
    color: #494949;
`;

export const H1 = styled(Text)`
    font-size: 18px;
    font-weight: bold;
    color: #5e5e5e;
    margin-bottom: 10px;
`;

export const CardEmoji = styled(TouchableOpacity)`
    width: 80px;
    height: 80px;
    background-color: ${({background}) => (background)};

    justify-content: center;
    align-items: center;

    border-radius: 5px;
`;

export const IconOptions = styled(Text)`
    font-size: 48px;
`;

export const LabelQuestion = styled(Text)`
    font-size: 14px;
    line-height: 20px;
    color: #484848;
`;

export const LabelOptions = styled(Text)`
    font-size: 14px;
    width: 80%;
    line-height: 20px;
    font-weight: bold;
`;

export const Options = styled(TouchableOpacity)`
    width: 100%;
    flex: 1;
    flex-direction: row;
    margin-bottom: 15px;
    padding: 5px;

    border-radius: 5px;

    justify-content: space-between;
    align-items: center; 

    background-color: ${({ background }) => (background)};
`;

export const LabelTitle = styled(Text)`
    font-size: 16px;
    font-weight: bold;
    color: #484848;
`;

export const Circle = styled(TouchableOpacity)`
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50px;
    margin-right: 5px;
    background-color: #DDD;
`;

export const RowContent = styled(View)`
    width: 100%;
    padding: 5px;

    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const QuestionContent = styled(View)`
    width: 100%;
    background-color: #F0F0F0;

    padding: 5px;
    margin-bottom: 15px;
    margin-top: 15px;
`;

export const QuestionContentScroll = styled(ScrollView)`
    width: 100%;
    max-height: 350px;
`;

export const AreaButton = styled(View)`
    width: 100%;
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    margin-bottom: 20px;
`;

export const ButtonNext = styled(TouchableOpacity)`
    width: 120px;
    height: 45px;
    justify-content: center;
    align-items: center;
    background-color: #527C91;

    border-radius: 5px;
`;


export const Time = styled(Text)`
    color: #527C91;
    font-weight: bold;
    font-size: 20px;

`;

export const QuestionsCount = styled(Text)`
    font-size: 20px;
    font-weight: bold;
    color: #484848;
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