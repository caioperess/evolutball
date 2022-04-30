import React from "react";
import { Image, Text, View } from "react-native";
import logo from "../../assets/logo.png";
import theme from "../../theme";

export default function AuthHeader() {
  return (
    <View
      style={{
        width: "100%",
        height: "40%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={logo} style={{width: '100%', height: '100%'}} resizeMode="cover"/>
    </View>
  );
}
