import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { categories } from "../data/categories";
import { colors } from "../global/colors";
import FlatCard from "../components/FlatCard";

const CategoriesScreen = ({ setCategory }) => {
  const renderCategoryItem = ({ item }) => {
    return (
      <Pressable onPress={() => setCategory(item.category)}>
        <FlatCard style={styles.categoryContainer}>
          <Image
            source={{ uri: item.thumbnail }}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.categoryText}>{item.category.toUpperCase()}</Text>
        </FlatCard>
      </Pressable>
    );
  };

  return (
    <View style={styles.categoriesContainer}>
      <Text style={styles.title}>Categorías</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  categoriesContainer: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    color: colors.lightGrey,
    fontSize: 20,
    marginBottom: 15,
  },
  categoryContainer: {
    margin: 10,
    height: 210,
  },
  image: {
    width: 170,
    height: 170,
    borderRadius: 15,
  },
  categoryText: {
    color: colors.lightGrey,
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 13,
    marginTop: 10,
  },
});
