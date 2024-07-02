import {ReactNode} from "react";
import {ThemeProvider} from "styled-components";

export const THEMES = {
  light: {
    colors: {
      primary: "#95dada",
      primarytext: "#923459",
    },
  },
  dark: {
    colors: {
      primary: "#000",
      primarytext: "#fff",
    },
  },
};

export const Theme = ({theme, children}: {theme: any; children: ReactNode}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
