import { FlatList, Image, StyleSheet, Text } from "react-native";
import { colors } from "../../../global/colors";
import ProductCard from "../../common/ProductCard";

const Product = ({ item }) => {
  return (
    <ProductCard
      item={item}
      imageContainerStyle={styles.imageContainerStyle}
      textContainerStyle={styles.textContainerStyle}
    >
      <Text style={{ ...styles.productText, ...styles.productName }}>
        {item.name}
      </Text>
      <FlatList
        style={styles.tags}
        data={item.tags}
        keyExtractor={() => Math.random()}
        renderItem={({ item }) => <Text style={styles.tag}>{item}</Text>}
      />
      {item.discount > 0 && (
        <Text style={styles.discount}>Descuento: {item.discount}%</Text>
      )}
      <Text style={{ ...styles.productText, fontSize: 18 }}>
        $ {item.price}
      </Text>
    </ProductCard>
  );
};

export default Product;

const styles = StyleSheet.create({
  imageContainerStyle: {
    width: 150,
    height: 150,
  },
  textContainerStyle: {
    height: 150,
    padding: 15,
    gap: 5,
  },
  tags: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 5,
  },
  tag: {
    color: colors.cyan,
    fontWeight: "600",
  },
  productName: {
    fontWeight: "bold",
  },
  productText: {
    color: colors.lightGrey,
  },
  discount: {
    color: colors.green,
    fontWeight: "bold",
  },
});
