import { Image, StyleSheet, View } from "react-native";
import { colors } from "../../global/colors";
import FlatCard from "./FlatCard";

const ProductCard = ({
  item,
  children,
  imageContainerStyle,
  textContainerStyle,
}) => {
  return (
    <FlatCard style={styles.productCard}>
      <View style={{ ...styles.imageContainer, ...imageContainerStyle }}>
        <Image
          source={{ uri: item.image[0] }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={{ ...styles.textContainer, ...textContainerStyle }}>
        {children}
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
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "75%",
    height: "75%",
  },
  textContainer: {
    flex: 1,
  },
});
