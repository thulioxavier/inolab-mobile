import styled from "styled-components/native";
import { COLORS } from "../../utils";

export const Container = styled.View`
    flex: 1;
    padding: 0px 10px;
    background-color: ${COLORS.white100};
`;

export const Scroll = styled.ScrollView`
    width: 100%;
`;

export const Label = styled.Text`
    font-size: 30px;
    margin-top: 15px;
    margin-bottom: 15px;
`;

export const H6 = styled.Text`
    font-size: 14px;
    margin-bottom: 2px;
`;

export const CardLevel = styled.View`
    margin-top: 15px;

    width: 100%;
    height: 80px;

    background-color: ${COLORS.primary};
    border-radius: 5px;
`;

export const CardPoints = styled.View`

    margin-top: 15px;
    width: 100%;
    height: 80px;
    background-color: ${COLORS.grey};
    border-radius: 5px;
`;

export const AreaPoints = styled.View`
    width: 100%;
    background-color: ${COLORS.grey};
`;

export const Points = styled.View`
    width: ${({porc}) => porc}%;
    height: 10px;
    background-color: ${COLORS.primary};

`;
