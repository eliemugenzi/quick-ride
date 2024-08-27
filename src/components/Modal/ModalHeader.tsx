import React from "react";
import { View, TouchableOpacity } from "react-native";

import Icon from "../Icon";
import { headerStyles as styles } from "./styles";
import Typography from "../Typography";
import COLORS from "@/theme/colors";
export interface ModalHeaderProps {
  title?: string | number | React.ReactElement;
  closable?: boolean;
  onClose?: () => void;
  closeIconPosition?: "relative" | "padding";
}
const ModalHeader: React.FC<ModalHeaderProps> = ({
  title,
  closable,
  onClose,
  closeIconPosition = "padding",
}) => {
  return (
    <View style={styles.container}>
      {title && (
        <Typography.Title style={styles.title} level={4}>
          {title}
        </Typography.Title>
      )}
      {closable && (
        <TouchableOpacity
          style={[
            styles.icon,
            closeIconPosition === "padding" ? null : styles.IconRelative,
          ]}
          onPress={onClose}
        >
          <Icon name="x" size={30} color={COLORS.black} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ModalHeader;
