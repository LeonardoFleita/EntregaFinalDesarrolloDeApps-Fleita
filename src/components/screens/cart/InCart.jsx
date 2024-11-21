import { Pressable, StyleSheet, Text, View } from "react-native";
import ProductCard from "../../common/ProductCard";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../../../global/colors";
import {
  incrementItem,
  decrementItem,
  deleteItem,
} from "../../../features/cart/cartSlice";
import { press } from "../../../styles/styles";

const InCart = ({ item, dispatch, priceFormat }) => {
  const totalPriceItem = item.price * item.quantity;

  const quantityIcon = (name, action) => (
    <Pressable style={press()} onPress={() => dispatch(action)}>
      <Icon name={name} size={25} color={colors.yellow} />
    </Pressable>
  );
  return (
    <ProductCard
      item={item}
      imageContainerStyle={styles.imageContainerStyle}
      textContainerStyle={styles.textContainerStyle}
    >
      <Text style={{ ...styles.text, ...styles.productName }}>{item.name}</Text>
      <View style={styles.productQuantity}>
        {quantityIcon("minus-box", decrementItem(item))}
        <Text style={{ ...styles.text, ...styles.quantity }}>
          {" "}
          {item.quantity}{" "}
        </Text>
        {quantityIcon("plus-box", incrementItem(item))}
        <Pressable
          style={press({ paddingLeft: 25 })}
          onPress={() => dispatch(deleteItem(item))}
        >
          <Icon name="delete" size={30} color={colors.yellow} />
        </Pressable>
      </View>
      <Text style={{ ...styles.text }}>
        Precio unitario: {priceFormat(item.price, 0)}
      </Text>

      <Text style={{ ...styles.text, ...styles.productTotal }}>
        Total: {priceFormat(totalPriceItem, 0)}
      </Text>
    </ProductCard>
  );
};

export default InCart;

const styles = StyleSheet.create({
  imageContainerStyle: {
    width: 150,
    height: 170,
  },
  textContainerStyle: {
    height: 170,
    padding: 10,
    justifyContent: "space-between",
  },
  productName: {
    fontWeight: "bold",
  },
  text: {
    color: colors.lightGrey,
  },
  productQuantity: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  quantity: {
    fontSize: 18,
  },
  productTotal: {
    fontSize: 18,
    fontWeight: 700,
  },
});
