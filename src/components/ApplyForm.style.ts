import styled from "@emotion/styled";

export const Container = styled.form`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const TitleContainer = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 8px;
  color: #333;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const TextInput = styled.input`
  width: 100%;
  padding: 12px 40px 12px 12px;
  font-size: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #2656f6;
  }
`;

export const CharCount = styled.span`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  font-size: 0.875rem;
  color: #6f7785;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.875rem;
  margin-top: -4px;
`;

export const StyledButton = styled.button`
  width: 100%;
  background-color: #2656f6;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  padding: 14px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #1e4ad8;
  }
`;
