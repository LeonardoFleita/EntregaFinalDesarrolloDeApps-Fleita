import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import FlatCard from "../../common/FlatCard";
import { useDispatch } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import { showHeader } from "../../../features/header/headerSlice";
import { colors } from "../../../global/colors";

const Profile = () => {
  const dispatch = useDispatch();

  const isFocused = useIsFocused();

  useEffect(() => {
    isFocused && dispatch(showHeader());
  }, [isFocused]);

  return (
    <View style={styles.profileContainer}>
      <FlatCard style={styles.profileCard}>
        <View style={styles.profileImageContainer}></View>
      </FlatCard>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    alignItems: "center",
  },
  profileCard: {
    flex: 1,
    marginTop: 10,
    width: "90%",
    alignItems: "center",
  },
  profileImageContainer: {
    height: 180,
    aspectRatio: 1,
    backgroundColor: colors.lightGrey,
    borderRadius: 100,
    marginTop: 20,
  },
});
