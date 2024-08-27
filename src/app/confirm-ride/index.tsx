import CarDetail from "@/components/CarDetail";
import LocationTransition from "@/components/LocationTransition";
import ScreenWrapper from "@/components/ScreenWrapper";
import { router } from "expo-router";
import React, { useState } from "react";

import carImage from "@/assets/images/car-detail.png";
import Typography from "@/components/Typography";
import { View } from "react-native";

import styles from "./styles";
import PaymentMethod from "@/components/PaymentMethod";
import Button from "@/components/Button";

const ConfirmRide = () => {
  const [paymentMethodActive, setPaymentMethodActive] = useState("visa");
  const locationTransitions = {
    locationStart: {
      name: "Current location",
      details: "2972 Westminster Rd, London, GB",
    },
    locationEnd: {
      name: "Office",
      details: "1901 Thornbridge Cir. Shiloh, Hawaii 81063",
    },
    distance: "1.1km",
  };

  const carDetails = {
    image: carImage,
    name: "Mustang Shelby GT",
    review: "4.9 (531 reviews)",
  };

  const paymentMethods: any = [
    {
      type: "visa",
      identifier: "**** **** **** 8970",
      expiryDate: new Date(),
    },
    {
      type: "mastercard",
      identifier: "**** **** **** 8970",
      expiryDate: new Date(),
    },
    {
      type: "paypal",
      identifier: "elie@web.dev",
      expiryDate: new Date(),
    },
    {
      type: "cash",
      identifier: "Cash",
      expiryDate: new Date(),
    },
  ];
  return (
    <ScreenWrapper
      hasBack
      onBackPress={() => router.back()}
      headerTitle="Request for rent"
    >
      <LocationTransition {...locationTransitions} />
      <CarDetail {...carDetails} />
      <Typography.Text style={styles.chargeTitle}>Charge</Typography.Text>
      <View style={styles.chargeRow}>
        <Typography.Text style={styles.chargeText}>
          Mustang/
          <Typography.Text style={styles.chargeSubText}>
            per hours
          </Typography.Text>
        </Typography.Text>
        <Typography.Text style={styles.chargeSubText}>$200</Typography.Text>
      </View>
      <View style={styles.chargeRow}>
        <Typography.Text style={styles.chargeText}>
          VAT
          <Typography.Text style={styles.chargeSubText}>(5%)</Typography.Text>
        </Typography.Text>
        <Typography.Text style={styles.chargeSubText}>$20</Typography.Text>
      </View>
      <Typography.Title style={styles.title} level={3}>
        Select payment method
      </Typography.Title>
      {paymentMethods?.map((paymentMethod: any, index: number) => (
        <PaymentMethod
          {...paymentMethod}
          key={index}
          style={{ marginBottom: 10, padding: 5 }}
          onPress={() => setPaymentMethodActive(paymentMethod.type)}
          active={paymentMethodActive}
        />
      ))}
      <Button
        type="primary"
        style={styles.confirmBtn}
        onPress={() => router.navigate("/ride-confirmed")}
      >
        Confirm ride
      </Button>
    </ScreenWrapper>
  );
};

export default ConfirmRide;
