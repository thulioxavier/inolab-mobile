import styled from 'styled-components';
import { Image, ScrollView, Text, TouchableOpacity, View, StyleSheet, TextInput, Modal} from 'react-native';
import { COLORS } from '../../utils';

export const Container = styled(View)`
    flex: 1;
    width: 100%;
    background-color: ${COLORS.white100};
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
    width: 100%;
    font-size: 18px;
    text-align: center;
    font-weight: 700;
    color: ${COLORS.black};
    margin-bottom: 10px;
    margin-top: 10px;
`;
export const ButtonIconClose = styled(TouchableOpacity)`
  flex: 1;
  justify-content: center;
  align-items: center;

  width: 35px;
  height: 35px;
`;

export const LabelTitle = styled(Text)`
  font-size: 13px;
  font-weight: bold;
  color: ${COLORS.black};
`;

export const ModalHeader = styled(View)`
  align-items: flex-end;
  
  width: 300px;
  height: 35px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  background-color: ${({color}: any) => (color)};

`;

export const ModalArea = styled(View)`
    justify-content: center;
    align-items: center;

    padding: 5px;
    width: 300px;

    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    
    background-color: #ffffff;
`;

export const ModalR = styled(Modal)``;

export const ModalContent = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #0000002d;
`;

export const ButtonPlayModal = styled(TouchableOpacity)`
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    background-color: ${COLORS.primary};

    margin-top: 20px;
    margin-bottom: 10px;
`;

export const ButtonPlay = styled(TouchableOpacity)`
    position: absolute;
    width: 50px;
    height: 50px;
    flex: 1;
    align-items: center;
    justify-content: center;
    right: 10px;
    bottom: 15px;
    border-radius: 50px;
    background-color: ${COLORS.primary};
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
    background-color: ${COLORS.white};

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
    background-color: ${COLORS.white};

`;

export const TabRow = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-radius: 5px;

    background-color: ${COLORS.green100};
`;

export const TabButton = styled(TouchableOpacity)`
    width: 25%;
    height: 35px;

    padding: 5px;
    border-radius: 5px;
    background-color: ${(props) => (props.select ? COLORS.primary :  COLORS.grey)};
    justify-content: center;
    align-items: center;
`;
export const Hello = styled(Text)`
    font-size: 18px;
    font-weight: bold;
    color: ${COLORS.black};
`;
export const Icon = styled(Image)`
    width: 50px;
    height: 50px;
`;


export const Label = styled(Text)`
    font-size: 14px;
    color:${COLORS.black};
    font-weight: ${(props) => (props.select ? 'bold' :  'normal')};

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