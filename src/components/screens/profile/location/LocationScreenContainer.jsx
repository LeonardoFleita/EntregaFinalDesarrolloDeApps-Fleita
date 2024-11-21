import { StyleSheet } from "react-native";
import Toast from "react-native-toast-message";
import LocationScreen from "./LocationScreen";
import * as Location from "expo-location";
//import MapView, { Marker } from "react-native-maps";
import { useState } from "react";

const LocationScreenContainer = () => {
  const [error, setError] = useState(null);

  const showToast = (type, message) => {
    Toast.show({
      type: type,
      text1: message,
      visibilityTime: 2000,
    });
  };

  const getPermissions = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      return false;
    }
    return true;
  };

  const getLocation = async () => {
    const permissionOk = await getPermissions();
    if (!permissionOk) {
      setError("Permiso de ubicación denegado");
      showToast("error", "No se concedieron los permisos");
    } else {
      let location = await Location.getCurrentPositionAsync({});
    }
  };

  return <LocationScreen />;
};

export default LocationScreenContainer;

const styles = StyleSheet.create({});
