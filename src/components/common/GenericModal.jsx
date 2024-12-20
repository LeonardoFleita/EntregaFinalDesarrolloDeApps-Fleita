import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../global/colors";
import { press } from "../../styles/styles";

const GenericModal = ({
  modalVisible,
  setModalVisible,
  children,
  onCloseModal,
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
          {children}
          <Pressable
            onPress={() => {
              setModalVisible(false);
              onCloseModal();
            }}
            style={press()}
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

export default GenericModal;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: colors.darkGrey,
    borderRadius: 15,
    paddingHorizontal: "10%",
    width: "90%",
    paddingVertical: 30,
    gap: 30,
  },
});
