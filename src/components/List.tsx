import * as S from "./List.style";
import type { BadgeItem } from "../types/contest";

interface ListProps {
  children: React.ReactNode;
  onSelect?: () => void;
}

interface BadgeProps {
  badges?: BadgeItem;
}

const Badge = ({ badges }: BadgeProps) => {
  const setBackgroundColor = () => {
    if (badges?.leftDate) {
      if (badges?.leftDate >= 10) return "#6F7785";
      if (badges?.leftDate >= 5) return "#2656F6";
      if (badges?.leftDate < 5) return "#F21724";
    }
    return "#6F7785";
  };

  const convertNumberToBadgeTitle = (num: number) => {
    if (num >= 10) return "Badge A";
    if (num >= 5) return "Badge B";
    return "Badge C";
  };

  const backgroundColor = setBackgroundColor();
  return (
    <S.BadgeContainer>
      <S.BadgeItemStyle backgroundColor={backgroundColor}>
        {convertNumberToBadgeTitle(badges?.leftDate ?? 0)}
      </S.BadgeItemStyle>
      <S.BadgeItemStyle>{badges?.category}</S.BadgeItemStyle>
      <S.BadgeItemStyle>{badges?.industry}</S.BadgeItemStyle>
    </S.BadgeContainer>
  );
};

interface TitleProps {
  titleData1: string;
  titleData2: string;
  titleData3: string;
}

const Title = ({ titleData1, titleData2, titleData3 }: TitleProps) => (
  <S.TitleContainer>{`${titleData1} ${titleData2} ${titleData3}`}</S.TitleContainer>
);

interface DescriptionProps {
  description: string;
}

const Description = ({ description }: DescriptionProps) => (
  <S.DescriptionContainer>{description}</S.DescriptionContainer>
);

function List({ children, onSelect }: ListProps) {
  return (
    <S.ListContainer className="contest-list" onClick={onSelect}>
      <S.ListItemContainer>
        {Array.isArray(children) ? (
          children.map((child, index) => (
            <S.Card className="contest-card" key={index}>
              {child}
            </S.Card>
          ))
        ) : (
          <S.Card className="contest-card">{children}</S.Card>
        )}
      </S.ListItemContainer>
    </S.ListContainer>
  );
}

List.Badge = Badge;
List.Title = Title;
List.Description = Description;

export default List;
