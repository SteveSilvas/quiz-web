import React from "react";
import {
  MessageBoxCancelButton,
  MessageBoxConfirmButton,
  MessageBoxContent,
  MessageBoxStyled,
  MessageBoxText,
} from "./styles";
import RowContainer from "../RowContainer";

interface IConfirmMessageProps {
  message: string;
  confirm: () => void;
  cancel?: () => void;
  visible?: boolean;
}
const ConfirmMessage: React.FC<IConfirmMessageProps> = ({
  message,
  confirm,
  cancel,
  visible,
}) => {
  const handleCancel = () => {
    cancel && cancel();
  };

  const handleConfirm = () => {
    confirm();
  };

  return (
    visible && <MessageBoxStyled>
      <MessageBoxContent>
        <MessageBoxText>{message}</MessageBoxText>
        <RowContainer justifyContent="space-around">
          <MessageBoxCancelButton onClick={handleCancel}>
            Cancelar
          </MessageBoxCancelButton>
          <MessageBoxConfirmButton onClick={handleConfirm}>
            OK
          </MessageBoxConfirmButton>
        </RowContainer>
      </MessageBoxContent>
    </MessageBoxStyled>
  );
};

export default ConfirmMessage;
