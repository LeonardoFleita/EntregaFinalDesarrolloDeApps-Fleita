import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../../../global/colors";
import { cleanCart } from "../../../features/cart/cartSlice";
import { usePostReceiptMutation } from "../../../services/receiptsService";

const CartFooter = ({ dispatch, total, cart, navigation, priceFormat }) => {
  const [triggerPost, result] = usePostReceiptMutation();
  const comprar = async () => {
    try {
      await triggerPost({ cart, total, createAt: Date.now() });
      dispatch(cleanCart());
      navigation.navigate("Recibos");
    } catch (err) {
      console.error("Error al procesar la compra", err);
    }
  };

  return (
    <>
      <Text
        style={{
          ...styles.text,
          ...styles.total,
        }}
      >
        {priceFormat(total, 2)}
      </Text>
      <Pressable
        style={{ ...styles.bttn, backgroundColor: colors.red }}
        onPress={() => dispatch(cleanCart())}
      >
        <Text style={{ ...styles.text, ...styles.bttnText }}>
          Limpiar carrito
        </Text>
      </Pressable>
      <Pressable
        style={{ ...styles.bttn, backgroundColor: colors.yellow }}
        onPress={comprar}
      >
        <Text style={{ ...styles.bttnText, color: colors.black }}>Comprar</Text>
      </Pressable>
    </>
  );
};

export default CartFooter;

const styles = StyleSheet.create({
  bttn: {
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 13,
  },
  bttnText: {
    fontSize: 18,
    fontWeight: 600,
  },
  total: {
    alignSelf: "flex-end",
    fontSize: 30,
    fontWeight: 600,
    marginVertical: 10,
  },
  text: {
    color: colors.lightGrey,
  },
});
