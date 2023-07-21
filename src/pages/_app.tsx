import React from "react";
import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import theme from "@/style/theme";
import GlobalStyle from "@/style/GlobalStyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
