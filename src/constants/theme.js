import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const screenHeight = hp('100%');
const screenWidth = wp('100%');

const backgroundColor = {
  white: '#FFFFFF',
  black: '#000000',
  secondaryBlack: '#292929',
  primary: '#FAFAFA',
  gray: '#CCCCCC',
  lightGray: '#E5E4E2',
  orange: '#E47718',
  secondaryOrange: '#FF8C6D',
  fillingBlue: '#CEDCFC',
  blueTheme: '#006C97',
  blueChoice:'#004C6B',
  transparent: 'transparent',
  themeBg:'#FFECE7'
};

const borderColor = {
  white: '#FFFFFF',
  black: '#000000',
  gray: '#CCCCCC',
  blueChoice:'#004C6B'
};
const fontSizes = {
  bigFont: hp('3%'),
  mediumFont: hp('2%'),
  smallFont: hp('1.5%'),
  bigFontText: hp('3.5%'),
  mediumFontText: hp('2.8%'),
  smallFontText: hp('1.8%'),
};

const fontColors = {
  secondaryBlack: '#292929',
  inkBlack: '#252A31',
  inkLight: '#697D95',
  inkDark: '#252A31',
  orange: '#E47718',
  white: '#FFFFFF',
  green: '#008000',
  black: '#000000',
  textBlue: '#006C97',
  secondaryOrange: '#FF8C6D',
};

export default {
  fontSizes,
  fontColors,
  screenHeight,
  screenWidth,
  backgroundColor,
  borderColor,
};
