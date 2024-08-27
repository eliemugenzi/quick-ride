import React from "react";
import { View } from "react-native";
import validator from "validator";
import Icon from "../Icon";
import Base, { Props } from "./Base";

const Email: React.FC<Props> = (props) => {
  const hasError = !!props.value && !validator.isEmail(`${props.value}`);
  return (
    <Base
      {...props}
      inputProps={{
        keyboardType: "email-address",
      }}
      hasError={hasError}
      format={(value) => value.toLowerCase()}
      prefix={
        <View style={{ marginRight: 10 }}>
          <Icon name="at" size={15} />
        </View>
      }
    />
  );
};

export default Email;
