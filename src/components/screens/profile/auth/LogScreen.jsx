import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { buttonStyles, press, sessionStyles } from "../../../../styles/styles";
import { colors } from "../../../../global/colors";
import AuthModal from "./AuthModal";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const LogScreen = ({
  setNewUser,
  setEmail,
  setPassword,
  onSubmit,
  error,
  setError,
  modalVisible,
  setModalVisible,
  rememberMe,
  setRememberMe,
}) => {
  return (
    <View style={sessionStyles.container}>
      <Text style={sessionStyles.title}>Smartly</Text>
      <View style={sessionStyles.inputContainer}>
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
      </View>
      <View style={sessionStyles.rememberContainer}>
        <Text style={sessionStyles.text}>Mantener sesión iniciada</Text>
        <Pressable style={press()} onPress={() => setRememberMe(!rememberMe)}>
          <Icon
            name={rememberMe ? "toggle-switch" : "toggle-switch-off"}
            color={rememberMe ? colors.yellow : colors.mediumGrey}
            size={45}
          />
        </Pressable>
      </View>
      <Pressable
        style={press({ ...buttonStyles.base, ...styles.logBttn })}
        onPress={onSubmit}
      >
        <Text style={buttonStyles.text}>Iniciar sesión</Text>
      </Pressable>
      <Pressable
        style={press({ marginVertical: 15 })}
        onPress={() => setNewUser(true)}
      >
        <Text
          style={{ ...sessionStyles.text, textDecorationLine: "underline" }}
        >
          Registrarse
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

export default LogScreen;

const styles = StyleSheet.create({
  logBttn: {
    width: "45%",
    borderRadius: 20,
  },
});
