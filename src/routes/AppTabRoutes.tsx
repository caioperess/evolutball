import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Platform } from "react-native";
import IntroductionPage from "../pages/Introduction";
import { FontAwesome5 } from "@expo/vector-icons";
import theme from "../theme";

const BottomTab = createBottomTabNavigator();

export default function AppTabRoutes() {
  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: theme.COLORS.active,
        tabBarInactiveTintColor: theme.COLORS.inactive,
        headerShown: false,
        tabBarLabelPosition: "beside-icon",
        tabBarAllowFontScaling: true,
        tabBarStyle: {
          backgroundColor: "#fff",
          marginBottom: Platform.OS === "android" ? 2 : undefined,
        },
      }}
    >
      <BottomTab.Screen
        name="Transmissões"
        component={IntroductionPage}
        options={{
          tabBarLabel: "Transmissões",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="chromecast" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
