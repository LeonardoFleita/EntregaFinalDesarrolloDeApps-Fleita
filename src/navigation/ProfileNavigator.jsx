import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ProfileContainer,
  LocationScreenContainer,
  ReceiptsScreenContainer,
  ChangePasswordScreenContainer,
  ConfigScreenContainer,
} from "../components/screens";
import { colors } from "../global/colors";
import Icon from "react-native-vector-icons/MaterialIcons";

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
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
      <Stack.Screen name="Perfil" component={ProfileContainer} />
      <Stack.Screen name="Mis compras" component={ReceiptsScreenContainer} />
      <Stack.Screen
        name="Cambiar contraseña"
        component={ChangePasswordScreenContainer}
      />
      <Stack.Screen name="Ubicación" component={LocationScreenContainer} />
      <Stack.Screen name="Configuración" component={ConfigScreenContainer} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
