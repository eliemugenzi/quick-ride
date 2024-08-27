import React from "react";
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";
import Icon from "../Icon";
import Typography from "../Typography";

import styles from "./styles";

interface Props {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const Location: React.FC<Props> = ({ style, onPress }) => {
  return (
    <TouchableOpacity style={[styles.wrapper, style]} onPress={onPress}>
      <View style={styles.locationDetailsWrapper}>
        <Icon name="map-pin" />
        <View style={styles.locationDetails}>
          <Typography.Text style={styles.locationTitle}>Office</Typography.Text>
          <Typography.Text style={styles.locationDescription}>
            2972 Westminster Rd, London, GB
          </Typography.Text>
        </View>
      </View>
      <Typography.Text style={styles.locationDistance}>2.7km</Typography.Text>
    </TouchableOpacity>
  );
};

export default Location;
