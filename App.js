import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Header from "./src/components/Header";
import { useEffect } from "react";
import TabNavigator from "./src/navigation/TabNavigator";
import { colors } from "./src/global/colors";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    //'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
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
      <Header />
      <TabNavigator />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});
