import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { clearUser, setProfilePicture } from "../../../features/auth/authSlice";
import { useUpdateProfilePictureMutation } from "../../../services/userService";
import ProfileScreen from "./ProfileScreen";

const ProfileScreenContainer = ({ navigation }) => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const user = useSelector((state) => state.authReducer.value);
  const [triggerUpdateProfilePicture] = useUpdateProfilePictureMutation();

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

  const handleCloseSession = () => {
    dispatch(clearUser());
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
    <ProfileScreen
      user={user}
      pickImage={pickImage}
      handleCloseSession={handleCloseSession}
      navigation={navigation}
    />
  );
};

export default ProfileScreenContainer;
