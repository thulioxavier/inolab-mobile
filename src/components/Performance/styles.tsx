import {
  Text,
  View,
  StyleSheet,
  TouchableOpacityBase,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import styled from "styled-components";

export const Content = styled(View)`
  width: 100%;
  padding: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Title = styled(Text)`
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  color: #202020;
  margin-bottom: 10px;
`;

export const Conteiner = styled(View)`
  border-radius: 5px;
  display: flex;
`;

export const ItemHistory = styled(View)`
  width: 100%;
  height: 35px;

  flex: 1;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  background-color: #f0f0f0;
  border-radius: 5px;

  margin-bottom: 5px;
`;

export const Row = styled(ScrollView)``;

export const Card = styled(TouchableOpacity)`
  width: 85px;
  height: 85px;
  padding: 5px 10px;
  background-color: #fff;
  border-radius: 5px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 10px;
`;

export const Label = styled(Text)`
  font-size: 13px;
  color: #555555;
`;

export const LabelTitle = styled(Text)`
  font-size: 13px;
  font-weight: bold;
  color: #333333;
`;
export const PorcTotal = styled(View)`
  width: 100%;
  height: 6px;
  background-color: #00c880;
  border-radius: 50px;
`;

export const PorcHit = styled(View)`
  width: ${(props) =>
    props.total && props.hit
      ? ((Number(props.total) - Number(props.hit)) * 100) /
          Number(props.total) +
        "%"
      : "0%"};
  height: 6px;
  background-color: #e75353;
  border-radius: 50px;
`;

export const AlertPerformace = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45px;
  background-color: #e75353;
  border-radius: 5px;
`;

export const ButtonIconClose = styled(TouchableOpacity)`
  flex: 1;
  justify-content: center;
  align-items: center;

  width: 35px;
  height: 35px;
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
    height: 200px;

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

  Border: {
    borderLeftColor: "#b1b1b1",
    borderLeftWidth: 1,
    borderStyle: "solid",

    borderRightColor: "#b1b1b1",
    borderRightWidth: 1,
  },
});
