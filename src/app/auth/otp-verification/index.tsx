import ScreenWrapper from "@/components/ScreenWrapper";
import TextInput from "@/components/TextInput";
import Typography from "@/components/Typography";
import React from "react";
import styles from "./styles";
import { router, useGlobalSearchParams } from "expo-router";
import Button from "@/components/Button";

const OTPVerification = () => {

  const params = useGlobalSearchParams();

  console.log('PARAMS___', params)
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
          router.push({
            pathname: '/auth/set-password',
            params
          })
        }}
      >
        Verify
      </Button>
    </ScreenWrapper>
  );
};

export default OTPVerification;
