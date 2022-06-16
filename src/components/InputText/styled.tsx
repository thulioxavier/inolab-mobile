import styled from "styled-components/native";
import { COLORS } from "../../utils";

export const Input = styled.TextInput`
    flex: 1;
    width: 100%;
    height: 40px;
    padding: 2px 5px;
`;
export const InputArea = styled.View`
    width: 100%;
    height: 40px;
    border-radius: 5px;
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
