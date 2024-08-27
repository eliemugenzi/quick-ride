import React from "react";
import { View } from "react-native";
import Icon from "../Icon";
import COLORS from "@/theme/colors";
import Typography from "../Typography";

import styles from "./styles";

type ILocation = {
  name: string;
  details: string;
};

interface Props {
  locationStart: ILocation;
  locationEnd: ILocation;
  distance: string;
}

const LocationTransition: React.FC<Props> = ({
  distance,
  locationStart,
  locationEnd,
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.iconsWrapper}>
        <Icon name="map-pin" color={COLORS.red} />
        <Icon name="vertical-line" />
        <Icon name="map-pin" color={COLORS.primary} />
      </View>
      <View style={{ flexBasis: "90%" }}>
        <View style={styles.locationItem}>
          <Typography.Title style={styles.locationTitle}>
            {locationStart?.name}
          </Typography.Title>
          <Typography.Text style={styles.locationDetailText}>
            {locationStart.details}
          </Typography.Text>
        </View>
        <View style={styles.locationLast}>
          <View style={styles.locationItem}>
            <Typography.Title style={styles.locationTitle}>
              {locationEnd?.name}
            </Typography.Title>
            <Typography.Text style={styles.locationDetailText}>
              {locationEnd.details}
            </Typography.Text>
          </View>
          <Typography.Text style={styles.locationDistance}>
            {distance}
          </Typography.Text>
        </View>
      </View>
    </View>
  );
};

export default LocationTransition;
