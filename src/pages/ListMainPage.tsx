import List from "../components/List";
import LeftNav from "../components/LeftNav";
import useCategory from "../hooks/useCategory";
import useList from "../hooks/useList";
import * as S from "./ListMainPage.style";

function ListMainPage() {
  const { categories, selectedCategory, selectCategory } = useCategory();
  const {
    listForCategory,
    goToDetail,
    calculateLeftDate,
    BADGE_COLOR,
    BADGE_TITLE,
    getBadgeLevel,
  } = useList(selectedCategory);

  return (
    <S.MainPageContainer>
      <S.LeftNavWrapper>
        <LeftNav
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={selectCategory}
        />
      </S.LeftNavWrapper>
      <S.ContentWrapper>
        <List>
          {listForCategory.map((listItem) => {
            const leftDate = calculateLeftDate(listItem.endDate);
            const badgeLevel = getBadgeLevel(leftDate);
            return (
              <div key={listItem.id} onClick={() => goToDetail(listItem.id)}>
                <List.Badge>
                  <List.BadgeItem
                    title={BADGE_TITLE[badgeLevel]}
                    backgroundColor={BADGE_COLOR[badgeLevel]}
                  />
                  <List.BadgeItem title={listItem.category.name} />
                  <List.BadgeItem title={listItem.clientInfo.industry.name} />
                </List.Badge>
                <List.Title
                  titleData1={listItem.clientInfo.company.name}
                  titleData2={listItem.category.name}
                  titleData3="Title 테스트 데이터"
                />
                <List.Description
                  description={
                    listItem.clientInfo.company.companyDescription ??
                    listItem.briefing.content
                  }
                />
              </div>
            );
          })}
        </List>
      </S.ContentWrapper>
    </S.MainPageContainer>
  );
}

export default ListMainPage;
