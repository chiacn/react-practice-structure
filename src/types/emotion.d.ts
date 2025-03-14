// src/types/emotion.d.ts
import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      blue500: string;
      red500: string;
      gray200: string;
      gray400: string;
      gray700: string;
      gray900: string;
      negative: string;
      info: string;
    };
    typography: {
      caption1Bold: string;
      subTitle1Bold: string;
      subTitle2Medium: string;
    };
    fontFamily: string;
  }
}
