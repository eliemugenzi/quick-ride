import React from "react";
import Base, { BaseProps as BP } from "./Base";
import {
  View,
  TouchableOpacity,
  ScrollView,
  StyleProp,
  ViewStyle,
} from "react-native";
import _styles from "./Base/styles";
import Typography from "../Typography";
import Icon from "../Icon";
import DIMENSIONS from "@/theme/dimensions";
import Modal from "../Modal";

export interface OptionProp {
  label: string;
  value: any;
}
export interface SelectProps extends BP {
  value?: any;
  onChange?: (value: any) => void;
  options: OptionProp[];
  children?: React.ReactElement;
  scrollable?: boolean;
  modalStyle?: StyleProp<ViewStyle>;
  caption?: string;
  category?: "dropdown" | "season-picker";
}

const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  options,
  disabled,
  children,
  category = "dropdown",
  ...props
}) => {
  const [selected, setSelected] = React.useState<any>("");
  const [show, setShow] = React.useState(false);

  const styles = _styles;

  React.useEffect(() => {
    if (value) setSelected(value);
  }, [value]);

  const label = options.reduce(
    (pv, cv) => (cv.value === selected ? cv.label : pv),
    "",
  );

  const Wrapper = props.scrollable ? ScrollView : View;

  return (
    <>
      <Modal
        visible={show}
        toggleVisibility={(s: any) => setShow(s)}
        style={props.modalStyle}
        closable={true}
        title={props.label || props.caption}
      >
        <Wrapper>
          {options.map((option) => (
            <TouchableOpacity
              key={option.value}
              style={styles.select}
              onPress={() => {
                setSelected(option.value);
                if (onChange) onChange(option.value);
                setShow(false);
              }}
            >
              <View style={styles.selectInner}>
                <Typography style={styles.selectLabel}>
                  {option.label}
                </Typography>
              </View>
              {selected === option.value && (
                <Icon name="check" color={styles.input.color} />
              )}
            </TouchableOpacity>
          ))}
        </Wrapper>
      </Modal>
      {children ? (
        React.cloneElement(children, { onPress: () => setShow(true) })
      ) : (
        <>
          {category === "dropdown" ? (
            <Base
              {...props}
              selectable
              disabled={disabled || !options || options.length === 0}
              value={label}
              onPress={() => setShow(true)}
            />
          ) : (
            <TouchableOpacity onPress={() => setShow(true)}>
              <Typography.Text strong>{label}</Typography.Text>
              <Icon
                name="chevron-down"
                color="white"
                size={DIMENSIONS.padding / 1.2}
              />
            </TouchableOpacity>
          )}
        </>
      )}
    </>
  );
};

export default Select;
