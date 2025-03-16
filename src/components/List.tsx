import styled from "@emotion/styled";
import type { BadgeItem } from "../types/contest";

interface ListProps {
  children: React.ReactNode;
  onSelect?: () => void;
}

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-family: ${({ theme }) => theme.fontFamily};
`;

const ListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Card = styled.div`
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

const BadgeContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;

const BadgeItemStyle = styled.span<{ backgroundColor?: string }>`
  ${({ theme }) => theme.typography.caption1Bold};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
  padding: 4px 8px;
  border-radius: 12px;
  color: ${({ backgroundColor, theme }) =>
    backgroundColor ? "#fff" : theme.colors.gray700};
`;

const TitleContainer = styled.h2`
  ${({ theme }) => theme.typography.subTitle1Bold};
  color: ${({ theme }) => theme.colors.gray900};
  margin-bottom: 8px;
`;

const DescriptionContainer = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray700};
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  max-width: 100%;
  text-align: left;
`;

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
    <BadgeContainer>
      <BadgeItemStyle backgroundColor={backgroundColor}>
        {convertNumberToBadgeTitle(badges?.leftDate ?? 0)}
      </BadgeItemStyle>
      <BadgeItemStyle>{badges?.category}</BadgeItemStyle>
      <BadgeItemStyle>{badges?.industry}</BadgeItemStyle>
    </BadgeContainer>
  );
};

interface TitleProps {
  titleData1: string;
  titleData2: string;
  titleData3: string;
}

const Title = ({ titleData1, titleData2, titleData3 }: TitleProps) => (
  <TitleContainer>{`${titleData1} ${titleData2} ${titleData3}`}</TitleContainer>
);

interface DescriptionProps {
  description: string;
}

const Description = ({ description }: DescriptionProps) => (
  <DescriptionContainer>{description}</DescriptionContainer>
);

function List({ children, onSelect }: ListProps) {
  return (
    <ListContainer className="contest-list" onClick={onSelect}>
      <ListItemContainer>
        {Array.isArray(children) ? (
          children.map((child, index) => (
            <Card className="contest-card" key={index}>
              {child}
            </Card>
          ))
        ) : (
          <Card className="contest-card">{children}</Card>
        )}
      </ListItemContainer>
    </ListContainer>
  );
}

List.Badge = Badge;
List.Title = Title;
List.Description = Description;

export default List;
