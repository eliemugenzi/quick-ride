import { StyleSheet } from 'react-native';
import DIMENSIONS from '@/theme/dimensions';
import COLORS from '@/theme/colors';

export enum ButtonTypes {
  'plain',
  'primary',
  'success',
  'danger',
}

export enum ButtonSizes {
  'medium',
  'small',
  'tiny',
}

export default (
  type: keyof typeof ButtonTypes,
  size: keyof typeof ButtonSizes,
) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      paddingHorizontal:
        size === 'tiny' ? 6 : size === 'small' ? 8 : 10,
      backgroundColor: type === 'primary' ? COLORS.primary : type === 'danger' ? COLORS.red : 'transparent',
      borderColor: type === 'plain' ? COLORS.primary : 'transparent',
      borderWidth: 1
    },
    text: {
      fontSize: size === 'tiny' ? 10 : size === 'small' ? 12 : 14,
      color: type === 'primary' ? COLORS.white : type === 'danger' ? COLORS.white : COLORS.primary ,
      fontWeight: '500',
    },
    icon: {
      marginLeft: DIMENSIONS.padding * 0.3,
    },
    iconRight: {
      marginRight: DIMENSIONS.padding * 0.3,
    },
    block: {
      width: '100%',
    },
    buttonIcon: {
      marginBottom: -3,
    },
  });
