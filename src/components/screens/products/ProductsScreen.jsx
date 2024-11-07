import {
  FlatList,
  Pressable,
  StyleSheet,
  View,
  ActivityIndicator,
} from "react-native";
import Product from "./Product";
import { useGetProductsQuery } from "../../../services/shopService";
import { useEffect, useState } from "react";

const ProductsScreen = ({ navigation, route }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { data: products, error, isLoading } = useGetProductsQuery();
  const category = route.params;

  useEffect(() => {
    if (products) {
      const filter = products.filter((p) => p.category.includes(category));
      setFilteredProducts(filter);
    }
  }, [category, products]);

  const renderProductItem = ({ item }) => {
    return (
      <Pressable
        onPress={() => navigation.navigate("Producto", item.id)}
        style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }]}
      >
        <Product item={item} />
      </Pressable>
    );
  };

  return (
    <>
      {isLoading ? (
        <ActivityIndicator size={30} />
      ) : (
        <View style={styles.productsContainer}>
          <FlatList
            data={filteredProducts}
            keyExtractor={(item) => item.id}
            renderItem={renderProductItem}
          />
        </View>
      )}
    </>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  productsContainer: {
    width: "90%",
    alignSelf: "center",
    paddingBottom: 50,
  },
});
