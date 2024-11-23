import { StyleSheet } from "react-native";
import FavouritesScreen from "./FavouritesScreen";
import { useIsFocused } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { showFav } from "../../../features/header/headerSlice";
import { useEffect, useState } from "react";

const FavouritesScreenContainer = ({ navigation }) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const { favourites } = useSelector((state) => state.authReducer.value);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    isFocused && dispatch(showFav());
  }, [isFocused]);
  return (
    <FavouritesScreen
      favourites={favourites}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      navigation={navigation}
    />
  );
};

export default FavouritesScreenContainer;

const styles = StyleSheet.create({});
