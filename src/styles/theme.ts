import { Theme } from "@emotion/react";

const theme: Theme = {
  colors: {
    blue500: "#2656F6",
    red500: "#F21724",
    gray200: "#E5E7EB",
    gray400: "#BFC6D2",
    gray700: "#6F7785",
    gray900: "#101C33",
    negative: "#F21724",
    info: "#2656F6",
  },
  typography: {
    // caption1/bold
    caption1Bold: `
      font-size: 12px;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.15px;
    `,
    // sub title 1/bold
    subTitle1Bold: `
      font-size: 18px;
      font-weight: 700;
      line-height: 26px;
      letter-spacing: -0.5px;
    `,
    // sub title 2/medium
    subTitle2Medium: `
      font-size: 16px;
      font-weight: 500;
      line-height: 150%;
      letter-spacing: -0.5px;
    `,
  },
  fontFamily: `"Pretendard-Regular", sans-serif`,
};

export default theme;
