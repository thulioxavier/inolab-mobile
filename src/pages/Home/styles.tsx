import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils';

export const Container = styled.View`
    display: flex;
    width: 100%;
    background-color: #FFFF;
    height: 100%;
`;

export const Content = styled.ScrollView`
    padding: 0 5px;
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #FFFF;

`;

export const SectionTitle = styled.Text`
    width: auto;
    font-size: 16px;
    font-weight: bold;
    color: ${COLORS.black};
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const Header = styled.View`
    margin-top: 24px;
    padding: 0 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    margin-bottom: 5px;
    background-color: #FFFF;

`;

export const Logo = styled.Image`
    width: 100px;
    height: 40px;
`;

export const Icon = styled.Image`
    width: 50px;
    height: 50px;
`;


export const Hello = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #494949;
`;

export const Row = styled.View`
    flex: 1;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;
`;

export const ButtomHeader = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;

    background-color: ${(props) => (props.color ? props.color : '#527C91')} ;
    border-radius: 5px;
`;

export const ButtomSearch = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: ${(props) => (props.disabled ? "#bdbdbd" : "#527C91 ")};
    padding: 5px;
`;

export const InputSearch = styled.TextInput`
    width: 100%;
    height: 40px;
    color: #484848;
    padding: 5px;
    font-size: 16px;
`;


export const ContentInput = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #f0f0f5;
    border-radius: 5px;   
    border: ${(props) => (props.focus ? '1px solid #bebebe' : '1px solid #CCC')} ;
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
});

export const HeaderCardAnswer = styled.View`
    width: 100%;
    background-color: ${COLORS.grey};
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 5px 10px;
`;

export const BodyCardAnswer = styled.View`
    flex: 1;
    flex-direction: column;
    width: 100%;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 5px 10px;
`;

export const HeaderText = styled.Text`
    font-size: 15px;
    color: ${COLORS.black};
`;

export const StatusPoints = styled.View`
    width: 14px;
    height: 14px;
    background-color: ${({ correct }) => correct ? COLORS.green : COLORS.red};
`;

export const AreaText = styled.View`
    flex: 1;
    align-items: center;
    flex-direction: row;
`;

export const BodyText = styled.Text`
    font-size: 14px;
    color: ${COLORS.black};
`;

export const CardAnswer = styled.View`
    flex: 1;
    flex-direction: column;
    margin: 10px 5px;
    border-radius: 5px;
    background-color: #FFFF;
`;