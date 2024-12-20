import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../global/colors";

const InConstruction = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={{
          uri: "https://res.cloudinary.com/drez01kou/image/upload/v1732481056/desarrollo%20de%20apps/ecommerce/mxdrjm7dbojvlgbndkqh.png",
        }}
        style={{ width: 350, height: 250 }}
      />
      <Text style={{ color: colors.lightGrey, fontSize: 22 }}>
        En construcción
      </Text>
    </View>
  );
};

export default InConstruction;

const styles = StyleSheet.create({});
