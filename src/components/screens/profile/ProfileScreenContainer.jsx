import { useDispatch } from "react-redux";
import { clearUser } from "../../../features/auth/authSlice";
import ProfileScreen from "./ProfileScreen";
import { clearSession } from "../../../db";
import { cleanCart } from "../../../features/cart/cartSlice";

const ProfileScreenContainer = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleCloseSession = () => {
    clearSession();
    dispatch(cleanCart());
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
