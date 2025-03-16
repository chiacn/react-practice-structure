import styled from "@emotion/styled";
import type { Category } from "../types/category";

interface NavItemProps {
  selected?: boolean;
  variant?: "seeAll" | "category";
}

const NavContainer = styled.nav`
  width: 200px;
  min-width: 200px;
  padding: 20px;
  font-family: ${({ theme }) => theme.fontFamily};

  @media (max-width: 768px) {
    width: 100%;
    min-width: auto;
    border-right: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
  }
`;

const NavItem = styled.button<NavItemProps>`
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

  /* variant가 seeAll인 경우 추가 스타일 적용 */
  ${({ variant, theme }) =>
    variant === "seeAll" &&
    `
      border-bottom: 1px solid ${theme.colors.gray200};
      padding-bottom: 12px;
      margin-bottom: 12px;
    `}
`;

interface LeftNavProps {
  categories: Category[];
  selectedCategory: number; // 현재 선택된 카테고리 ID
  onSelect: (id: number) => void;
}

function LeftNav({ categories, selectedCategory, onSelect }: LeftNavProps) {
  return (
    <NavContainer>
      <NavItem
        variant="seeAll"
        selected={selectedCategory === 0}
        onClick={() => onSelect(0)}
      >
        전체
      </NavItem>

      {categories.map((category) => (
        <NavItem
          key={category.id}
          selected={selectedCategory === category.id}
          onClick={() => onSelect(category.id)}
        >
          {category.category}
        </NavItem>
      ))}
    </NavContainer>
  );
}

export default LeftNav;
