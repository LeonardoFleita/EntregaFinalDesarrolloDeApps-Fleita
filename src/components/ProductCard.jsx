import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import FlatCard from "./FlatCard";
import { colors } from "../global/colors";

const ProductCard = ({ item }) => {
  return (
    <FlatCard style={styles.productCard}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.image[0] }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textContainer}>
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
      </View>
    </FlatCard>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  productCard: {
    flexDirection: "row",
    marginVertical: 10,
    alignSelf: "center",
  },
  imageContainer: {
    backgroundColor: colors.mediumGrey,
    borderRadius: 15,
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 120,
    height: 120,
  },
  textContainer: {
    flex: 1,
    padding: 15,
    gap: 5,
    height: 150,
    //justifyContent: "space-between",
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
