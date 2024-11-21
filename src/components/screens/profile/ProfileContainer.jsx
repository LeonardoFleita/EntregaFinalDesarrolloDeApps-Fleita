import SignUpScreenContainer from "./auth/SignUpScreenContainer";
import { useState } from "react";
import { useSelector } from "react-redux";
import ProfileScreenContainer from "./ProfileScreenContainer";
import LogScreenContainer from "./auth/LogScreenContainer";

const ProfileContainer = ({ navigation }) => {
  const [newUser, setNewUser] = useState(false);
  const user = useSelector((state) => state.authReducer.value);

  return (
    <>
      {user.email ? (
        <ProfileScreenContainer navigation={navigation} />
      ) : newUser ? (
        <SignUpScreenContainer setNewUser={setNewUser} />
      ) : (
        <LogScreenContainer setNewUser={setNewUser} />
      )}
    </>
  );
};

export default ProfileContainer;
