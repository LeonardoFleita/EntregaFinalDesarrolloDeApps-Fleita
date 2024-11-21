import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import FlatCard from "../../../common/FlatCard";
import { colors } from "../../../../global/colors";
import { priceFormat } from "../../../../utils/functions";

const ReceiptsScreen = ({ receipts }) => {
  const renderReceipt = ({ item }) => {
    const date = item.createAt && new Date(item.createAt);

    return (
      <FlatCard style={styles.receiptContainer}>
        <Text style={{ ...styles.title }}>
          Código de compra: <Text style={styles.text}>{item.id}</Text>
        </Text>
        <Text style={styles.text}>
          {date.toLocaleString("es-ES", {
            timeZone: "America/Argentina/Buenos_Aires",
          })}
        </Text>

        <FlatList
          data={item.cart}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row", paddingVertical: 7, gap: 10 }}>
              <Image
                source={{ uri: item.image[0] }}
                style={styles.receiptImage}
              />
              <View style={{ flex: 1, gap: 5 }}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>
                  {priceFormat(item.price, 0)} x {item.quantity}
                </Text>
              </View>
            </View>
          )}
        />
        <Text
          style={{
            ...styles.title,
            alignSelf: "flex-end",
            color: colors.yellow,
            fontSize: 17,
          }}
        >
          Total:{" "}
          <Text style={{ ...styles.text, fontSize: 17 }}>
            {priceFormat(item.total, 2)}
          </Text>
        </Text>
      </FlatCard>
    );
  };
  return (
    <View>
      <FlatList
        data={receipts}
        keyExtractor={(item) => item.id}
        renderItem={renderReceipt}
      />
    </View>
  );
};

export default ReceiptsScreen;

const styles = StyleSheet.create({
  receiptContainer: {
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
    padding: 15,
    gap: 8,
  },
  receiptImage: {
    width: 80,
    aspectRatio: 1,
    backgroundColor: colors.mediumGrey,
    borderRadius: 15,
  },
  text: {
    color: colors.lightGrey,
    fontSize: 15,
  },
  title: {
    fontWeight: "bold",
    color: colors.yellow,
    fontSize: 15,
  },
});
