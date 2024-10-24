import { Pressable, ScrollView, StyleSheet } from "react-native";
import { colors } from "../global/colors";
import { products } from "../data/products";
import { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import ProductDetailCard from "../components/ProductDetailCard";

const ProductDetailScreen = ({ productId, setProductId }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(products.find((p) => p.id === productId));
  }, [productId]);

  return (
    <ScrollView style={{ width: "90%", alignSelf: "center" }}>
      <Pressable style={{ marginBottom: 10 }}>
        <Icon
          name="chevron-left"
          size={30}
          color={colors.lightGrey}
          onPress={() => setProductId("")}
        />
      </Pressable>
      <ProductDetailCard product={product} />
    </ScrollView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({});
