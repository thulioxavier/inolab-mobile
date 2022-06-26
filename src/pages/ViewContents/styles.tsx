import { SafeAreaView, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import styled from "styled-components";
import { COLORS } from "../../utils";



export const Container = styled(View)`
    flex: 1;
    background-color: ${COLORS.white100};
    
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
    background-color: ${COLORS.white};
`;

export const Hello = styled(Text)`
    font-size: 18px;
    font-weight: bold;
    color: ${COLORS.black};
`;

export const TitlePage = styled(Text)`
    padding: 5px 5px;
    font-weight: bold;
    font-size: 18px;
    color: ${COLORS.black};
`;
export const AreaList = styled(SafeAreaView)`
    flex: 1;   
`;

export const Title = styled(Text)`
    font-size: 20px;
    font-weight: bold;
    color: ${COLORS.black};    

    justify-content: center;
    align-items: center;
`;

export const SubTitle = styled(Text)`
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 2px;
    color: ${COLORS.black};
`;

export const Abstract = styled(Text)`
    font-size: 14px;
    margin-bottom: 15px;

    text-align: justify;
    color: ${COLORS.black};
`;

export const CardArea = styled(View)`
    flex: 1;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    border-radius: 5px;
`;

export const CardContent = styled(TouchableOpacity)`
    flex: 1;
    width: 97%;
    height: 120px;
    border-left-width: 8px;
    border-left-color: ${COLORS.primary};
    border-style: solid;
    padding: 5px;
    border-radius: 5px;
    background-color: ${COLORS.white100};
    margin: 5px;
`;

export const ButtomHeader = styled(TouchableOpacity)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;

    background-color: ${(props) => (props.color ? props.color : COLORS.primary )} ;
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