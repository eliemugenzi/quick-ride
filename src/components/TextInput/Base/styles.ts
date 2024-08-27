import COLORS from "@/theme/colors";
import componentDimensions from "@/theme/componentDimensions";
import DIMENSIONS from "@/theme/dimensions";
import { StyleSheet, Platform } from "react-native";

const isAndroid = Platform.OS === "android";

export default StyleSheet.create({
  disabled: {
    opacity: 0.5,
  },
  label: {
    color: COLORS.black,
    fontSize: componentDimensions.textInput.fontSize,
    lineHeight: componentDimensions.textInput.lineHeight,
    marginBottom: componentDimensions.textInput.labelMargin,
  },
  inputWrapper: {
    height: componentDimensions.textInput.height,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: componentDimensions.textInput.horizontalMargin,
    borderRadius: componentDimensions.textInput.borderRadius,
    borderWidth: componentDimensions.textInput.borderWidth,
    borderColor: COLORS.darkGray,
  },
  textAreaInputWrapper: {
    height: componentDimensions.textInput.textAreaHeight,
  },
  inputWrapperError: {
    borderColor: COLORS.red,
  },
  inputWrapperFocused: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
  },
  input: {
    color: COLORS.black,
    fontSize: componentDimensions.textInput.fontSize,
    fontWeight: "bold",
    height:
      componentDimensions.textInput.height -
      componentDimensions.textInput.verticalMargin,
    flex: 1,
    ...(isAndroid ? { padding: 0, margin: 0, borderWidth: 0 } : {}),
    fontFamily: "Poppins-Regular",
  },
  textAreaInput: {
    height:
      componentDimensions.textInput.textAreaHeight -
      componentDimensions.textInput.verticalMargin,
  },
  inputEmpty: { fontWeight: "400" },
  inputNotEmpty: {
    backgroundColor: COLORS.lightGray,
  },
  inputNotEmptyNotFocused: {
    borderColor: COLORS.darkerGray,
  },
  placeholder: {
    color: COLORS.black,
  },
  numberPrefix: {
    color: COLORS.black,
    fontSize: componentDimensions.textInput.fontSize,
    paddingRight: componentDimensions.textInput.phonePrefixMargin,
  },
  error: {
    fontSize: 10,
    color: COLORS.red,
  },
  search: { height: 56 },
  searchBack: {
    height: 40,
    width: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  select: {
    paddingVertical: DIMENSIONS.padding / 2,
    flexDirection: "row",
    alignItems: "center",
  },
  selectInner: { flex: 1 },
  selectLabel: {
    color: COLORS.black,
  },
  touchable: {
    height: componentDimensions.textInput.height,
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  dateButton: { width: 80, marginLeft: "auto" },
});
