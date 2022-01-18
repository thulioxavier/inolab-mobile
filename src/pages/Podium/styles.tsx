import { Image, ScrollView, Text, View } from "react-native";
import styled from "styled-components";


export const Container = styled(View)`
    flex: 1;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 24px;
    padding: 0 5px;
    background-color: #ffffff;
`;

export const TitleContent = styled(View)`
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const Label = styled(Text)`
    text-align: center;
    margin-bottom: 5px;

    color: #222222;
    font-size: 13px;
    font-weight: bold;
`;

export const Title = styled(Text)`
    font-size: 25px;
    font-weight: bold;
    color: #00C880;
`;

export const PodiumContent = styled(View)`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
 

    margin-top: 150px;
    margin-bottom: 10px;
`;

export const PodiumArea = styled(View)`
    flex: 1;
    align-items: center;
    width: 25%;
    max-width: 80px;
`;

export const PodiumCol = styled(View)`
    min-height: ${(props) => (props.col ? props.col : '100%')};   
    max-height: ${(props) => (props.col ? props.col : '100%')};   
    background-color: ${(props) => (props.color ? props.color :'#00C880')};
    width: 100%;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const PodiumLabel = styled(Text)`
    font-size: ${(props) => (props.size ? props.size : '18px')};
    font-weight: bold;
    color: #202020;
`;

export const Avatar = styled(Image)`
    width:  ${(props) => (props.size ? props.size : '50px')};;
    height:  ${(props) => (props.size ? props.size : '50px')};;
    border-radius: 50px;
    background-color: black;
    margin-bottom: 10px;

    border: 5px solid ${(props) => (props.color ? props.color : '#000')};
`;

export const AvatarContent = styled(View)`
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`;

export const AvatarOne = styled(Image)`
    width:  ${(props) => (props.size ? props.size : '50px')};;
    height:  ${(props) => (props.size ? props.size : '50px')};;
    border-radius: 50px;
    background-color: black;
    border: 5px solid #00C880;
`

export const Coroa = styled(Image)`
    width: 50px;
    height: 50px;

    margin-bottom: -10px;
`;

export const Scroll = styled(ScrollView)`
    
`;

export const ContentPodium = styled(View)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 35%;
    background-color: black;
`;