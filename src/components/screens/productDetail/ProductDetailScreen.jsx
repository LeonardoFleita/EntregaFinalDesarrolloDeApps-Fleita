import { ScrollView, StyleSheet } from "react-native";
import ProductDetailCard from "./ProductDetailCard";

const ProductDetailScreen = ({ navigation, product }) => {
  return (
    <ScrollView style={{ width: "90%", alignSelf: "center" }}>
      <ProductDetailCard product={product} navigation={navigation} />
    </ScrollView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({});
