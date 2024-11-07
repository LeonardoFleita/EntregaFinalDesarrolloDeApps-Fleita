import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ShopNavigator from "./ShopNavigator";
import { colors } from "../global/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Cart from "../components/screens/cart/CartScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        inialRouteName="Tienda"
        screenOptions={{
          headerShown: true,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
          headerStyle: {
            backgroundColor: colors.black,
            shadowColor: colors.black,
          },
          headerTitleStyle: {
            color: colors.lightGrey,
          },
          headerTitleAlign: "center",
        }}
      >
        <Tab.Screen
          name="Tienda"
          component={ShopNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name={focused ? "shopping" : "shopping-outline"}
                size={27}
                color={focused ? colors.yellow : colors.lightGrey}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Carrito"
          component={Cart}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name={focused ? "cart" : "cart-outline"}
                size={27}
                color={focused ? colors.yellow : colors.mediumGrey}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.darkGrey,
    borderTopWidth: 1.5,
    borderColor: colors.black,
    elevation: 3,
    position: "absolute",
    left: "5%",
    right: "5%",
    bottom: -1,
    shadowColor: colors.lightGrey,
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
  },
});
