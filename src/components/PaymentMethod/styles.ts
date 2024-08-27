import COLORS from "@/theme/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  active: {
    backgroundColor: "#E2F5ED",
  },
  wrapper: {
    backgroundColor: "#f3fbf8",
    borderColor: COLORS.primary,
    borderWidth: 1,
    flexDirection: "row",
  },
  paymentIcon: {
    marginRight: 20,
  },
  paymentIdentifier: {
    fontSize: 12,
  },
  paymentExpiryDate: {
    fontSize: 12,
    marginTop: 3,
    color: COLORS.darkGray,
  },
});

export default styles;
