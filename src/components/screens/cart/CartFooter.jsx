import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../../../global/colors";
import { cleanCart } from "../../../features/cart/cartSlice";
import { press } from "../../../styles/styles";
import TwoButtonsModal from "../../common/TwoButtonsModal";
import { useState } from "react";

const CartFooter = ({
  dispatch,
  total,
  priceFormat,
  handleBuy,
  modalVisible,
  setModalVisible,
}) => {
  const onCloseCleanModal = () => {
    dispatch(cleanCart());
  };

  const onCloseConfirmModal = () => {
    handleBuy();
  };

  const [buying, setBuying] = useState(false);

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
        style={press({ ...styles.bttn, backgroundColor: colors.red })}
        onPress={() => {
          setBuying(false);
          setModalVisible(true);
        }}
      >
        <Text style={{ ...styles.text, ...styles.bttnText }}>
          Limpiar carrito
        </Text>
      </Pressable>
      <Pressable
        style={press({ ...styles.bttn, backgroundColor: colors.yellow })}
        onPress={() => {
          setBuying(true);
          setModalVisible(true);
        }}
      >
        <Text style={{ ...styles.bttnText, color: colors.black }}>Comprar</Text>
      </Pressable>
      <TwoButtonsModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onCloseModal={buying ? onCloseConfirmModal : onCloseCleanModal}
        onCancelModal={() => {}}
        cancelButton="CANCELAR"
        confirmButton={buying ? "COMPRAR" : "ELIMINAR"}
      >
        <Text style={{ ...styles.text, fontSize: 20 }}>
          {buying
            ? "¿Desea realizar la compra?"
            : "¿Desea eliminar todos los productos del carrito?"}
        </Text>
      </TwoButtonsModal>
    </>
  );
};

export default CartFooter;

const styles = StyleSheet.create({
  bttn: {
    padding: 9,
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
