import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import theme from "../../theme";

interface SafeAreaContainerProps {
  children: React.ReactNode;
}

export default function SafeAreaContainer({
  children,
}: SafeAreaContainerProps) {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.COLORS.primary_700, paddingHorizontal: 20 }}
    >
      {children}
    </SafeAreaView>
  );
}
