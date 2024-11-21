import { StyleSheet, ActivityIndicator } from "react-native";
import { useGetProductsQuery } from "../../../services/shopService";
import { useEffect, useState } from "react";
import { searchedProduct } from "../../../utils/functions";
import ProductsScreen from "./ProductsScreen";

const ProductsScreenContainer = ({ navigation, route }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const { data: products, isLoading } = useGetProductsQuery();
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

  return (
    <>
      {isLoading ? (
        <ActivityIndicator size={30} />
      ) : (
        <ProductsScreen
          navigation={navigation}
          route={route}
          filteredProducts={filteredProducts}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          search={search}
        />
      )}
    </>
  );
};

export default ProductsScreenContainer;

const styles = StyleSheet.create({});
