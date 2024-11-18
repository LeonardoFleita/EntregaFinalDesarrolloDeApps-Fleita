import { ScrollView, StyleSheet } from "react-native";
import products from "../../../data/products";
import { useEffect, useState } from "react";
import ProductDetailCard from "./ProductDetailCard";
import { useDispatch } from "react-redux";
import { showHeader } from "../../../features/header/headerSlice";
import { useIsFocused } from "@react-navigation/native";

const ProductDetailScreen = ({ route, navigation }) => {
  const [product, setProduct] = useState({});
  const productId = route.params;
  const dispatch = useDispatch();

  const isFocused = useIsFocused();

  useEffect(() => {
    isFocused && dispatch(showHeader());
  }, [isFocused]);

  useEffect(() => {
    setProduct(products.find((p) => p.id === productId));
  }, [productId]);

  return (
    <ScrollView style={{ width: "90%", alignSelf: "center" }}>
      <ProductDetailCard product={product} navigation={navigation} />
    </ScrollView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({});
