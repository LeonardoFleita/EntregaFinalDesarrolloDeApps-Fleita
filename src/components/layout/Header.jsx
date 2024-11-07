import { StyleSheet, TextInput, View } from "react-native";
import { colors } from "../../global/colors";

const Header = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput placeholder="Buscar producto" style={styles.textInput} />
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
