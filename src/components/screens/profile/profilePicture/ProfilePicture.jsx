import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../../../global/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { press } from "../../../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateProfilePictureMutation } from "../../../../services/userService";
import { useEffect } from "react";
import { setProfilePicture } from "../../../../features/auth/authSlice";
import * as ImagePicker from "expo-image-picker";

const ProfilePicture = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.value);
  const [triggerUpdateProfilePicture] = useUpdateProfilePictureMutation();

  const getCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    return granted;
  };

  const pickImage = async () => {
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
          setProfilePicture(`data:image/jpeg;base64,${result.assets[0].base64}`)
        );
      }
    } else {
      console.log("Permisos rechazados");
    }
  };

  useEffect(() => {
    if (user.profilePicture) {
      triggerUpdateProfilePicture({
        userId: user.localId,
        profilePicture: user.profilePicture,
      });
    }
  }, [user.profilePicture]);

  return (
    <View>
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
        <Pressable style={press({ ...styles.cameraBttn })} onPress={pickImage}>
          <Icon name="camera" size={30} />
        </Pressable>
      </View>
      <Text style={styles.nameText}>{user.name + " " + user.lastname}</Text>
    </View>
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({
  profileImageContainer: {
    height: 160,
    aspectRatio: 1,
    backgroundColor: colors.mediumGrey,
    borderRadius: 100,
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
  nameText: {
    color: colors.lightGrey,
    alignSelf: "center",
    paddingTop: 15,
    fontSize: 20,
    fontWeight: "600",
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
