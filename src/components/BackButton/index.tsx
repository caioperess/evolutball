import React from "react";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BorderlessButton } from "react-native-gesture-handler";

export default function BackButton() {
  const navigation = useNavigation();

  return (
    <View style={{ width: "100%", marginVertical: 10 }}>
      <BorderlessButton onPress={() => navigation.goBack()}>
        <Feather name="chevron-left" size={24} color="#fff" />
      </BorderlessButton>
    </View>
  );
}
