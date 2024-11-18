import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { colors } from "../../global/colors";
import { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";
import { hideHeader, showHeader } from "../../features/header/headerSlice";

const Header = ({ navigation, route }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

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
      <Pressable
        style={{ width: "10%", alignItems: "center" }}
        onPress={() => {
          dispatch(hideHeader());
          navigation.navigate("Perfil");
        }}
      >
        <Icon name="account-circle" size={40} color={colors.mediumGrey} />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: colors.black,
    paddingTop: 50,
    paddingBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
    width: "100%",
    //alignSelf: "center",
  },
  textInput: {
    borderRadius: 15,
    backgroundColor: colors.mediumGrey,
    width: "85%",
    paddingHorizontal: 10,
    height: 35,
    alignSelf: "center",
  },
});
