import COLORS from "@/theme/colors";
import DIMENSIONS from "@/theme/dimensions";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: COLORS.primaryLight,
    borderColor: COLORS.primary,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: DIMENSIONS.padding / 4,
  },
  text: {
    fontSize: 12,
    fontWeight: "400",
  },
});

export default styles;
