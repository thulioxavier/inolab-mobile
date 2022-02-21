import React, { Fragment, ReactNode } from "react";

import * as S from "./styles";

export const Modal = (
  visible: boolean = false,
  onRequestClose: Function,
) => {
  return (
    <Fragment>
      <S.ModalR
        animationType="fade"
        visible={visible}
        transparent={true}
        onRequestClose={ onRequestClose(!visible) }
      >
      </S.ModalR>
    </Fragment>
  );
};
