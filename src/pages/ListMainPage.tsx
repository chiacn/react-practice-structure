import List from "../components/List";
import LeftNav from "../components/LeftNav";
import useCategory from "../hooks/useCategory";
import useList from "../hooks/useList";
import * as S from "./ListMainPage.style";

function ListMainPage() {
  const { categories, selectedCategory, selectCategory } = useCategory();
  const { listForCategory, goToDetail } = useList(selectedCategory);

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
          {listForCategory.map((listItem) => (
            <div key={listItem.id} onClick={() => goToDetail(listItem.id)}>
              <List.Badge badges={listItem.badge} />
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
          ))}
        </List>
      </S.ContentWrapper>
    </S.MainPageContainer>
  );
}

export default ListMainPage;
