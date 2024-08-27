/*
 * Component: Button
 * Created At: 2020-10-03 21:02:50
 */

import React from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  ViewStyle,
  StyleProp,
} from 'react-native';



import styles, { ButtonTypes, ButtonSizes } from './styles';
import Icon from '../Icon';
import { IconsNames } from '../Icon/icons';
import Typography from '../Typography';
import componentDimensions from '@/theme/componentDimensions';

interface Props {
  block?: boolean;
  style?: StyleProp<ViewStyle>;
  type?: keyof typeof ButtonTypes;
  size?: keyof typeof ButtonSizes;
  loading?: boolean;
  disabled?: boolean;
  icon?: IconsNames;
  iconPosition?: 'left' | 'right';
  iconSize?: number;
  children?:
    | string
    | string[]
    | React.ReactElement
    | React.ReactElement[];
  onPress?: () => void;
  testID?: string;
}

const Button: React.FC<Props> = ({
  style,
  block,
  type = 'plain',
  size = 'medium',
  loading = false,
  disabled = false,
  icon,
  iconPosition = 'left',
  iconSize,
  children,
  onPress,
  testID,
}) => {

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles(type, size).wrapper,
        block && styles(type, size).block,
        componentDimensions.button[size],
        // disabled && colors.button.disabled,
        style,
      ]}>
      {loading ? (
        <ActivityIndicator
          size="small"
        //   color={
        //     disabled
        //       ? colors.button.disabled.color
        //       : colors.button[type].color
        //   }
        />
      ) : (
        <>
          {icon && iconPosition === 'left' && (
            <Icon
              style={styles( type, size).buttonIcon}
              name={icon}
              size={
                iconSize || styles( type, size).text.fontSize
              }
              color={styles( type, size).text.color}
            />
          )}
          <Typography.Text
            numberOfLines={1}
            style={[
              styles( type, size).text,
              icon !== undefined && styles( type, size).icon,
              iconPosition === 'right' &&
                icon !== undefined &&
                styles( type, size).iconRight,
            //   disabled && colors.button.disabled,
            ]}
            testID={testID}>
            {children}
          </Typography.Text>
          {icon && iconPosition === 'right' && (
            <Icon
              style={styles( type, size).buttonIcon}
              name={icon}
              size={
                iconSize || styles( type, size).text.fontSize
              }
              color={styles( type, size).text.color}
            />
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;
