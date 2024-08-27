import COLORS from "@/theme/colors";
import componentDimensions from "@/theme/componentDimensions";
import DIMENSIONS from "@/theme/dimensions";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: DIMENSIONS.padding,
  },
  input: {
    marginVertical: componentDimensions.textInput.verticalMargin * 2,
  },
  textGray: {
    color: COLORS.darkGray,
    fontSize: 12,
  },
  textPrimary: {
    color: COLORS.primary,
    fontSize: 12,
  },
});

export default styles;
