import type { Category } from "../types/category";
import * as S from "./LeftNav.style";

interface LeftNavProps {
  categories: Category[];
  selectedCategory: number; // 현재 선택된 카테고리 ID
  onSelect: (id: number) => void;
}

function LeftNav({ categories, selectedCategory, onSelect }: LeftNavProps) {
  return (
    <S.NavContainer>
      <S.NavItem
        variant="seeAll"
        selected={selectedCategory === 0}
        onClick={() => onSelect(0)}
      >
        전체
      </S.NavItem>

      {categories.map((category) => (
        <S.NavItem
          key={category.id}
          selected={selectedCategory === category.id}
          onClick={() => onSelect(category.id)}
        >
          {category.category}
        </S.NavItem>
      ))}
    </S.NavContainer>
  );
}

export default LeftNav;
