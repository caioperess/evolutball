import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

const KeyboardAvoidingContainer: React.FC = ({ children }) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      enabled
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingContainer;
