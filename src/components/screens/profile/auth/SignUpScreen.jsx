import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { buttonStyles, press, sessionStyles } from "../../../../styles/styles";
import { colors } from "../../../../global/colors";
import AuthModal from "./AuthModal";

const SignUpScreen = ({
  setNewUser,
  setEmail,
  setPassword,
  setConfirmPassword,
  setName,
  setLastname,
  modalVisible,
  error,
  setError,
  onSubmit,
  setModalVisible,
}) => {
  return (
    <View style={sessionStyles.container}>
      <Text style={sessionStyles.title}>Smartly</Text>
      <View style={{ ...sessionStyles.inputContainer, marginBottom: 20 }}>
        <TextInput
          onChangeText={(text) => setName(text)}
          placeholder="Nombre"
          style={sessionStyles.textInput}
        />
        <TextInput
          onChangeText={(text) => setLastname(text)}
          placeholder="Apellido"
          style={sessionStyles.textInput}
        />
        <TextInput
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          style={sessionStyles.textInput}
          autoCapitalize="none"
        />
        <TextInput
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          style={sessionStyles.textInput}
          secureTextEntry
          autoCapitalize="none"
        />
        <TextInput
          onChangeText={(text) => setConfirmPassword(text)}
          placeholder="Repetir password"
          style={sessionStyles.textInput}
          secureTextEntry
          autoCapitalize="none"
        />
      </View>
      <Pressable
        style={press({ ...buttonStyles.base, ...styles.signUpBttn })}
        onPress={onSubmit}
      >
        <Text style={buttonStyles.text}>Registrarse</Text>
      </Pressable>
      <Pressable
        style={press({ marginVertical: 15 })}
        onPress={() => setNewUser(false)}
      >
        <Text
          style={{
            color: colors.lightGrey,
            textDecorationLine: "underline",
            fontSize: 16,
          }}
        >
          Iniciar sesión
        </Text>
      </Pressable>
      <AuthModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        error={error}
        setError={setError}
        setNewUser={setNewUser}
      />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  signUpBttn: {
    width: "40%",
    borderRadius: 20,
  },
});
