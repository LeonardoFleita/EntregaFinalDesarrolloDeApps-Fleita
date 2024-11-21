import { Image, StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ShopNavigator from "./ShopNavigator";
import ProfileNavigator from "./ProfileNavigator";
import { CartScreenContainer } from "../components/screens";
import Header from "../components/layout/Header";
import { colors } from "../global/colors";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { profilePicture } = useSelector((state) => state.authReducer.value);

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Store"
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
          name="Store"
          component={ShopNavigator}
          options={{
            tabBarStyle: styles.tabBar,
            tabBarIcon: ({ focused }) => (
              <Icon
                name={focused ? "shopping" : "shopping-outline"}
                size={27}
                color={focused ? colors.yellow : colors.lightGrey}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={
                  focused
                    ? {
                        ...styles.profileImgContainer,
                        backgroundColor: colors.yellow,
                      }
                    : styles.profileImgContainer
                }
              >
                {profilePicture ? (
                  <Image
                    source={{ uri: profilePicture }}
                    style={
                      focused
                        ? styles.profileImg
                        : {
                            ...styles.profileImg,
                            opacity: 0.7,
                            backgroundColor: colors.darkGrey,
                          }
                    }
                  />
                ) : (
                  <Image
                    source={{
                      uri: "https://res.cloudinary.com/drez01kou/image/upload/v1732213144/desarrollo%20de%20apps/ecommerce/p5vzyl4jestkoyunal8h.png",
                    }}
                    style={{ width: 45, height: 45, borderRadius: 100 }}
                  />
                )}
              </View>
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreenContainer}
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
    borderTopWidth: 0,
    marginTop: 3,
    borderColor: colors.black,
    width: "90%",
    alignSelf: "center",
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
  },
  profileImgContainer: {
    marginTop: -20,
    backgroundColor: colors.mediumGrey,
    borderRadius: 100,
    borderColor: colors.black,
    borderWidth: 3,
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
  },
  profileImg: {
    width: 45,
    height: 45,
    borderRadius: 100,
  },
});
