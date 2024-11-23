import { ScrollView, StyleSheet } from "react-native";
import ProductDetailCard from "./ProductDetailCard";

const ProductDetailScreen = ({
  navigation,
  product,
  user,
  handleFavorite,
  favourite,
}) => {
  return (
    <ScrollView style={{ width: "90%", alignSelf: "center" }}>
      <ProductDetailCard
        product={product}
        navigation={navigation}
        user={user}
        handleFavorite={handleFavorite}
        favourite={favourite}
      />
    </ScrollView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({});
