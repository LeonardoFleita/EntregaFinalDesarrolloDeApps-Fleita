import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../../global/colors";

const ProductsModal = ({
  modalVisible,
  setModalVisible,
  search,
  navigation,
}) => {
  return (
    <Modal
      visible={modalVisible}
      transparent={true}
      animationType={"slide"}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text
            style={{
              color: colors.lightGrey,
              fontSize: 22,
              alignSelf: "center",
            }}
          >
            No se ha encontrado ningún producto: "{search}"
          </Text>
          <Pressable
            onPress={() => {
              setModalVisible(false);
              navigation.navigate("Categorías");
            }}
          >
            <Text style={{ alignSelf: "flex-end", color: colors.yellow }}>
              CERRAR
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default ProductsModal;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: colors.darkGrey,
    borderRadius: 15,
    paddingHorizontal: "10%",
    width: "90%",
    height: "20%",
    justifyContent: "space-around",
  },
});
