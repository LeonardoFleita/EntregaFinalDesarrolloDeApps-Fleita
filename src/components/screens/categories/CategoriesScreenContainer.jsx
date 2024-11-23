import CategoriesScreen from "./CategoriesScreen";
import { useGetCategoriesQuery } from "../../../services/shopService";
import { useIsFocused } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { hideFav } from "../../../features/header/headerSlice";
import { useEffect } from "react";

const CategoriesScreenContainer = ({ navigation }) => {
  const { data: categories, isLoading } = useGetCategoriesQuery();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  useEffect(() => {
    isFocused && dispatch(hideFav());
  }, [isFocused]);

  return (
    <CategoriesScreen
      navigation={navigation}
      categories={categories}
      isLoading={isLoading}
    />
  );
};

export default CategoriesScreenContainer;
