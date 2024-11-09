import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ShopNavigator from "./ShopNavigator";
import { colors } from "../global/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Cart from "../components/screens/cart/CartScreen";
import Receipts from "../components/screens/receipts/Receipts";
import Ionicon from "react-native-vector-icons/Ionicons";
import Header from "../components/layout/Header";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Tienda"
        screenOptions={{
          headerShown: true,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
          // headerStyle: {
          //   backgroundColor: colors.black,
          //   shadowColor: colors.black,
          // },
          // headerTitleStyle: {
          //   color: colors.lightGrey,
          // },
          headerTitleAlign: "center",
          header: ({ navigation, route }) => (
            <Header navigation={navigation} route={route} /> // Header personalizado
          ),
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
            headerShown: true,
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
        <Tab.Screen
          name="Recibos"
          component={Receipts}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicon
                name={focused ? "receipt" : "receipt-outline"}
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
    borderTopWidth: 0,
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
