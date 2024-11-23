import { useDispatch } from "react-redux";
import { clearUser } from "../../../features/auth/authSlice";
import ProfileScreen from "./ProfileScreen";
import { clearSession } from "../../../db";

const ProfileScreenContainer = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleCloseSession = () => {
    clearSession();
    dispatch(clearUser());
  };

  return (
    <ProfileScreen
      handleCloseSession={handleCloseSession}
      navigation={navigation}
    />
  );
};

export default ProfileScreenContainer;
