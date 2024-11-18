import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicon from "react-native-vector-icons/Ionicons";
import ShopNavigator from "./ShopNavigator";
import { CartScreen, ReceiptsScreen } from "../components/screens";
import Header from "../components/layout/Header";
import { colors } from "../global/colors";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const isHeaderVisible = useSelector(
    (state) => state.headerReducer.value.isVisible
  );
  const user = useSelector((state) => state.authReducer.value.email);

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Tienda"
        screenOptions={{
          headerShown: true,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
          headerTitleAlign: "center",
          header: ({ navigation, route }) => (
            <Header navigation={navigation} route={route} />
          ),
        }}
      >
        <Tab.Screen
          name="Tienda"
          component={ShopNavigator}
          options={{
            tabBarStyle: isHeaderVisible ? styles.tabBar : { display: "none" },
            tabBarIcon: ({ focused }) => (
              <Icon
                name={focused ? "shopping" : "shopping-outline"}
                size={27}
                color={focused ? colors.yellow : colors.lightGrey}
              />
            ),
            headerShown: isHeaderVisible,
          }}
        />
        <Tab.Screen
          name="Carrito"
          component={CartScreen}
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
        {user ? (
          <Tab.Screen
            name="Recibos"
            component={ReceiptsScreen}
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
        ) : null}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.darkGrey,
    borderTopWidth: 0,
    marginTop: 2,
    borderColor: colors.black,
    width: "90%",
    alignSelf: "center",
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    // elevation: 3,
    // shadowColor: colors.lightGrey,
  },
});
