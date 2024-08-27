import ScreenWrapper from "@/components/ScreenWrapper";
import TextInput from "@/components/TextInput";
import Typography from "@/components/Typography";
import React from "react";
import styles from "./styles";
import { router } from "expo-router";
import Button from "@/components/Button";

const OTPVerification = () => {
  return (
    <ScreenWrapper
      hasBack
      onBackPress={() => {
        router.navigate("/auth/signup");
      }}
    >
      <Typography.Title style={styles.title}>
        Phone Verification
      </Typography.Title>
      <Typography.Text style={styles.input}>
        Enter your OTP Code
      </Typography.Text>
      <TextInput.OTP />
      <Typography.Text style={styles.text}>
        Didn't receive code?{" "}
        <Typography.Text style={styles.textPrimary}>
          Resend again
        </Typography.Text>
      </Typography.Text>
      <Button
        type="primary"
        style={[styles.input, { marginTop: 50 }]}
        onPress={() => {
          router.navigate("/auth/set-password");
        }}
      >
        Verify
      </Button>
    </ScreenWrapper>
  );
};

export default OTPVerification;
