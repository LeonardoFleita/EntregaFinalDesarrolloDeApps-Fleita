import { ActivityIndicator, StyleSheet } from "react-native";
import ReceiptsScreen from "./ReceiptsScreen";
import { useGetReceiptsQuery } from "../../../../services/userService";
import { useSelector } from "react-redux";

const ReceiptsScreenContainer = () => {
  const { localId } = useSelector((state) => state.authReducer.value);
  const { data, isLoading } = useGetReceiptsQuery({ localId });

  const receipts = data
    ? Object.entries(data).map(([id, receipt]) => ({
        id,
        ...receipt,
      }))
    : [];

  return isLoading ? (
    <ActivityIndicator size={30} />
  ) : (
    <ReceiptsScreen receipts={receipts} />
  );
};

export default ReceiptsScreenContainer;

const styles = StyleSheet.create({});
