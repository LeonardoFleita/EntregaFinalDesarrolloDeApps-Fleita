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
import { press } from "../../../styles/styles";

const CategoriesScreen = ({ navigation, categories, isLoading }) => {
  const renderCategoryItem = ({ item }) => {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate("Productos", { category: item.category });
        }}
        style={press()}
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
    height: 207,
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
