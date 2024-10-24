import { StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";

const FlatCard = ({ children, style }) => {
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

export default FlatCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.darkGrey,
    borderRadius: 15,
  },
});
