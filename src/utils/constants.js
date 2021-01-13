import { Dimensions, Platform, PixelRatio } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

const scale = SCREEN_WIDTH / 320;

const normalize = (size) => {
	const newSize = size * scale;
	if (Platform.OS === 'ios') {
		return Math.round(PixelRatio.roundToNearestPixel(newSize))
	} else {
		return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
	}
}

export const colors = {
  yellow: '#FAC600',
  mainBlue: '#012169',
  homeItemsText: '#022F5C',
  grayText: '#959595',
  disablebuttoncolor: '#C2C2C2',
  wristBandError: '#EF4A5A',
  wristBandSuccess: '#31B991',
  tabbarback: '#022F5C',
  rightBlue: '#239571',
  navColor: '#012169',
  tintColor: '#FAC600',
  darkColor: '#1c1e2c',
  semiDarkColor: '#23273c',
  accentColor: '#4d4deb',
  dividerDark: '#c2c2c2',
  errorColor: '#eb4d77',
  goldColor: '#ffc300',
  whiteColor: '#fff',
  blackColor: '#000',
  successColor: '#31B991',
  buttoncolor: '#31B991',
  greyLight: '#f7f7f7',
  transparent: 'transparent',
  tinyGrey: '#A8B6C8',
  death: '#EF4A5A',
  recovered: '#31B991',
  textColor: '#323643',
  greyBox: '#a7a7a7',
  qGrey: '#c6c6c6',
  disabledButtonBg: '#b8b8b8',
  disabledButtonBorder: '#868686',
  linksBorder: 'rgba(2, 47, 92, 0.3)',
  transparent: 'rgba(0, 0, 0, 0)',
};

export const fontFamily = {
  LIGHT: 'Poppins-Light',
  REGULAR: 'Poppins-Regular',
  MEDIUM: 'Poppins-Medium',
  SEMI_BOLD: 'Poppins-SemiBold',
  BOLD: 'Poppins-Bold',
  EXTRA_BOLD: 'Poppins-ExtraBold',
  BLACK: 'Poppins-Black',
};

export const fontSize = {
  small: normalize(10),
  smallX: normalize(11),
  smallXS: normalize(12),
  smallXL: normalize(13),
  medium: normalize(14),
  mediumX: normalize(15),
  mediumXS: normalize(16),
  mediumXL: normalize(17),
  large: normalize(18),
  largeX: normalize(19),
  largeXS: normalize(20),
  largeXL: normalize(21),
  huge: normalize(22),
  hugeX: normalize(23),
  hugeXS: normalize(24),
  hugeXL: normalize(25),
  enormus: normalize(27),
  enormusX: normalize(29),
  enormusXS: normalize(32),
  enormusXL: normalize(42)
}

export const homeLinks = [
  {
    title: 'Countries by Risk',
    icon: 'icon-online-ed',
    link: 'https://google.com',
  },
  {
    title: 'Current Protocols',
    icon: 'icon-local-protocols',
    link: 'https://google.com',
  },
  {
    title: 'Quarantine Sites',
    icon: 'icon-pre-testing',
    link: 'https://google.com',
  },
];

export const baseURLS = {
  QA: 'https://qa.xafe.io/api/v1',
  PROD: 'https://bb.xafe.io/api/v1',
}
