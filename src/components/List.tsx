import * as S from "./List.style";
import type { BadgeItem } from "../types/contest";

interface ListProps {
  children: React.ReactNode;
  onSelect?: () => void;
}

interface BadgeProps {
  badges?: BadgeItem;
}

const BADGE_COLOR = {
  WARN: "#F21724",
  AVAILABLE: "#2656F6",
  DEFAULT: "#6F7785",
};

const BADGE_TITLE = {
  WARN: "Badge A",
  AVAILABLE: "Badge B",
  DEFAULT: "Badge C",
};

const getBadgeLevel = (
  leftDate: number | undefined
): keyof typeof BADGE_COLOR => {
  if (leftDate === undefined) return "DEFAULT";
  if (leftDate >= 10) return "DEFAULT";
  if (leftDate >= 5) return "AVAILABLE";
  return "WARN";
};

const Badge = ({ badges }: BadgeProps) => {
  const badgeLevel = getBadgeLevel(badges?.leftDate);
  const backgroundColor = BADGE_COLOR[badgeLevel];
  const badgeTitle = BADGE_TITLE[badgeLevel];

  return (
    <S.BadgeContainer>
      <S.BadgeItemStyle backgroundColor={backgroundColor}>
        {badgeTitle}
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
