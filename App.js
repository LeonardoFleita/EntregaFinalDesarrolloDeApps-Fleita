import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Header from "./src/components/Header";
import CategoriesScreen from "./src/screens/CategoriesScreen";
import ProductsScreen from "./src/screens/ProductsScreen";
import { useEffect, useState } from "react";
import { colors } from "./src/global/colors";
import ProductDetailScreen from "./src/screens/ProductDetailScreen";
import Navigatior from "./src/navigation/Navigatior";

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

  const [category, setCategory] = useState("");
  const [productId, setProductId] = useState("");

  return (
    <View style={styles.body}>
      <Header />
      {productId ? (
        <ProductDetailScreen
          productId={productId}
          setProductId={setProductId}
        />
      ) : category ? (
        <ProductsScreen
          category={category}
          setCategory={setCategory}
          setProductId={setProductId}
        />
      ) : (
        <CategoriesScreen setCategory={setCategory} />
      )}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: colors.black,
  },
});
