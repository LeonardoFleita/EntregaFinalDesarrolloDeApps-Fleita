import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../../global/colors";

const NoReceipts = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        marginBottom: 25,
      }}
    >
      <Image
        source={{
          uri: "https://res.cloudinary.com/drez01kou/image/upload/v1732482519/desarrollo%20de%20apps/ecommerce/wdybc40pigrcxjdhxez3.png",
        }}
        style={{ width: 232, height: 300 }}
      />
      <Text style={{ color: colors.lightGrey, fontSize: 22 }}>
        Aún no ha realizado compras
      </Text>
    </View>
  );
};

export default NoReceipts;

const styles = StyleSheet.create({});
