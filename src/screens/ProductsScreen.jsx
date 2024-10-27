import { FlatList, Pressable, StyleSheet, View } from "react-native";
import { products } from "../data/products";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const ProductsScreen = ({ route, navigation }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const category = route.params;
  useEffect(() => {
    const filter = products.filter((p) => p.category.includes(category));
    setFilteredProducts(filter);
  }, [category]);

  const renderProductItem = ({ item }) => {
    return (
      <Pressable
        onPress={() => navigation.navigate("Producto", item.id)}
        style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }]}
      >
        <ProductCard item={item} />
      </Pressable>
    );
  };

  return (
    <View style={styles.productsContainer}>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={renderProductItem}
      />
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  productsContainer: {
    width: "90%",
    alignSelf: "center",
  },
});
