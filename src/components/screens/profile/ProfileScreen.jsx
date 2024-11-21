import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../../global/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FlatCard from "../../common/FlatCard";
import { buttonStyles, press } from "../../../styles/styles";
import ProfileSelector from "../../common/ProfileSelector";

const ProfileScreen = ({ user, pickImage, handleCloseSession, navigation }) => {
  return (
    <View style={styles.profileContainer}>
      <FlatCard style={styles.profileCard}>
        <View>
          <View style={styles.profileImageContainer}>
            {user.profilePicture ? (
              <Image
                source={{ uri: user.profilePicture }}
                style={styles.image}
                resizeMode="contain"
              />
            ) : (
              <Text style={styles.textProfilePlaceHolder}>
                {user.name.charAt(0).toUpperCase() +
                  user.lastname.charAt(0).toUpperCase()}
              </Text>
            )}
            <Pressable
              style={press({ ...styles.cameraBttn })}
              onPress={pickImage}
            >
              <Icon name="camera" size={30} />
            </Pressable>
          </View>
          <Text style={styles.nameText}>{user.name + " " + user.lastname}</Text>
        </View>
        <View style={{ width: "100%", alignItems: "center", gap: 10 }}>
          <ProfileSelector
            legend="Datos personales"
            nameIcon="person"
            navigation={navigation}
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
  profileImageContainer: {
    height: 160,
    aspectRatio: 1,
    backgroundColor: colors.mediumGrey,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  textProfilePlaceHolder: {
    fontSize: 80,
    fontWeight: "semibold",
    paddingBottom: 5,
  },
  image: {
    height: 155,
    aspectRatio: 1,
    borderRadius: 100,
  },
  nameText: {
    color: colors.lightGrey,
    alignSelf: "center",
    paddingTop: 15,
    fontSize: 20,
    fontWeight: "600",
  },
  cameraBttn: {
    borderRadius: 25,
    backgroundColor: colors.yellow,
    padding: 10,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});
