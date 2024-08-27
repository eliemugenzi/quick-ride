/*
 * Component: BaseTextInput
 * Created At: 2020-10-07 09:52:33
 */

import React from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  ViewStyle,
  TextStyle,
  StyleProp,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Typography from '@/components/Typography';
import Icon from '@/components/Icon';
import DIMENSIONS from '@/theme/dimensions';

interface WrapperProps {
  children: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  _styles: any;
  style: any;
}

const Wrapper: React.FC<WrapperProps> = ({
  children,
  onPress,
  disabled,
  _styles,
  style,
}) => (
  <View style={[disabled && _styles.disabled, style]}>
    {children}
    {onPress && (
      <TouchableOpacity
        style={_styles.touchable}
        onPress={onPress}
        disabled={disabled}
      />
    )}
  </View>
);

export interface BaseProps {
  inputRef?: React.RefObject<TextInput>;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
  inputWrapperStyle?: StyleProp<ViewStyle>;
  inputProps?: TextInputProps;
  disabled?: boolean;
  hasError?: boolean;
  placeholder?: string;
  label?: string;
  prefix?: React.ReactElement;
  suffix?: React.ReactElement;
  onPress?: () => void;
  format?: (value: string) => string;
  parse?: (value: string) => string;
  hyphened?: boolean;
  error?: string;
  selectable?: boolean;
  maxLength?: number;
  testID?: string;
}

export interface Props extends BaseProps {
  value?: string | number;
  onChange?: (value: string) => void;
}

const BaseTextInput: React.FC<Props> = ({
  inputRef,
  style,
  labelStyle,
  inputStyle,
  inputWrapperStyle,
  inputProps,
  disabled,
  hasError,
  placeholder,
  label,
  prefix,
  suffix,
  value,
  onChange,
  onPress,
  format = (v) => v,
  parse = (v) => v,
  error,
  selectable = false,
  maxLength,
  testID,
}) => {
  const [focused, setFocused] = React.useState<boolean>(false);
  const [_value, setValue] = React.useState<string>('');


  React.useEffect(() => {
    if (value !== _value) setValue(value ? `${value}` : '');
  }, [value]);

  const handleChange = (text = '') => {
    if (onChange) onChange(parse(text));

    setValue(parse(text));
  };
  return (
    <Wrapper
      onPress={onPress}
      disabled={disabled}
      _styles={styles}
      style={style}>
      {label && (
        <Typography.Text style={[styles.label, labelStyle]}>
          {label}
        </Typography.Text>
      )}
      <View
        style={[
          styles.inputWrapper,
          _value.length !== 0 && styles.inputNotEmpty,
          _value.length !== 0 &&
            !focused &&
            styles.inputNotEmptyNotFocused,
          focused && styles.inputWrapperFocused,
          hasError && styles.inputWrapperError,
          inputWrapperStyle,
        ]}>
        {prefix}
        <TextInput
          {...inputProps}
          testID={testID}
          ref={inputRef}
          value={format(_value)}
          onChangeText={handleChange}
          style={[
            styles.input,
            _value.length === 0 && styles.inputEmpty,
            inputStyle,
          ]}
          placeholder={placeholder}
          placeholderTextColor={styles.placeholder.color}
          selectionColor={styles.input.color}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          maxLength={maxLength}
          editable={
            onPress
              ? false
              : inputProps && inputProps.editable !== undefined
              ? inputProps.editable
              : !disabled
          }
        />
        {selectable && (
          <Icon
            name="chevron-down"
            // color={colors.textInput.base.placeholderColor}
            size={DIMENSIONS.padding / 1.2}
          />
        )}
        {suffix}
      </View>
      {error && (
        <Typography.Text style={styles.error}>
          {error}
        </Typography.Text>
      )}
    </Wrapper>
  );
};

export default BaseTextInput;
