import { StyleSheet, Text } from "react-native";
import React from "react";
import GenericModal from "../../../common/GenericModal";
import { colors } from "../../../../global/colors";

const AuthModal = ({ modalVisible, setModalVisible, error, setNewUser }) => {
  const onCloseModal = () => {
    error ? null : setNewUser(false);
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
        {error
          ? `Error al agregar usuario ${error}`
          : "Usuario agregado con éxito"}
      </Text>
    </GenericModal>
  );
};

export default AuthModal;

const styles = StyleSheet.create({});
