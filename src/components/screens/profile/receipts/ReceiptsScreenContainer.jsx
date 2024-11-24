import { ActivityIndicator, StyleSheet, View } from "react-native";
import ReceiptsScreen from "./ReceiptsScreen";
import { useGetReceiptsQuery } from "../../../../services/userService";
import { useSelector } from "react-redux";
import { colors } from "../../../../global/colors";
import NoReceipts from "../../../common/NoReceipts";

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
    <View style={styles.loader}>
      <ActivityIndicator size="large" color={colors.yellow} />
    </View>
  ) : receipts.length < 1 ? (
    <NoReceipts />
  ) : (
    <ReceiptsScreen receipts={receipts} />
  );
};

export default ReceiptsScreenContainer;

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
