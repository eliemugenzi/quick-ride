import ScreenWrapper from "@/components/ScreenWrapper";
import React, { useState } from "react";
import MapView, { Marker, Polyline } from "react-native-maps";

import styles from "./styles";
import { KeyboardAvoidingView, View } from "react-native";
import Icon from "@/components/Icon";
import BottomSheet from "@/components/BottomSheet";
import Typography from "@/components/Typography";
import Line from "@/components/Line";
import PaymentMethod from "@/components/PaymentMethod";
import Button from "@/components/Button";
import DriverDetails from "@/components/DriverDetails";

import driverProfile from "@/assets/images/driver-profile.png";
import carImage from "@/assets/images/car-detail.png";
import COLORS from "@/theme/colors";
import Modal from "@/components/Modal";
import { router } from "expo-router";

const ConfirmAndPay = () => {
  const [confirmModalVisible, setConfirmModalVisible] = useState(true);

  return (
    <>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -1.9441,
            longitude: 30.0619,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <Marker
          coordinate={{
            latitude: 1.9912,
            longitude: 30.0463,
          }}
        >
          <Icon name="source-track" />
        </Marker>

        <Marker
          coordinate={{
            latitude: 2.0086,
            longitude: 30.1358,
          }}
        >
          <Icon name="destination-track" />
        </Marker>

        <BottomSheet
          visible={confirmModalVisible}
          style={{ marginHorizontal: 0 }}
          onClose={() => {}}
        >
          <View style={{ paddingHorizontal: 20 }}>
            <Typography.Title level={3} style={styles.title}>
              Your driver is coming in 3:35
            </Typography.Title>
            <Line style={{ backgroundColor: COLORS.gray, marginBottom: 10 }} />

            <DriverDetails
              name="Sergio Ramasis"
              ratings="4.9(531 reviews)"
              distance="800m (5 mins away)"
              image={driverProfile}
              carImage={carImage}
              style={{ marginVertical: 10 }}
            />
            <View style={[styles.grid, styles.margin]}>
              <Typography.Text>Payment method</Typography.Text>
              <Typography.Text>$220.00</Typography.Text>
            </View>

            <Line style={{ backgroundColor: COLORS.gray, marginTop: 10 }} />
            <PaymentMethod
              style={[styles.margin, { padding: 5 }]}
              type="visa"
              identifier="**** **** **** 8970"
              expiryDate={new Date()}
            />
            <Button
              type="primary"
              style={styles.margin}
              onPress={() => {
                setConfirmModalVisible(!confirmModalVisible);
                router.navigate("/payment-success");
              }}
            >
              Pay
            </Button>
          </View>
        </BottomSheet>
      </KeyboardAvoidingView>
    </>
  );
};

export default ConfirmAndPay;
