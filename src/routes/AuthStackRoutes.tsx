import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ConfirmNamePage from "../pages/ConfirmName";
import ConfirmTeamPage from "../pages/ConfirmTeam";
import IntroductionPage from "../pages/Introduction";
import ReadyPage from "../pages/Ready";
import SelectLoginPage from "../pages/SelectLogin";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";

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
      <Stack.Screen name="SignInPage" component={SignInPage} />
      <Stack.Screen name="SignUpPage" component={SignUpPage} />
      <Stack.Screen name="ConfirmNamePage" component={ConfirmNamePage} />
      <Stack.Screen name="ConfirmTeamPage" component={ConfirmTeamPage} />
      <Stack.Screen name="ReadyPage" component={ReadyPage} />
    </Stack.Navigator>
  );
}
