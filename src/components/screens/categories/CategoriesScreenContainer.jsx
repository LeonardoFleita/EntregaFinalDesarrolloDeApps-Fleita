import CategoriesScreen from "./CategoriesScreen";
import { useGetCategoriesQuery } from "../../../services/shopService";
import { useDispatch } from "react-redux";
import { showHeader } from "../../../features/header/headerSlice";
import { useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";

const CategoriesScreenContainer = ({ navigation }) => {
  const { data: categories, error, isLoading } = useGetCategoriesQuery();
  const dispatch = useDispatch();

  const isFocused = useIsFocused();

  useEffect(() => {
    isFocused && dispatch(showHeader());
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
