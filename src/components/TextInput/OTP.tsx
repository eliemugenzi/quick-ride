import COLORS from "@/theme/colors";
import React, { useState, useRef, RefObject } from "react";
import {
  View,
  StyleProp,
  ViewStyle,
  StyleSheet,
  TextInput,
} from "react-native";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import { OtpInput } from "react-native-otp-entry";
import Number from "./Number";

interface Props {
  error?: any;
  style?: StyleProp<ViewStyle>;
  onSubmit?: (v: number) => void;
  disabled?: boolean;
  cellStyle?: StyleProp<ViewStyle>;
  numberOfItems?: number;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  input: {
    fontSize: 16,
    height: 48,
    width: 48,
    borderRadius: 8,
    textAlign: "center",
    backgroundColor: "transparent",
    borderColor: COLORS.darkerGray,
    color: COLORS.darkerGray,
    borderWidth: 2,
  },
  errorInput: {
    borderColor: COLORS.red,
    color: COLORS.red,
  },
  focusedInput: {
    borderColor: COLORS.primary,
  },
});

const Otp: React.FC<Props> = ({
  error,
  style,
  onSubmit,
  disabled = false,
  cellStyle,
  numberOfItems = 5,
}) => {
  const [pin, setPin] = useState("");
  const pinInput = useRef<{ [key: string]: any }>({});
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [codes, setCodes] = useState<string[] | undefined>(
    Array(numberOfItems).fill(0),
  );

  const _refs: RefObject<TextInput>[] = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  const handleChange = (value: any) => setPin(value);

  const handleFocus = (index: number) => setFocusedIndex(index);
  const handleBlur = () => setFocusedIndex(null);

  const onCodeChange = (text: string, index: number) => {
    if (text.length > 1) {
      const newCodes = text.split("");
      setCodes(newCodes);
      _refs[numberOfItems - 1]!.current?.focus();
      return;
    }
    const newCodes = [...codes!];
    newCodes[index] = text;
    setCodes(newCodes);

    if (text !== "" && index < numberOfItems - 1) {
      _refs[index + 1]!.current?.focus();
    }
  };

  return (
    <View style={styles.container}>
      {codes?.map((code, index) => (
        <Number
          key={index}
          style={{width: 50, height: 50}}
          // style={[styles.input, focusedIndex === index && styles.focusedInput]}
          onChange={(text) => {
            onCodeChange(text, index);
          }}
          inputRef={_refs[index]}
          disabled={false}
          value={code}
          inputProps={{
            autoComplete: "one-time-code",
            enterKeyHint: "next",
            inputMode: "numeric",
            onBlur: () => handleBlur(),
            onFocus: () => {
              handleFocus(index);
            },
            maxLength: numberOfItems,
            onKeyPress: ({ nativeEvent: { key } }) => {
              if (key === "Backspace" && index > 0) {
                handleChange("");
                onCodeChange("", index - 1);
                _refs?.[index - 1]!.current!.focus();
              }
            },
          }}
        />
      ))}
    </View>
  );
};

export default Otp;
