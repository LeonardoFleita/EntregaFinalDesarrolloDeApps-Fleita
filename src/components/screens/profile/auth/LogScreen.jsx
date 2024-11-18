import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { buttonStyles, sessionStyles } from "../../../../styles/styles";
import { colors } from "../../../../global/colors";
import AuthModal from "./AuthModal";

const LogScreen = ({
  setNewUser,
  setEmail,
  setPassword,
  onSubmit,
  error,
  modalVisible,
  setModalVisible,
}) => {
  return (
    <View style={sessionStyles.container}>
      <Text style={sessionStyles.title}>Smartly</Text>
      <View style={sessionStyles.inputContainer}>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          style={sessionStyles.textInput}
        />
        <TextInput
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          style={sessionStyles.textInput}
          secureTextEntry
        />
      </View>
      <Pressable
        style={({ pressed }) => [
          { opacity: pressed ? 0.7 : 1 },
          { ...buttonStyles.base, ...styles.logBttn },
        ]}
        onPress={onSubmit}
      >
        <Text style={buttonStyles.text}>Iniciar sesión</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          { opacity: pressed ? 0.7 : 1 },
          { marginVertical: 15 },
        ]}
        onPress={() => setNewUser(true)}
      >
        <Text
          style={{
            color: colors.lightGrey,
            textDecorationLine: "underline",
            fontSize: 16,
          }}
        >
          Registrarse
        </Text>
      </Pressable>
      <AuthModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        error={error}
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
