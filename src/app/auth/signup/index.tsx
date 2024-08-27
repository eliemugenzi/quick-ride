import ScreenWrapper from "@/components/ScreenWrapper";
import TextInput from "@/components/TextInput";
import Typography from "@/components/Typography";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Icon from "@/components/Icon";
import COLORS from "@/theme/colors";
import Button from "@/components/Button";
import { router } from "expo-router";
import { useFormik } from "formik";
import { useAtom } from "jotai";

import schema from "./validationSchema";
import signUpAtom from "@/atoms/userAtom";
import componentDimensions from "@/theme/componentDimensions";
import OrLine from "@/components/OrLine";
const SignUp = () => {
  const [{ data, error }, signUp] = useAtom(signUpAtom) as any;
  const { errors, handleSubmit, handleChange, values, setFieldValue } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        mobileNumber: "",
        gender: "",
      },
      onSubmit: (values: any) => {
        // signUp({
        //   data: values,
        //   callback: () => router.navigate("/(tabs)"),
        // });

        router.push({
          pathname: '/auth/otp-verification',
          params: values
        })
      },
      validationSchema: schema,
    });
  return (
    <ScreenWrapper
      hasBack
      onBackPress={() => {
        router.navigate("/auth");
      }}
    >
      <Typography.Title level={2} style={styles.input}>
        Sign up with your email or phone number
      </Typography.Title>
      <TextInput
        placeholder="Name"
        value={values?.name}
        onChange={handleChange("name")}
        hasError={!!errors.name}
        error={(errors?.name as any) || undefined}
      />
      <TextInput.Email
        placeholder="Email"
        style={styles.input}
        value={values?.email}
        onChange={handleChange("email")}
        hasError={!!errors.email}
        error={(errors?.email as any) || undefined}
      />
      <TextInput.PhoneNumber
        placeholder="Your mobile number"
        value={values?.mobileNumber}
        onChangeText={(text) => {
          setFieldValue("mobileNumber", text);
        }}
        style={{ height: componentDimensions.textInput.height }}
      />
      <TextInput.Select
        style={styles.input}
        placeholder="Gender"
        value={values?.gender}
        onChange={handleChange("gender")}
        hasError={!!errors.gender}
        error={(errors?.gender as any) || error || undefined}
        options={[
          {
            label: "Male",
            value: "MALE",
          },
          {
            label: "Female",
            value: "FEMALE",
          },
        ]}
      />
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Icon
          name="check-circle"
          size={20}
          color={COLORS.primary}
          style={{
            marginRight: 10,
          }}
        />
        <Typography.Text style={[styles.textGray, { marginHorizontal: 10 }]}>
          By signing up, you agree to the{" "}
          <Typography.Text style={styles.textPrimary}>
            Terms of service
          </Typography.Text>{" "}
          and{" "}
          <Typography.Text style={styles.textPrimary}>
            Privacy policy.
          </Typography.Text>
        </Typography.Text>
      </View>
      <Button type="primary" style={[styles.input]} onPress={handleSubmit}>
        Signup
      </Button>
      <OrLine style={{marginBottom: 10}} />
      <Typography.Text style={styles.text}>Already have an account? <TouchableOpacity 
      style={{alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: -3}}
      onPress={()=> router.navigate('/auth/signin')}><Typography.Text style={[styles.textPrimary, { alignSelf: 'center' }]}>Sign in</Typography.Text></TouchableOpacity></Typography.Text>
    </ScreenWrapper>
  );
};

export default SignUp;
