import { Image, Pressable, StyleSheet, TextInput, View } from "react-native";
import { colors } from "../../global/colors";
import { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import { hideHeader } from "../../features/header/headerSlice";

const Header = ({ navigation }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.value);

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
        style={({ pressed }) => [
          { opacity: pressed ? 0.8 : 1 },
          {
            alignItems: "center",
          },
        ]}
        onPress={() => {
          dispatch(hideHeader());
          navigation.navigate("Perfil");
        }}
      >
        {user.profilePicture ? (
          <Image
            source={{ uri: user.profilePicture }}
            style={styles.image}
            resizeMode="contain"
          />
        ) : (
          <Icon name="account-circle" size={45} color={colors.mediumGrey} />
        )}
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
    height: 38,
    alignSelf: "center",
  },
  image: {
    width: 38,
    aspectRatio: 1,
    borderRadius: 25,
  },
});
