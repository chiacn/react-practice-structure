import * as S from "./List.style";
import type { BadgeItem } from "../types/contest";

interface ListProps {
  children: React.ReactNode;
  onSelect?: () => void;
}

// interface BadgeProps {
//   badges?: BadgeItem;
// }

const Badge = ({ children }: { children: React.ReactNode }) => {
  return <S.BadgeContainer>{children}</S.BadgeContainer>;
};

interface BadgeItemProps {
  title: string | number;
  backgroundColor?: string;
}

const BadgeItem = ({ title, backgroundColor }: BadgeItemProps) => {
  return (
    <S.BadgeItemStyle backgroundColor={backgroundColor}>
      {title}
    </S.BadgeItemStyle>
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
List.BadgeItem = BadgeItem;
List.Title = Title;
List.Description = Description;

export default List;
