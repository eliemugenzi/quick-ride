import ScreenWrapper from "@/components/ScreenWrapper";
import TextInput from "@/components/TextInput";
import Typography from "@/components/Typography";
import { router } from "expo-router";
import React from "react";

import styles from "./styles";
import Button from "@/components/Button";
import OrLine from "@/components/OrLine";
import { TouchableOpacity } from "react-native";
import { useFormik } from "formik";
import schema from "./validationSchema";
import { useAtom } from "jotai";
import { loginAtom } from "@/atoms/userAtom";

const SignIn = () => {
  const [{ error }, handleSignIn] = useAtom(loginAtom) as any;

  const { values, errors, handleChange, handleSubmit } = useFormik({
  validationSchema: schema,
  initialValues: {
    username: '',
    password: ''
  },
  onSubmit: (values: any)=> {
   handleSignIn({
    credentials: values,
    callback: () => {
      router.navigate('/(tabs)')
    }
   })
  }
  })
  return (
    <ScreenWrapper hasBack onBackPress={() => router.back()}>
      <Typography.Title>
        Signin with your email or phone number
      </Typography.Title>
      <TextInput 
      value={values?.username}
      onChange={handleChange('username')}
      hasError={!!errors?.username}
      error={errors?.username as any || undefined}
      format={v=> v.toLowerCase()}
      style={styles.input}
       placeholder="Email or Phone Number" 
       />
      <TextInput.Password
        value={values?.password}
        onChange={handleChange('password')}
        hasError={!!errors?.password}
        error={errors?.password as any || error ||  undefined}
        style={styles.input}
        placeholder="Enter Your Password"
      />
      <Typography.Text 
    
      style={styles.textDanger}
      >
        Forgot Password?
      </Typography.Text>
      <Button
        type="primary"
        style={styles.input}
        onPress={handleSubmit}
      >
        Sign In
      </Button>
      <OrLine style={{marginBottom: 10}} />
      <Typography.Text style={styles.text}>Don't have an account? <TouchableOpacity 
      style={{alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: -3}}
      onPress={()=> router.navigate('/auth/signup')}><Typography.Text style={[styles.textPrimary, { alignSelf: 'center' }]}>Sign Up</Typography.Text></TouchableOpacity></Typography.Text>
    </ScreenWrapper>
  );
};

export default SignIn;
