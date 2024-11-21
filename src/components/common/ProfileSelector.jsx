import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../../global/colors";
import { press } from "../../styles/styles";

const ProfileSelector = ({ nameIcon, legend, navigation, navigateTo }) => {
  return (
    <Pressable
      style={press({ ...styles.selector })}
      onPress={() => navigation.navigate(navigateTo)}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
        <Icon name={nameIcon} size={35} color={colors.darkGrey} />
        <Text>{legend}</Text>
      </View>
      <Icon name="chevron-right" size={35} />
    </Pressable>
  );
};

export default ProfileSelector;

const styles = StyleSheet.create({
  selector: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingVertical: 5,
    backgroundColor: colors.mediumGrey,
    width: "90%",
    borderRadius: 10,
  },
});
