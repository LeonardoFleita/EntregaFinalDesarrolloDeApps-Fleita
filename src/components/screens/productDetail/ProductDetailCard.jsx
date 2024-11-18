import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import FlatCard from "../../common/FlatCard";
import { colors } from "../../../global/colors";
import { useDispatch } from "react-redux";
import { addItem } from "../../../features/cart/cartSlice";
import { priceFormat } from "../../../utils/functions";
import { buttonStyles } from "../../../styles/styles";

const ProductDetailCard = ({ product, navigation }) => {
  const dispatch = useDispatch();

  return (
    <FlatCard style={styles.productContainer}>
      <View style={styles.imageContainer}>
        {product.image && (
          <Image
            source={{ uri: product.image[0] }}
            style={styles.image}
            resizeMode="contain"
          />
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={{ ...styles.text, ...styles.title }}>{product.name}</Text>
        <Text style={{ ...styles.text, ...styles.description }}>
          {product.description}
        </Text>
        <Text style={styles.text}>Marca: {product.brand}</Text>
        <View style={{ flexDirection: "row", gap: 15 }}>
          {product.tags &&
            product.tags.map((tag, index) => (
              <Text key={index} style={{ ...styles.text, ...styles.tags }}>
                {tag}
              </Text>
            ))}
        </View>
        {product.discount > 0 && (
          <Text style={styles.discount}>Descuento: %{product.discount}</Text>
        )}
        <Text style={styles.price}>
          {product.price && priceFormat(product.price, 0)}
        </Text>
        <Pressable
          style={({ pressed }) => [
            { opacity: pressed ? 0.7 : 1 },
            buttonStyles.base,
          ]}
          onPress={() => {
            dispatch(addItem({ ...product, quantity: 1 }));
            navigation.navigate("Carrito");
          }}
        >
          <Text style={buttonStyles.text}>Agregar al carrito</Text>
        </Pressable>
      </View>
    </FlatCard>
  );
};

export default ProductDetailCard;

const styles = StyleSheet.create({
  productContainer: {
    marginTop: 10,
  },
  imageContainer: {
    backgroundColor: colors.mediumGrey,
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1.2,
    borderRadius: 15,
  },
  image: {
    width: "80%",
    height: "80%",
  },
  textContainer: {
    justifyContent: "space-around",
    gap: 8,
    margin: 16,
  },
  text: {
    color: colors.lightGrey,
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    alignSelf: "center",
    marginBottom: 10,
  },
  description: {
    textAlign: "justify",
  },
  tags: {
    color: colors.cyan,
    fontWeight: "500",
  },
  discount: {
    color: colors.green,
    fontWeight: "600",
    fontSize: 18,
  },
  price: {
    fontSize: 28,
    fontWeight: "600",
    alignSelf: "flex-end",
    color: colors.lightGrey,
  },
});
