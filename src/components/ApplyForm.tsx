import React, { FormEventHandler } from "react";
import FileUpload from "../components/FileUpload";
import type { UseFormRegisterReturn } from "react-hook-form";
import * as S from "./ApplyForm.style";

interface TitleProps {
  children: React.ReactNode;
}
const Title = ({ children }: TitleProps) => {
  return <S.TitleContainer>{children}</S.TitleContainer>;
};

interface SubmitButtonProps {
  children: React.ReactNode;
}
const SubmitButton = ({ children }: SubmitButtonProps) => {
  return <S.StyledButton type="submit">{children}</S.StyledButton>;
};

interface InputProps {
  id: string;
  label: string;
  placeholder?: string;
  charLimit?: number;
  register?: UseFormRegisterReturn;
  errorMessage?: string;
}
const Input = ({
  id,
  label,
  placeholder = "입력해 주세요",
  charLimit = 10,
  register,
  errorMessage,
}: InputProps) => {
  return (
    <S.FormRow>
      <label htmlFor={id}>{label}</label>
      <S.InputWrapper>
        <S.TextInput id={id} placeholder={placeholder} {...(register || {})} />
        <S.CharCount>{`0/${charLimit}`}</S.CharCount>
      </S.InputWrapper>
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.FormRow>
  );
};

interface ApplyFormProps {
  children: React.ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

const ApplyForm = ({ children, onSubmit }: ApplyFormProps) => {
  return <S.Container onSubmit={onSubmit}>{children}</S.Container>;
};

ApplyForm.Title = Title;
ApplyForm.Input = Input;
ApplyForm.SubmitButton = SubmitButton;
ApplyForm.FileUpload = FileUpload;

export default ApplyForm;
