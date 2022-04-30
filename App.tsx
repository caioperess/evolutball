import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Jost_400Regular,
  Jost_500Medium,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";
import AppLoading from "expo-app-loading";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import HookProviders from "./src/hooks";
import Routes from "./src/routes";

export default function App() {
  let [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: 'transparent' }}>
      <StatusBar backgroundColor="#3B2065" translucent style="light" />

      <HookProviders>
        <Routes />
      </HookProviders>
    </GestureHandlerRootView>
  );
}
