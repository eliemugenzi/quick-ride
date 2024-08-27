import React from "react";
import { StyleProp, ViewStyle, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";

import _styles from "./styles";

export interface Props {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  disabled?: boolean;
  noShadow?: boolean;
  animated?: boolean;
  children: React.ReactNode;
  topSurface?: boolean;
}

const Card: React.FC<Props> = ({
  onPress,
  disabled,
  animated,
  children,
  style,
  noShadow,
}) => {
  const styles = _styles(noShadow);
  return onPress ? (
    <TouchableOpacity
      style={[styles.wrapper, style]}
      disabled={disabled}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  ) : animated ? (
    <Animatable.View
      transition="top"
      duration={2000}
      style={[styles.wrapper, style]}
      useNativeDriver
    >
      {children}
    </Animatable.View>
  ) : (
    <View style={[styles.wrapper, style]}>{children}</View>
  );
};

export default Card;
