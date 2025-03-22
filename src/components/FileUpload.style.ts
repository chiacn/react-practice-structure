import styled from "@emotion/styled";

export const FileUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const UploadBox = styled.div`
  border: 1px dashed #ddd;
  border-radius: 4px;
  padding: 20px;
  text-align: center;
  position: relative;
  color: #666;
  min-height: 80px;
`;

export const FileButton = styled.button`
  background-color: #fff;
  border: 1px solid black;
  color: black;
  font-size: 12px;
  font-weight: 600;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
`;

export const FileName = styled.span`
  margin-left: 12px;
  font-size: 12px;
  color: #333;
`;

export const Note = styled.p`
  margin-top: 8px;
  font-size: 0.875rem;
  color: #666;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.875rem;
  margin-top: -4px;
`;
