import { FlatList, Pressable, StyleSheet, View } from "react-native";
import Product from "./Product";
import ProductsModal from "./ProductsModal";
import { press } from "../../../styles/styles";

const ProductsScreen = ({
  navigation,
  filteredProducts,
  modalVisible,
  setModalVisible,
  search,
}) => {
  const renderProductItem = ({ item }) => (
    <Pressable
      onPress={() => navigation.navigate("Producto", item.id)}
      style={press()}
    >
      <Product item={item} />
    </Pressable>
  );

  return (
    <View style={styles.productsContainer}>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={renderProductItem}
      />
      <ProductsModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        search={search}
        navigation={navigation}
      />
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  productsContainer: {
    width: "90%",
    alignSelf: "center",
  },
});
