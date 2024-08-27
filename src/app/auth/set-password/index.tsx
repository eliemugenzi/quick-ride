import ScreenWrapper from "@/components/ScreenWrapper";
import TextInput from "@/components/TextInput";
import Typography from "@/components/Typography";
import React from "react";

import styles from "./styles";
import Button from "@/components/Button";
import { router, useGlobalSearchParams } from "expo-router";
import { useFormik } from "formik";
import validationSchema from "./validationSchema";
import { useAtom } from "jotai";
import signUpAtom from "@/atoms/userAtom";

const SetPassword = () => {
  const [{ data, error }, signUp] = useAtom(signUpAtom) as any;

  const params = useGlobalSearchParams();

  const { values, errors, handleChange, handleSubmit } = useFormik({
    validationSchema,
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values: any) => {
      const payload = {
        ...params,
        password: values?.password,
      };

      signUp({
          data: payload,
          callback: () => router.navigate("/(tabs)"),
        });
    },
  });
  return (
    <ScreenWrapper
      hasBack
      onBackPress={() => {
        router.back();
      }}
    >
      <Typography.Title style={styles.center}>
        Set New password
      </Typography.Title>
      <Typography.Text style={[styles.center]}>
        Set your new password
      </Typography.Text>
      <TextInput.Password
        value={values?.password}
        onChange={handleChange("password")}
        hasError={!!errors?.password}
        error={(errors?.password as any) || undefined}
        placeholder="Enter Your New Password"
        style={styles.input}
      />
      <TextInput.Password
        value={values?.confirmPassword}
        onChange={handleChange("confirmPassword")}
        hasError={!!errors?.confirmPassword}
        error={(errors?.confirmPassword as any) || error || undefined}
        placeholder="Confirm Password"
        style={styles.input}
      />
      <Typography.Text style={styles.text}>
        At least 1 number or a special character
      </Typography.Text>
      <Button
        type="primary"
        style={[styles.input, { marginTop: 20 }]}
        onPress={handleSubmit}
      >
        Save
      </Button>
    </ScreenWrapper>
  );
};

export default SetPassword;
