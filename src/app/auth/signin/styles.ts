import COLORS from "@/theme/colors";
import DIMENSIONS from "@/theme/dimensions";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textDanger: {
    textAlign: "right",
    fontSize: 12,
    color: COLORS.red,
  },
  title: {
    marginVertical: DIMENSIONS.margin * 2,
  },
  input: {
    marginVertical: DIMENSIONS.margin,
  },
});

export default styles;
