import products from "../../../data/products";
import { useEffect, useState } from "react";
import ProductDetailScreen from "./ProductDetailScreen";
import { useDispatch, useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import { hideFav } from "../../../features/header/headerSlice";
import { useSetFavouritesMutation } from "../../../services/userService";
import { setFavourites } from "../../../features/auth/authSlice";
import { showToast } from "../../../global/toastConfig";

const ProductDetailScreenContainer = ({ route, navigation }) => {
  const [product, setProduct] = useState({});
  const productId = route.params;
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.value);
  const [favourite, setFavourite] = useState(false);
  const [triggerSetFavourites] = useSetFavouritesMutation();

  useEffect(() => {
    isFocused && dispatch(hideFav());
  }, [isFocused]);

  useEffect(() => {
    setProduct(products.find((p) => p.id === productId));
  }, [productId]);

  useEffect(() => {
    if (user && user.favourites.some((p) => p.id === productId)) {
      setFavourite(true);
    } else {
      setFavourite(false);
    }
  }, [productId, user]);

  const handleFavorite = async () => {
    try {
      const updatedFavourites = favourite
        ? user.favourites.filter((p) => p.id !== product.id)
        : [...user.favourites, product];

      dispatch(setFavourites(updatedFavourites));

      const favouritesObject = updatedFavourites.reduce((acc, fav) => {
        acc[fav.id] = fav;
        return acc;
      }, {});

      await triggerSetFavourites({
        userId: user.localId,
        favourites: favouritesObject,
      }).unwrap();

      favourite
        ? showToast("error", "Producto removido de favoritos")
        : showToast("success", "Producto agregado a favoritos");
    } catch (error) {
      console.error("Error actualizando favoritos:", error);
    }
  };

  return (
    <ProductDetailScreen
      navigation={navigation}
      product={product}
      user={user}
      handleFavorite={handleFavorite}
      favourite={favourite}
    />
  );
};

export default ProductDetailScreenContainer;
