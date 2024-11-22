import products from "../../../data/products";
import { useEffect, useState } from "react";
import ProductDetailScreen from "./ProductDetailScreen";

const ProductDetailScreenContainer = ({ route, navigation }) => {
  const [product, setProduct] = useState({});
  const productId = route.params;

  useEffect(() => {
    setProduct(products.find((p) => p.id === productId));
  }, [productId]);
  return <ProductDetailScreen navigation={navigation} product={product} />;
};

export default ProductDetailScreenContainer;
