import { StyleSheet } from "react-native";
import SignUpScreen from "./SignUpScreen";
import { useState } from "react";
import { useSignUpMutation } from "../../../../services/authService";
import { useSaveUserDataMutation } from "../../../../services/userService";

const SignUpScreenContainer = ({ setNewUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [triggerSignUp] = useSignUpMutation();
  const [triggerSaveUserData] = useSaveUserDataMutation();
  const [error, setError] = useState(null);

  const onSubmit = async () => {
    try {
      if (password !== confirmPassword) {
        setError(": Las contraseñas no coinciden");
        setModalVisible(true);
        return;
      }
      const response = await triggerSignUp({ email, password }).unwrap();
      const userId = response.localId;
      await triggerSaveUserData({ userId, data: { name, lastname, email } });
      setModalVisible(true);
    } catch (err) {
      setError(err.data.error.message);
      setModalVisible(true);
    }
  };
  return (
    <SignUpScreen
      setNewUser={setNewUser}
      setEmail={setEmail}
      setPassword={setPassword}
      setConfirmPassword={setConfirmPassword}
      setName={setName}
      setLastname={setLastname}
      setModalVisible={setModalVisible}
      modalVisible={modalVisible}
      error={error}
      onSubmit={onSubmit}
    />
  );
};

export default SignUpScreenContainer;

const styles = StyleSheet.create({});
