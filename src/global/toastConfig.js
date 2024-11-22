import Toast, { BaseToast } from "react-native-toast-message";
import { colors } from "./colors";

export const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: colors.yellow,
        backgroundColor: colors.mediumGrey,
      }}
      text1Style={{
        fontSize: 15,
        fontWeight: "bold",
        color: colors.darkGrey,
      }}
      text2Style={{
        fontSize: 14,
        color: colors.darkGrey,
      }}
    />
  ),
  error: (props) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: colors.red,
        backgroundColor: colors.mediumGrey,
      }}
      text1Style={{
        fontSize: 15,
        fontWeight: "bold",
        color: colors.darkGrey,
      }}
      text2Style={{
        fontSize: 14,
        color: colors.darkGrey,
      }}
    />
  ),
};

export const showToast = (type, message) => {
  Toast.show({
    type: type,
    text1: message,
    position: "bottom",
    visibilityTime: 2000,
  });
};
