import React, { useRef, useState } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
import * as S from "./FileUpload.style";

interface FileUploadProps {
  id: string;
  register?: UseFormRegisterReturn;
  errorMessage?: string;
}

const FileUpload = ({ id, register, errorMessage }: FileUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState<string>("");

  // 실제 파일 선택 시 파일명을 state에 저장합니다.
  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFileName(files[0].name);
    } else {
      setFileName("");
    }
  };

  // register에서 넘어온 ref, onChange를 분리하여 사용합니다.
  const {
    ref: registerRef,
    onChange: registerOnChange,
    ...restRegister
  } = register || {};

  // 내부에서 onChange 호출 후, register의 onChange도 호출
  const handleCombinedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChangeFile(e);
    if (registerOnChange) {
      registerOnChange(e);
    }
  };

  return (
    <S.FileUploadContainer>
      <label htmlFor={id}>첨부파일</label>
      <S.UploadBox>
        <input
          id={id}
          type="file"
          style={{ display: "none" }}
          onChange={handleCombinedChange}
          {...restRegister}
          accept="image/*"
          ref={(e) => {
            fileInputRef.current = e;
            if (registerRef) {
              if (typeof registerRef === "function") {
                registerRef(e);
              } else {
                (
                  registerRef as React.MutableRefObject<HTMLInputElement | null>
                ).current = e;
              }
            }
          }}
        />
        <S.FileButton
          onClick={(e) => {
            e.preventDefault();
            fileInputRef.current?.click();
          }}
        >
          파일 선택하기
        </S.FileButton>
        <S.FileName>{fileName || "[첨부파일명]"}</S.FileName>
      </S.UploadBox>
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
      <S.Note>이미지 파일 업로드 가능합니다.</S.Note>
    </S.FileUploadContainer>
  );
};

export default FileUpload;
