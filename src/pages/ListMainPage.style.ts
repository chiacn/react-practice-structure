import styled from "@emotion/styled";

export const MainPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0 auto;
  max-width: 1280px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
  min-height: 600px;
`;

export const LeftNavWrapper = styled.div`
  @media (max-width: 768px) {
    order: 2;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  padding: 20px;
  @media (max-width: 768px) {
    order: 1;
    justify-content: center;
  }
`;
