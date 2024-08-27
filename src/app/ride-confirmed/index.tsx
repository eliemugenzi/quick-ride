import Icon from "@/components/Icon";
import ScreenWrapper from "@/components/ScreenWrapper";
import { router } from "expo-router";
import React from "react";

import styles from "./styles";
import { View } from "react-native";
import Typography from "@/components/Typography";
import Button from "@/components/Button";

const RideConfirmed = () => {
  return (
    <ScreenWrapper hasBack onBackPress={() => router.back()}>
      <View style={styles.container}>
        <Icon name="confirmed" size={100} />
        <Typography.Title>Thank you</Typography.Title>
        <Typography.Text>
          Your booking has been placed sent to Md. Sharif Ahmed
        </Typography.Text>
      </View>
      <Button
        style={{ marginVertical: 10 }}
        type="primary"
        onPress={() => router.navigate("/confirm-and-pay")}
      >
        Confirm Ride
      </Button>
    </ScreenWrapper>
  );
};

export default RideConfirmed;
