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
import { searchedProduct } from "../../../utils/functions";
import ProductsModal from "./ProductsModal";

const ProductsScreen = ({ navigation, route }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const { data: products, error, isLoading } = useGetProductsQuery();
  const { category, search } = route.params;

  useEffect(() => {
    if (products) {
      const prods = Object.values(products);
      let filter = [];
      if (category) {
        filter = prods.filter(
          (p) => p.category && p.category.includes(category)
        );
      } else if (search) {
        filter = prods.filter((p) => searchedProduct(p, search));
        filter.length < 1 && setModalVisible(true);
      }
      setFilteredProducts(filter);
    }
  }, [category, products, search]);

  const renderProductItem = ({ item }) => (
    <Pressable
      onPress={() => navigation.navigate("Producto", item.id)}
      style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }]}
    >
      <Product item={item} />
    </Pressable>
  );

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
          <ProductsModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            search={search}
            navigation={navigation}
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
