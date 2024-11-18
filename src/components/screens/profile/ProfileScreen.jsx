import { StyleSheet } from "react-native";
import SignUpScreenContainer from "./auth/SignUpScreenContainer";
import { useState } from "react";
import { useSelector } from "react-redux";
import Profile from "./Profile";
import LogScreenContainer from "./auth/LogScreenContainer";

const ProfileScreen = () => {
  const [newUser, setNewUser] = useState(false);
  const user = useSelector((state) => state.authReducer.value);

  return (
    <>
      {user.email ? (
        <Profile />
      ) : newUser ? (
        <SignUpScreenContainer setNewUser={setNewUser} />
      ) : (
        <LogScreenContainer setNewUser={setNewUser} />
      )}
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
