import styled from "@emotion/styled";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const ListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Card = styled.div`
  display: flex;
  justify-content: left;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  padding: 24px;
  border-radius: 8px;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  }
  cursor: pointer;
`;

export const BadgeContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;

export const BadgeItemStyle = styled.span<{ backgroundColor?: string }>`
  ${({ theme }) => theme.typography.caption1Bold};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
  padding: 4px 8px;
  border-radius: 12px;
  color: ${({ backgroundColor, theme }) =>
    backgroundColor ? "#fff" : theme.colors.gray700};
`;

export const TitleContainer = styled.h2`
  ${({ theme }) => theme.typography.subTitle1Bold};
  color: ${({ theme }) => theme.colors.gray900};
  margin-bottom: 8px;
  text-align: left;
`;

export const DescriptionContainer = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray700};
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  max-width: 100%;
  text-align: left;
`;
