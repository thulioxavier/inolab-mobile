import React, { Fragment } from "react";
import { KeyboardTypeOptions, ReturnKeyTypeOptions } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { COLORS } from "../../utils";

import * as S from './styled';

interface PropInput {
    placeholder: string;
    keyboardType: KeyboardTypeOptions;
    onChange(): Function;
    value: string | undefined;
    autoCapitalize: "none" | "sentences" | "words" | "characters";
    autoCorrect: boolean;
    returnKeyType: ReturnKeyTypeOptions;
}

export const InputText = ({
    placeholder, keyboardType, onChange, value, autoCapitalize, autoCorrect, returnKeyType, label
}: PropInput) => {
    return (
        <Fragment>
            <S.AreaInput>
                <S.Label>
                    {label}
                </S.Label>
                <S.RowInput>
                    <S.IconInput>
                        <Icon name="at-sign" size={24} color={COLORS.black} />
                    </S.IconInput>
                    <S.Input
                        placeholder={placeholder}
                        keyboardType={keyboardType}
                        onChangeText={onChange}
                        value={value}
                        autoCapitalize={autoCapitalize}
                        autoCorrect={autoCorrect}
                        returnKeyType={returnKeyType}
                    />
                </S.RowInput>
            </S.AreaInput>

        </Fragment>
    )
}
