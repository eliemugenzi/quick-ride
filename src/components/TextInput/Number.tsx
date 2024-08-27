import React from "react";
import numeral from "numeral";
import Base, { Props } from "./Base";

export const withHyphen = {
  format: (value: string): string =>
    value?.toString().replace(/(\d{3})(\d{3})(\d+)/, "$1-$2-$3"),
  value: (value: string): string => value?.toString().replace(/-/g, ""),
};

const Number: React.FC<Props> = (props) => {
  return (
    <Base
      {...props}
      inputProps={{ keyboardType: "decimal-pad" }}
      hasError={
        `${props.value}`.length > 0 &&
        !numeral(props.value).value() &&
        numeral(props.value).value() !== 0
      }
      format={(value) => {
        if (props.hyphened) return withHyphen.format(value);

        return numeral(value).value() && !`${value}`.endsWith(".")
          ? numeral(props.value).format("0,0.[00000000]")
          : value;
      }}
      parse={(value) => {
        if (props.hyphened) return withHyphen.value(value);

        return numeral(value).value() && !`${value}`.endsWith(".")
          ? `${numeral(value).value()}`
          : value;
      }}
    />
  );
};

export default Number;
