import styled from "styled-components/native";
import { COLORS } from "../../utils";

export const Container = styled.View`
    flex: 1;
    background-color: ${COLORS.primary};
`;

export const Logo = styled.Image`
    width: 150px;
    height: 50px;
`;

export const Header = styled.View`

    position: relative;
    width: 100%;
    height: 25%;
    justify-content: center;
    align-items: center;
    background-color: ${COLORS.primary};
    padding: 10px;
`;

export const Input = styled.TextInput`
    flex: 1;
    width: 100%;
    height: 40px;
    padding: 2px 5px;
`;

export const ViewButton = styled.View`
    width: 100%;
    padding: 5px;
    margin-top: 8px;
`;

export const AreaButton = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 4px;
    border-radius: 5px;
`;

export const ButtonBack = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 39px;
    height: 39px;
    border: 1px solid ${COLORS.primary};
    background-color: ${COLORS.white};
    z-index: 999;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

`;

export const ButtonRegister = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 39px;
    background-color: ${COLORS.primary};
    position: absolute;
    border-radius: 5px;
`;

export const ButtonEye = styled.TouchableOpacity`

    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 40px;
    height: 40px;

    background-color: ${COLORS.primary};

    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
`;

export const IconInput = styled.View`

    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 40px;

    background-color: ${COLORS.primary};

    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
`;

export const Bottom = styled.TouchableOpacity`

`;
export const RowInput = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 4px;
    /* border: 1px solid ${COLORS.grey}; */

    background-color: #F6F6F6;
    border-radius: 5px;
`;

export const Label = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: ${COLORS.black};
`;

export const AreaInput = styled.View`
    width: 100%;
    padding: 5px;
    margin-top: 8px;
`;

export const H1 = styled.Text`
    font-size: 25px;
    font-weight: bold;
    font-family: 'Inter_700Bold';
    color: ${COLORS.black};

    position: absolute;
    bottom: 10px;
    left: 10px;

`;

export const Footer = styled.View`
    width: 100%;
    height: 75%;

    padding: 10px;
    background-color: ${COLORS.white100};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

export const BottomText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${({ activit }) => activit ? COLORS.primary : COLORS.black};
`;

export const ButtomGoToPage = styled.TouchableOpacity`
    width: 100%;
    height: 40px;

    justify-content: center;
    align-items: center;

    /* border: 1.5px solid ${COLORS.black}; */

    background-color: ${COLORS.black};
    border-radius: 5px;
`;
