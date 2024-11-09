import { StyleSheet, TextInput, View } from "react-native";
import { colors } from "../../global/colors";
import { useState } from "react";

const Header = ({ navigation, route }) => {
  const [input, setInput] = useState("");
  const handlerSearch = () => {
    const wanted = input;
    setInput("");
    navigation.navigate("Productos", {
      search: wanted.toLocaleLowerCase(),
    });
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Buscar producto"
        style={styles.textInput}
        onChangeText={(text) => setInput(text)}
        onSubmitEditing={handlerSearch}
        value={input}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: colors.black,
    paddingTop: 50,
    paddingBottom: 5,
  },
  textInput: {
    borderRadius: 15,
    backgroundColor: colors.mediumGrey,
    width: "90%",
    paddingHorizontal: 10,
    height: 35,
    alignSelf: "center",
  },
});
