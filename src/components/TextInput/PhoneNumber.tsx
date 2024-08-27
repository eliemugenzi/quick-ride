import React, { useState } from "react";
import { StyleProp, TextStyle } from "react-native";
import PhoneInput, { ICountry } from "react-native-international-phone-number";
import styles from "./Base/styles";
import componentDimensions from "@/theme/componentDimensions";

interface Props {
  value: string;
  onChangeText?: (value: string) => void;
  placeholder?: string;
  style?: StyleProp<TextStyle>;
}

const PhoneNumber: React.FC<Props> = ({ value, onChangeText, ...props }) => {
  const [selectedCountry, setSelectedCountry] = useState<ICountry>({
    callingCode: "+250",
    cca2: "RW",
    flag: "🇷🇼",
    name: {
      en: "Rwanda",
      ru: "Руанда",
      pl: "Rwanda",
      ua: "Руанда",
      cz: "Rwanda",
      by: "Руанда",
      pt: "Ruanda",
      es: "Ruanda",
      ro: "Rwanda",
      bg: "Руанда",
      de: "Ruanda",
      fr: "Rwanda",
      nl: "Rwanda",
      it: "Ruanda",
      cn: "卢旺达",
      zh: "盧旺達",
      ee: "Rwanda",
      jp: "ルワンダ",
      he: "רואנדה",
      el: "Ρουάντα",
      ar: "رواندا",
    },
  });

  return (
    <PhoneInput
      {...props}
      style={[styles.input, props.style]}
      value={value}
      phoneInputStyles={{
        input: {
          textAlign: "center",
        },
        container: {
          height: componentDimensions.textInput.height,
        },
      }}
      onChangePhoneNumber={(val) => {
        if (val) {
          onChangeText?.(val);
        }
      }}
      selectedCountry={selectedCountry}
      onChangeSelectedCountry={(country) => {
        setSelectedCountry(country);
      }}
    />
  );
};

export default PhoneNumber;
