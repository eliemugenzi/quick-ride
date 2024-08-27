import COLORS from '@/theme/colors';

export const light = {
  plain: {
    color: COLORS.darkBlue,
  },
  primary: {
    color: COLORS.blue,
  },
  success: {
    color: COLORS.green,
  },
  danger: {
    color: COLORS.red,
  },
  secondary: {
    color: COLORS.lightDark,
  },
  content: {
    color: COLORS.lightDark,
  },
  warning: {
    color: COLORS.yellow,
  },
};

export const dark = {
  ...light,
  plain: { ...light.plain, color: COLORS.white },
  secondary: { ...light.secondary, color: COLORS.gray },
};
