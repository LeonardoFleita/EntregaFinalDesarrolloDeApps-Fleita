import { StyleSheet } from "react-native";
import CartScreen from "./CartScreen";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  useGetReceiptsQuery,
  usePostReceiptMutation,
} from "../../../services/userService";
import { cleanCart } from "../../../features/cart/cartSlice";

const CartScreenContainer = ({ navigation }) => {
  const cart = useSelector((state) => state.cartReducer.value.cartItems);
  const total = useSelector((state) => state.cartReducer.value.total);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

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
      navigation.navigate("Categorías");
    } else {
      console.log("sin loguearse");
    }
  };

  return (
    <CartScreen
      navigation={navigation}
      cart={cart}
      total={total}
      dispatch={dispatch}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      handleBuy={handleBuy}
    />
  );
};

export default CartScreenContainer;

const styles = StyleSheet.create({});
