import React from "react";

import car from "@/assets/images/Car.png";
import bike from "@/assets/images/Bike.png";
import cycle from "@/assets/images/Cycle.png";
import taxi from "@/assets/images/Taxi.png";
import Card from "../Card";
import { Image, StyleProp, ViewStyle } from "react-native";
import Typography from "../Typography";

import styles from "./styles";

export interface Props {
  type: "car" | "bike" | "cycle" | "taxi";
  label: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const TransportOption: React.FC<Props> = ({ type, label, onPress, style }) => {
  const transportAssets: Record<string, any> = {
    car,
    bike,
    cycle,
    taxi,
  };

  return (
    <Card onPress={onPress} style={[styles.container, style]}>
      <Image
        width={50}
        height={50}
        source={transportAssets?.[type]}
        style={{ alignSelf: "center" }}
      />
      <Typography.Text
        style={{
          marginVertical: 10,
          textAlign: "center",
        }}
      >
        {label}
      </Typography.Text>
    </Card>
  );
};
export default TransportOption;
