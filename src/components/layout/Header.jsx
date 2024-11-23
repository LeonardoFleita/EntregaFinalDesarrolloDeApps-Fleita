import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../../global/colors";
import { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { press } from "../../styles/styles";
import { useSelector } from "react-redux";
import GenericModal from "../common/GenericModal";

const Header = ({ navigation }) => {
  const [input, setInput] = useState("");
  const isFav = useSelector((state) => state.headerReducer.value.isFav);
  const user = useSelector((state) => state.authReducer.value);
  const [modalVisible, setModalVisible] = useState(false);

  const handlerSearch = () => {
    const wanted = input;
    setInput("");
    navigation.navigate("Productos", {
      search: wanted.toLocaleLowerCase(),
    });
  };

  const handleFavourites = () => {
    if (!user.email) {
      return setModalVisible(true);
    }
    navigation.navigate("Favoritos");
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
        onPress={handleFavourites}
      >
        <Icon
          name={isFav ? "heart" : "heart-outline"}
          size={38}
          color={isFav ? colors.yellow : colors.mediumGrey}
        />
      </Pressable>
      <GenericModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onCloseModal={() => {}}
      >
        <Text style={{ color: colors.lightGrey, fontSize: 20 }}>
          Debe iniciar sesión para poder marcar productos como favoritos y
          acceder a esta sección
        </Text>
      </GenericModal>
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
