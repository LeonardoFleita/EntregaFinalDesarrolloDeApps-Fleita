import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../global/colors";
import { press } from "../../styles/styles";

const TwoButtonsModal = ({
  children,
  modalVisible,
  setModalVisible,
  onCloseModal,
  confirmButton,
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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              gap: 30,
            }}
          >
            <Pressable onPress={() => setModalVisible(false)}>
              <Text style={{ alignSelf: "flex-end", color: colors.lightGrey }}>
                CANCELAR
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setModalVisible(false);
                onCloseModal();
              }}
              style={press()}
            >
              <Text style={{ alignSelf: "flex-end", color: colors.yellow }}>
                {confirmButton}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TwoButtonsModal;

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
