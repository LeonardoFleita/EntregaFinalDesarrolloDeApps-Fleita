import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { colors } from "../../global/colors";
import { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { press } from "../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { showFav } from "../../features/header/headerSlice";

const Header = ({ navigation }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const isFav = useSelector((state) => state.headerReducer.value.isFav);

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
        returnKeyType="search"
      />
      <Pressable
        style={press({ alignItems: "center" })}
        onPress={() => {
          dispatch(showFav());
          navigation.navigate("Favoritos");
        }}
      >
        <Icon
          name="heart-outline"
          size={38}
          color={isFav ? colors.yellow : colors.mediumGrey}
        />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: colors.black,
    paddingTop: 55,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
    width: "100%",
    //alignSelf: "center",
  },
  textInput: {
    borderRadius: 25,
    backgroundColor: colors.mediumGrey,
    width: "85%",
    paddingHorizontal: 10,
    height: 35,
    alignSelf: "center",
  },
});
