import { Dimensions } from 'react-native';

/**
 * Function that returns a scaled value based on the screen size
 */
export const scale = (size: number) => {
  const { width } = Dimensions.get('window');
  const ratio = size / 375;
  return Math.round(ratio * width);
};
