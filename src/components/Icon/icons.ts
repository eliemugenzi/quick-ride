import onboarding1 from "./xml/onboarding-1";
import onboarding2 from "./xml/onboarding-2";
import onboarding3 from "./xml/onboarding-3";
import onboardingAction1 from "./xml/onboarding-action-1";
import onboardingAction2 from "./xml/onboarding-action-2";
import onboardingAction3 from "./xml/onboarding-action-3";
import authWelcome from "./xml/auth-welcome";
import chevronDown from "./xml/chevron-down";
import eye from "./xml/eye";
import eyeOff from "./xml/eye-off";
import chevronRight from "./xml/chevron-right";
import chevronLeft from "./xml/chevron-left";
import at from "./xml/at";
import x from "./xml/x";
import check from "./xml/check";
import checkCircle from "./xml/check-circle";
import home from "./xml/home";
import heart from "./xml/heart";
import wallet from "./xml/wallet";
import discount from "./xml/discount";
import user from "./xml/user";
import mapMarker from "./xml/map-marker";
import search from "./xml/search";
import locationTarget from "./xml/location-target";
import mapPin from "./xml/map-pin";
import star from "./xml/star";
import mph from "./xml/mph";
import carSpeed from "./xml/car-speed";
import fuel from "./xml/fuel";
import power from "./xml/power";
import verticalLine from "./xml/vertical-line";
import visa from "./xml/visa";
import mastercard from "./xml/mastercard";
import paypal from "./xml/paypal";
import cash from "./xml/cash";
import confirmed from "./xml/confirmed";
import sourceTrack from "./xml/source-track";
import destinationTrack from "./xml/destination-track";

const icons = {
  "onboarding-one": onboarding1,
  "onboarding-two": onboarding2,
  "onboarding-three": onboarding3,
  "onboarding-action-one": onboardingAction1,
  "onboarding-action-two": onboardingAction2,
  "onboarding-action-three": onboardingAction3,
  "auth-welcome": authWelcome,
  "chevron-down": chevronDown,
  eye,
  "eye-off": eyeOff,
  "chevron-right": chevronRight,
  "chevron-left": chevronLeft,
  at,
  x,
  check,
  "check-circle": checkCircle,
  home,
  heart,
  wallet,
  discount,
  user,
  "map-marker": mapMarker,
  search,
  "location-target": locationTarget,
  "map-pin": mapPin,
  star,
  mph,
  "car-speed": carSpeed,
  fuel,
  power,
  "vertical-line": verticalLine,
  visa,
  mastercard,
  paypal,
  cash,
  confirmed,
  "source-track": sourceTrack,
  "destination-track": destinationTrack,
};

export type IconsNames = keyof typeof icons;

export default icons;
