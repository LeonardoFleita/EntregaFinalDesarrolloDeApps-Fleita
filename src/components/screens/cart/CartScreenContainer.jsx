import { StyleSheet } from "react-native";
import CartScreen from "./CartScreen";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  useGetReceiptsQuery,
  usePostReceiptMutation,
} from "../../../services/userService";
import { cleanCart } from "../../../features/cart/cartSlice";
import { showToast } from "../../../global/toastConfig";
import { useIsFocused } from "@react-navigation/native";
import { hideFav } from "../../../features/header/headerSlice";

const CartScreenContainer = ({ navigation }) => {
  const cart = useSelector((state) => state.cartReducer.value.cartItems);
  const total = useSelector((state) => state.cartReducer.value.total);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const isFocused = useIsFocused();
  const [triggerPost] = usePostReceiptMutation();
  const user = useSelector((state) => state.authReducer.value);

  const { refetch } = useGetReceiptsQuery({ localId: user.localId });

  const handleBuy = async () => {
    if (user.email) {
      await triggerPost({
        userId: user.localId,
        receipt: { cart, total, createAt: Date.now() },
      });
      refetch();
      dispatch(cleanCart());
      showToast("success", "Compra realizada con éxito");
      navigation.navigate("Categorías");
    } else {
      setErrorModalVisible(true);
    }
  };

  useEffect(() => {
    isFocused && dispatch(hideFav());
  }, [isFocused]);

  return (
    <CartScreen
      navigation={navigation}
      cart={cart}
      total={total}
      dispatch={dispatch}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      handleBuy={handleBuy}
      errorModalVisible={errorModalVisible}
      setErrorModalVisible={setErrorModalVisible}
    />
  );
};

export default CartScreenContainer;

const styles = StyleSheet.create({});
