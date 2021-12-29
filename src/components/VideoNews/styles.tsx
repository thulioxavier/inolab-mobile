import { ScrollView } from "react-native";
import styled from "styled-components";
import { Video, AVPlaybackStatus } from 'expo-av';

export const Scrool = styled(ScrollView)``;

export const VideoPlay = styled(Video)`
    width: 300px;
    height: 200px;

    margin-right: 10px;
`;
