import { ScrollView, StyleSheet } from "react-native";
import products from "../../../data/products";
import { useEffect, useState } from "react";
import ProductDetailCard from "./ProductDetailCard";

const ProductDetailScreen = ({ route }) => {
  const [product, setProduct] = useState({});
  const productId = route.params;

  useEffect(() => {
    setProduct(products.find((p) => p.id === productId));
  }, [productId]);

  return (
    <ScrollView style={{ width: "90%", alignSelf: "center" }}>
      <ProductDetailCard product={product} />
    </ScrollView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({});
