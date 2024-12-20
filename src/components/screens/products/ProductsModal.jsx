import { StyleSheet, Text } from "react-native";
import { colors } from "../../../global/colors";
import GenericModal from "../../common/GenericModal";

const ProductsModal = ({
  modalVisible,
  setModalVisible,
  search,
  navigation,
}) => {
  const onCloseModal = () => {
    navigation.navigate("Categorías");
  };
  return (
    <GenericModal
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      onCloseModal={onCloseModal}
    >
      <Text
        style={{
          color: colors.lightGrey,
          fontSize: 22,
          alignSelf: "center",
        }}
      >
        No se ha encontrado ningún producto: "{search}"
      </Text>
    </GenericModal>
  );
};

export default ProductsModal;

const styles = StyleSheet.create({});
