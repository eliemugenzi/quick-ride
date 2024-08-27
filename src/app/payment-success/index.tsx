import DriverDetails from "@/components/DriverDetails";
import ScreenWrapper from "@/components/ScreenWrapper";
import React, { useState } from "react";

import driverProfile from "@/assets/images/driver-profile.png";
import carImage from "@/assets/images/car-detail.png";
import Modal from "@/components/Modal";
import Icon from "@/components/Icon";
import Typography from "@/components/Typography";
import CarDetail from "@/components/CarDetail";

import styles from "./styles";
import Button from "@/components/Button";

const PaymentSuccess = () => {
  const [paid, setPaid] = useState(true);
  return (
    <ScreenWrapper hasBack>
      <CarDetail name="Mustang GT" review="4.9" image={carImage} />
      {paid && (
        <Modal visible={paid} closable>
          <Icon name="confirmed" size={100} />
          <Typography.Title style={styles.title} level={2}>
            Payment Success
          </Typography.Title>
          <Typography.Text style={styles.text}>
            Your money has been successfully sent to Sergio Ramasis
          </Typography.Text>
          <Typography.Text style={[styles.center]}>Amount</Typography.Text>
          <Typography.Title style={[styles.center]}>$220</Typography.Title>
          <Typography.Title style={[styles.center]} level={4}>How is your trip?</Typography.Title>
          <Typography.Text style={[styles.text, styles.center]}>
            Your feedback will help us improve your driving experience better.
          </Typography.Text>
          <Button type="primary">Please Feedback</Button>
        </Modal>
      )}
    </ScreenWrapper>
  );
};

export default PaymentSuccess;
