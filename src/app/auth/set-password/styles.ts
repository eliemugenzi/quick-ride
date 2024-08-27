import COLORS from "@/theme/colors";
import componentDimensions from "@/theme/componentDimensions";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    marginVertical: componentDimensions.textInput.verticalMargin,
  },
  text: {
    fontSize: 12,
    color: COLORS.darkerGray,
  },
  center: {
    textAlign: "center",
  },
});

export default styles;
