import COLORS from "@/theme/colors";
import DIMENSIONS from "@/theme/dimensions";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: COLORS.darkerGray,
    marginTop: DIMENSIONS.margin,
  },
  textPrimary: {
    fontSize: 12,
    color: COLORS.primary,
  },
  input: {
    marginTop: DIMENSIONS.margin,
    textAlign: "center",
    marginBottom: DIMENSIONS.margin * 3,
    color: COLORS.darkerGray,
  },
  title: {
    textAlign: "center",
  },
});

export default styles;
