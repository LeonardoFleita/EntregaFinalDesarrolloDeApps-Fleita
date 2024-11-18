import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { colors } from "../../../global/colors";
import FlatCard from "../../common/FlatCard";
import { useGetCategoriesQuery } from "../../../services/shopService";
import { useDispatch } from "react-redux";
import { showHeader } from "../../../features/header/headerSlice";
import { useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";

const CategoriesScreen = ({ navigation }) => {
  const { data: categories, error, isLoading } = useGetCategoriesQuery();
  const dispatch = useDispatch();

  const isFocused = useIsFocused();

  useEffect(() => {
    isFocused && dispatch(showHeader());
  }, [isFocused]);

  const renderCategoryItem = ({ item }) => {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate("Productos", { category: item.category });
        }}
        style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }]}
      >
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
    <>
      {isLoading ? (
        <ActivityIndicator size={30} />
      ) : (
        <View style={styles.categoriesContainer}>
          <FlatList
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
          />
        </View>
      )}
    </>
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
