import { ScrollView, Text, TouchableOpacity, View } from "react-native";
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

export const H1 = styled(Text)`
    font-size: 24px;
    font-weight: 600;

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

export const QuestionContent = styled(View)`
    width: 100%;
    background-color: #F0F0F0;

    padding: 5px;
    margin-bottom: 15px;
`;

export const QuestionContentScroll = styled(ScrollView)`
    width: 100%;
    max-height: 200px;
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
    background-color: #00C880;

    border-radius: 5px;
`;


export const Time = styled(Text)`
    color: #00C880;
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

