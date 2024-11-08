import { FlatList, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../../global/colors";
import InCart from "./InCart";
import CartFooter from "./CartFooter";

const CartScreen = () => {
  const cart = useSelector((state) => state.cartReducer.value.cartItems);
  const total = useSelector((state) => state.cartReducer.value.total);
  const dispatch = useDispatch();

  const renderCartItem = ({ item }) => (
    <InCart item={item} dispatch={dispatch} />
  );

  return (
    <View style={styles.cart}>
      <View style={styles.cartContainer}>
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={renderCartItem}
          ListFooterComponent={<CartFooter dispatch={dispatch} total={total} />}
        />
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  cart: {
    flex: 1,
    backgroundColor: colors.black,
  },
  cartContainer: {
    width: "90%",
    alignSelf: "center",
    paddingBottom: 60,
  },
});
