import { StyleSheet, Platform } from "react-native";
import COLORS from "@/theme/colors";
import DIMENSIONS from "@/theme/dimensions";

const styles = (noShadow: boolean = false) =>
  StyleSheet.create({
    wrapper: {
      borderRadius: DIMENSIONS.padding / 4,
      overflow: Platform.OS === "android" ? "hidden" : "visible",
      backgroundColor: COLORS.white,
      padding: DIMENSIONS.padding,
      ...(noShadow ? {} : DIMENSIONS.shadow),
    },
  });

export default styles;
