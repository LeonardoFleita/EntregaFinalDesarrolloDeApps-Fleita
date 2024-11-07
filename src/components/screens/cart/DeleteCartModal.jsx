import { Modal, StyleSheet, Text, View } from "react-native";
import React from "react";

const DeleteCartModal = ({ deleteModalVisibility }) => {
  return (
    <Modal visible={deleteModalVisibility}>
      <Text>DeleteCartModal</Text>
    </Modal>
  );
};

export default DeleteCartModal;

const styles = StyleSheet.create({});
