import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ShopNavigator from "./ShopNavigator";
import { colors } from "../global/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Cart from "../screens/Cart";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        inialRouteName="Tienda"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
        }}
      >
        <Tab.Screen
          name="Tienda"
          component={ShopNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name="shopping-outline"
                size={27}
                color={focused ? colors.yellow : colors.lightGrey}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Carrito"
          component={Cart}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name="cart-outline"
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
