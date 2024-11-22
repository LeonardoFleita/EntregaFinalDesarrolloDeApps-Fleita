import { Pressable, StyleSheet, Text, View } from "react-native";

import FlatCard from "../../common/FlatCard";
import { buttonStyles, press } from "../../../styles/styles";
import ProfileSelector from "../../common/ProfileSelector";
import ProfilePicture from "./receipts/ProfilePicture";

const ProfileScreen = ({ user, pickImage, handleCloseSession, navigation }) => {
  return (
    <View style={styles.profileContainer}>
      <FlatCard style={styles.profileCard}>
        <View>
          <ProfilePicture />
        </View>
        <View style={{ width: "100%", alignItems: "center", gap: 10 }}>
          <ProfileSelector
            legend="Datos personales"
            nameIcon="person"
            navigation={navigation}
            navigateTo="Datos personales"
          />
          <ProfileSelector
            legend="Mis compras"
            nameIcon="receipt"
            navigation={navigation}
            navigateTo="Mis compras"
          />
          <ProfileSelector
            legend="Cambiar contraseña"
            nameIcon="lock"
            navigation={navigation}
            navigateTo="Cambiar contraseña"
          />
          <ProfileSelector
            legend="Mis direcciones"
            nameIcon="location-on"
            navigation={navigation}
            navigateTo="Ubicación"
          />
          <ProfileSelector
            legend="Configuración"
            nameIcon="settings"
            navigation={navigation}
            navigateTo="Configuración"
          />
        </View>
        <Pressable
          style={press({ ...buttonStyles.base })}
          onPress={handleCloseSession}
        >
          <Text style={buttonStyles.text}>Cerrar sesión</Text>
        </Pressable>
      </FlatCard>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    alignItems: "center",
  },
  profileCard: {
    marginTop: 10,
    width: "90%",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 40,
    paddingVertical: 20,
  },
});
