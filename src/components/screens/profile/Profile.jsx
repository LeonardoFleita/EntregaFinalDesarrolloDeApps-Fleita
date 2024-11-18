import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import FlatCard from "../../common/FlatCard";
import { useDispatch, useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import { showHeader } from "../../../features/header/headerSlice";
import { colors } from "../../../global/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as ImagePicker from "expo-image-picker";
import { setProfilePicture } from "../../../features/auth/authSlice";
import { useSaveUserDataMutation } from "../../../services/userService";

const Profile = () => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const user = useSelector((state) => state.authReducer.value);
  const [triggerSaveUserData] = useSaveUserDataMutation();

  const getCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    return granted;
  };

  const pickImage = async () => {
    try {
      const permissions = await getCameraPermissions();
      if (permissions) {
        let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [1, 1],
          base64: true,
          quality: 0.7,
        });
        if (!result.canceled) {
          dispatch(
            setProfilePicture(
              `data:image/jpeg;base64,${result.assets[0].base64}`
            )
          );
        }
      } else {
        console.log("not");
      }
    } catch (err) {}
  };

  useEffect(() => {
    isFocused && dispatch(showHeader());
  }, [isFocused]);

  useEffect(() => {
    if (user.profilePicture) {
      triggerSaveUserData({
        userId: user.localId,
        data: {
          name: user.name,
          lastname: user.lastname,
          email: user.email,
          profilePicture: user.profilePicture,
        },
      });
    }
  }, [user.profilePicture]);

  return (
    <View style={styles.profileContainer}>
      <FlatCard style={styles.profileCard}>
        <View style={styles.profileImageContainer}>
          {user.profilePicture ? (
            <Image
              source={{ uri: user.profilePicture }}
              style={styles.image}
              resizeMode="contain"
            />
          ) : (
            <Text style={styles.textProfilePlaceHolder}>
              {user.name.charAt(0).toUpperCase() +
                user.lastname.charAt(0).toUpperCase()}
            </Text>
          )}

          <Pressable
            style={({ pressed }) => [
              { opacity: pressed ? 0.8 : 1 },
              { ...styles.cameraBttn },
            ]}
            onPress={pickImage}
          >
            <Icon name="camera" size={30} />
          </Pressable>
        </View>
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
    height: 160,
    aspectRatio: 1,
    backgroundColor: colors.mediumGrey,
    borderRadius: 100,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  textProfilePlaceHolder: {
    fontSize: 80,
    fontWeight: "semibold",
    paddingBottom: 5,
  },
  image: {
    height: 155,
    aspectRatio: 1,
    borderRadius: 100,
  },
  cameraBttn: {
    borderRadius: 25,
    backgroundColor: colors.yellow,
    padding: 10,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});
