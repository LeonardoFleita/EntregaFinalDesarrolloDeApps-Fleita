import { Image, StyleSheet, Text, View } from "react-native";
import ProductsScreen from "../products/ProductsScreen";
import { colors } from "../../../global/colors";

const FavouritesScreen = ({
  favourites,
  modalVisible,
  setModalVisible,
  navigation,
}) => {
  if (favourites.length > 0) {
    return (
      <ProductsScreen
        filteredProducts={favourites}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        navigation={navigation}
      />
    );
  } else {
    return (
      <View style={styles.emptyFavContainer}>
        <Image
          source={{
            uri: "https://res.cloudinary.com/drez01kou/image/upload/v1732401508/desarrollo%20de%20apps/ecommerce/zyp1wxwsz40kbzddfg6b.png",
          }}
          style={styles.image}
        />
        <Text
          style={{ color: colors.lightGrey, fontSize: 22, marginBottom: 50 }}
        >
          No hay favoritos
        </Text>
      </View>
    );
  }
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  emptyFavContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  image: {
    width: 310,
    height: 250,
  },
});
