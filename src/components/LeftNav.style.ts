import styled from "@emotion/styled";

interface NavItemProps {
  selected?: boolean;
  variant?: "seeAll" | "category";
}

export const NavContainer = styled.nav`
  width: 200px;
  min-width: 200px;
  padding: 20px;
  font-family: ${({ theme }) => theme.fontFamily};

  @media (max-width: 768px) {
    width: 100%;
    min-width: auto;
    border-right: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
    display: flex;
    justify-content: space-between;
  }
`;

export const NavItem = styled.button<NavItemProps>`
  display: block;
  width: 100%;
  background: none;
  border: none;
  text-align: left;
  padding: 10px 0;
  cursor: pointer;

  /* 기존 subTitle2Medium 스타일 적용 */
  ${({ theme }) => theme.typography.subTitle2Medium}

  /* font-weight를 900으로 오버라이드 */
  font-weight: 900;

  color: ${({ selected, theme }) =>
    selected ? theme.colors.info : theme.colors.gray900};

  &:hover {
    color: ${({ theme }) => theme.colors.gray700};
  }

  &:focus {
    outline: none;
    color: ${({ theme }) => theme.colors.info};
  }

  ${({ variant, theme }) =>
    variant === "seeAll" &&
    `
      border-bottom: 1px solid ${theme.colors.gray200};
      border-radius: 0px;
      padding-bottom: 12px;
      margin-bottom: 12px;
    `}

  @media (max-width: 768px) {
    width: 60px;
    font-size: 12px;
    border-radius: 2px;

    ${({ variant }) =>
      variant === "seeAll" &&
      `
        border-bottom: none; 
        margin-bottom: 0;
      `}
  }
`;
