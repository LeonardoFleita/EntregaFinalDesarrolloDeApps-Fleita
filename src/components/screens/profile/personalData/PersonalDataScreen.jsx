import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import FlatCard from "../../../common/FlatCard";
import ProfilePicture from "../receipts/ProfilePicture";
import { colors } from "../../../../global/colors";
import { buttonStyles, press } from "../../../../styles/styles";

const PersonalDataScreen = ({
  name,
  setName,
  lastname,
  setLastname,
  handleUpdate,
}) => {
  return (
    <View style={styles.personalDataContainer}>
      <FlatCard style={styles.personalDataCard}>
        <ProfilePicture />
        <View style={{ width: "90%", gap: 10 }}>
          <Text style={styles.text}>Nombre:</Text>
          <TextInput
            placeholder="Buscar producto"
            style={styles.textInput}
            returnKeyType="search"
            onChangeText={(text) => setName(text)}
            value={name}
          />
          <Text style={styles.text}>Apellido:</Text>
          <TextInput
            placeholder="Buscar producto"
            style={styles.textInput}
            returnKeyType="search"
            onChangeText={(text) => setLastname(text)}
            value={lastname}
          />
        </View>
        <Pressable
          style={press({ ...buttonStyles.base })}
          onPress={handleUpdate}
        >
          <Text style={buttonStyles.text}>Actualizar datos</Text>
        </Pressable>
      </FlatCard>
    </View>
  );
};

export default PersonalDataScreen;

const styles = StyleSheet.create({
  personalDataContainer: {
    flex: 1,
    alignItems: "center",
  },
  personalDataCard: {
    marginTop: 10,
    width: "90%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    gap: 40,
  },
  textInput: {
    borderRadius: 25,
    backgroundColor: colors.mediumGrey,
    paddingHorizontal: 10,
    height: 35,
  },
  text: {
    color: colors.lightGrey,
    fontSize: 15,
  },
});
