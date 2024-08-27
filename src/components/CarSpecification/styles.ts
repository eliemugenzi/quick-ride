import COLORS from "@/theme/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: COLORS.primaryLight,
    borderColor: COLORS.primary,
    borderWidth: 1,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    padding: 20,
  },
  title: {
    fontSize: 10,
    textAlign: "center",
    marginVertical: 8,
  },
  subtitle: {
    fontSize: 10,
    textAlign: "center",
  },
});

export default styles;
