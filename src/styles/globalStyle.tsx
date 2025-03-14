// src/styles/GlobalStyle.tsx
import { Global, css } from "@emotion/react";
import { useTheme } from "@emotion/react";

function GlobalStyle() {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }
        html,
        body {
          margin: 0;
          padding: 0;
          font-family: ${theme.fontFamily};
          color: ${theme.colors.gray900};
          background-color: #fff;
        }
      `}
    />
  );
}

export default GlobalStyle;
