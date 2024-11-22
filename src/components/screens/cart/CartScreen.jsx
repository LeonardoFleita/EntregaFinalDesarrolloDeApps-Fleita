import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../../../global/colors";
import InCart from "./InCart";
import CartFooter from "./CartFooter";
import { priceFormat } from "../../../utils/functions";
import GenericModal from "../../common/GenericModal";

const CartScreen = ({
  cart,
  total,
  dispatch,
  modalVisible,
  setModalVisible,
  handleBuy,
  errorModalVisible,
  setErrorModalVisible,
}) => {
  const renderCartItem = ({ item }) => (
    <InCart item={item} dispatch={dispatch} priceFormat={priceFormat} />
  );

  return (
    <View style={styles.cart}>
      <Text style={styles.textTitle}>Carrito</Text>
      <View style={styles.cartContainer}>
        {cart.length < 1 ? (
          <View style={styles.cartImageContainer}>
            <Image
              source={{
                uri: "https://res.cloudinary.com/drez01kou/image/upload/v1732155586/desarrollo%20de%20apps/ecommerce/aqgv0fffh08i7bmyw0nm.png",
              }}
              style={styles.cartImage}
              resizeMode="contain"
            />
            <Text style={styles.cartImageText}>Carrito vacío</Text>
          </View>
        ) : (
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={renderCartItem}
            ListFooterComponent={
              <CartFooter
                dispatch={dispatch}
                total={total}
                priceFormat={priceFormat}
                handleBuy={handleBuy}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
              />
            }
          />
        )}
      </View>
      <GenericModal
        modalVisible={errorModalVisible}
        setModalVisible={setErrorModalVisible}
        onCloseModal={() => {}}
      >
        <Text style={{ color: colors.lightGrey, fontSize: 20 }}>
          Debe iniciar sesión para realizar la compra
        </Text>
      </GenericModal>
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
  cartImageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50,
  },
  cartImage: {
    width: 350,
    height: 230,
    alignSelf: "center",
  },
  cartImageText: {
    color: colors.lightGrey,
    fontSize: 22,
  },
});
