import React from "react";
import { IconsNames } from "../Icon/icons";
import Icon from "../Icon";
import { StyleProp, View, ViewStyle } from "react-native";
import Typography from "../Typography";
import Card from "../Card";

import styles from "./styles";
import dayjs from "dayjs";

export interface Props {
  type: Partial<IconsNames>;
  identifier: string;
  expiryDate: Date;
  onPress?: () => void;
  active?: any;
  style?: StyleProp<ViewStyle>;
}

const PaymentMethod: React.FC<Props> = ({
  type,
  identifier,
  expiryDate,
  active = false,
  style,
  onPress,
}) => {
  return (
    <Card
      style={[styles.wrapper, active === type && styles.active, style]}
      onPress={onPress}
    >
      <Icon name={type} size={30} style={styles.paymentIcon} />
      <View>
        <Typography.Title style={styles.paymentIdentifier}>
          {identifier}
        </Typography.Title>
        <Typography.Text style={styles.paymentExpiryDate}>
          Expires: {dayjs(expiryDate).format("MM/YY")}
        </Typography.Text>
      </View>
    </Card>
  );
};

export default PaymentMethod;
