import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../../../global/colors";
import { cleanCart } from "../../../features/cart/cartSlice";

const CartFooter = ({ dispatch, total }) => {
  return (
    <>
      <Text
        style={{
          ...styles.text,
          ...styles.total,
        }}
      >
        $ {total}
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
        onPress={() => dispatch(cleanCart())}
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
    marginTop: 10,
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
