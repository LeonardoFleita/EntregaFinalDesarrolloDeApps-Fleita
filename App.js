import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useEffect } from "react";
import store from "./src/store/store";
import { Provider } from "react-redux";
import { colors } from "./src/global/colors";
import Toast from "react-native-toast-message";
import { toastConfig } from "./src/global/toastConfig";
import { createSessionsTable } from "./src/db";
import MainNavigator from "./src/navigation/MainNavigator";

createSessionsTable();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    Baumans: require("./assets/fonts/Baumans-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={styles.body}>
      <Provider store={store}>
        <MainNavigator />
        <StatusBar style="light" />
        <Toast config={toastConfig} />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  body: { flex: 1, backgroundColor: colors.black },
});
