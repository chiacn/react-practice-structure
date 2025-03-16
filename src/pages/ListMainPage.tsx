import styled from "@emotion/styled";
import List from "../components/List";
import LeftNav from "../components/LeftNav";
import useCategory from "../hooks/useCategory";
import useList from "../hooks/useList";

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  margin: 0 auto;
  max-width: 1280px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
  min-height: 600px;
`;

const LeftNavWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 20px;
`;

function ListMainPage() {
  const { categories, selectedCategory, selectCategory } = useCategory();
  const { listForCategory, goToDetail } = useList(selectedCategory);

  return (
    <MainPageContainer>
      <LeftNavWrapper>
        <LeftNav
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={selectCategory}
        />
      </LeftNavWrapper>
      <ContentWrapper>
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
      </ContentWrapper>
    </MainPageContainer>
  );
}

export default ListMainPage;
