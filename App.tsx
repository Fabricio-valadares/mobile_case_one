import React from "react";
import { Routes } from "./src/routes";
import { Themer } from "./src/styles";
import { ThemeProvider } from "styled-components";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";
import { Providers } from "./src/provider";

const App = () => {
  const [fontsloaded] = useFonts({
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  if (!fontsloaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={Themer}>
      <Providers>
        <Routes />
      </Providers>
    </ThemeProvider>
  );
};

export default App;
