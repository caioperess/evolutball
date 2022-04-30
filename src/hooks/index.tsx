import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import { AuthProvider } from "./Auth";

interface HookProps {
  children: React.ReactNode;
}

export default function HookProviders({ children }: HookProps) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <SafeAreaProvider>{children}</SafeAreaProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
