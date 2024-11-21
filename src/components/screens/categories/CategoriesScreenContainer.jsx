import CategoriesScreen from "./CategoriesScreen";
import { useGetCategoriesQuery } from "../../../services/shopService";

const CategoriesScreenContainer = ({ navigation }) => {
  const { data: categories, error, isLoading } = useGetCategoriesQuery();

  return (
    <CategoriesScreen
      navigation={navigation}
      categories={categories}
      isLoading={isLoading}
    />
  );
};

export default CategoriesScreenContainer;
