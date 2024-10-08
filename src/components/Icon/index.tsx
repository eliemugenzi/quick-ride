import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { SvgXml } from "react-native-svg";
import xmlFiles, { IconsNames as IN } from "./icons";
import styles from "./styles";

export type IconNames = IN;

interface Props {
  name: IN;
  size?: number;
  color?: string;
  height?: number | string;
  width?: number | string;
  style?: StyleProp<ViewStyle>;
}

const Icon: React.FC<Props> = ({
  name,
  size = 24,
  color = "#000000",
  height,
  width,
  style,
}) => {
  let iconString: string | null = null;

  try {
    iconString = xmlFiles[name] as string;

    iconString = iconString
      .replace(/{{size}}/g, `${size}`)
      .replace(/{{stroke}}/g, color)
      .replace(/{{color}}/g, color)
      .replace(/{{width}}/g, `${width}`)
      .replace(/{{height}}/g, `${height}`);
  } catch (_exc) {}

  return (
    <View style={[styles.icon, style]}>
      <SvgXml
        xml={iconString}
        width={width || size}
        height={height || size}
        testID="icon"
      />
    </View>
  );
};

export default Icon;
