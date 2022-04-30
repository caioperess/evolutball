import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import IntroductionPage from "../pages/Introduction";
import SelectLoginPage from "../pages/SelectLogin";

const Stack = createStackNavigator();

export default function AuthStackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Introduction"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Introduction" component={IntroductionPage} />
      <Stack.Screen name="SelectLogin" component={SelectLoginPage} />
    </Stack.Navigator>
  );
}
