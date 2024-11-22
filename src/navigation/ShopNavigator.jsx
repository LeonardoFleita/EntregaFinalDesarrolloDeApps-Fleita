import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  CategoriesScreenContainer,
  ProductsScreenContainer,
  ProductDetailScreenContainer,
  FavouritesScreenContainer,
} from "../components/screens";
import { colors } from "../global/colors";
import Icon from "react-native-vector-icons/MaterialIcons";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  const screenOptions = ({ navigation }) => ({
    headerTitleAlign: "center",
    headerLeft: () => (
      <Icon
        name="chevron-left"
        size={30}
        color={colors.lightGrey}
        onPress={() => {
          navigation.goBack();
        }}
      />
    ),
    headerStyle: {
      backgroundColor: colors.black,
    },
    headerTitleStyle: {
      color: colors.lightGrey,
    },
    contentStyle: {
      backgroundColor: colors.black,
    },
  });

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Categorías"
        component={CategoriesScreenContainer}
        options={{ headerLeft: null }}
      />
      <Stack.Screen name="Productos" component={ProductsScreenContainer} />
      <Stack.Screen
        name="Producto"
        component={ProductDetailScreenContainer}
        options={{ headerTitle: "" }}
      />
      <Stack.Screen name="Favoritos" component={FavouritesScreenContainer} />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
