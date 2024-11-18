import { FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../../global/colors";
import InCart from "./InCart";
import CartFooter from "./CartFooter";
import { priceFormat } from "../../../utils/functions";
import { useState } from "react";

const CartScreen = ({ navigation }) => {
  const cart = useSelector((state) => state.cartReducer.value.cartItems);
  const total = useSelector((state) => state.cartReducer.value.total);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  const renderCartItem = ({ item }) => (
    <InCart item={item} dispatch={dispatch} priceFormat={priceFormat} />
  );

  return (
    <View style={styles.cart}>
      <Text style={styles.textTitle}>Carrito</Text>
      <View style={styles.cartContainer}>
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={renderCartItem}
          ListFooterComponent={
            <CartFooter
              dispatch={dispatch}
              total={total}
              cart={cart}
              navigation={navigation}
              priceFormat={priceFormat}
            />
          }
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
    flex: 1,
    width: "90%",
    alignSelf: "center",
    paddingBottom: 5,
  },
  textTitle: {
    fontSize: 21,
    color: colors.lightGrey,
    fontWeight: "500",
    alignSelf: "center",
    paddingVertical: 13.5,
  },
});
