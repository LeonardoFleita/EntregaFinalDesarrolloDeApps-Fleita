import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { products } from "../data/products";
import { colors } from "../global/colors";
import { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import ProductCard from "../components/ProductCard";

const ProductsScreen = ({ category, setCategory, setProductId }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const filter = products.filter((p) => p.category.includes(category));
    setFilteredProducts(filter);
  }, [category]);

  const renderProductItem = ({ item }) => {
    return (
      <Pressable onPress={() => setProductId(item.id)}>
        <ProductCard item={item} />
      </Pressable>
    );
  };

  return (
    <View style={styles.productsContainer}>
      <Text style={styles.title}>Productos</Text>
      <Pressable onPress={() => setCategory("")} style={{ marginBottom: 10 }}>
        <Icon name="chevron-left" size={30} color={colors.lightGrey} />
      </Pressable>
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
    flex: 1,
    width: "90%",
    alignSelf: "center",
  },
  title: {
    color: colors.lightGrey,
    fontSize: 20,
    marginBottom: 10,
    alignSelf: "center",
  },
});
