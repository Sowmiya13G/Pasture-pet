import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import theme from '../../constants/theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 0 : 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.backgroundColor.white
  },
  viewCard: {
    padding: '5%',
    flexDirection: 'row',
    borderColor: theme.backgroundColor.lightGray, borderWidth: 1, width: wp('85%'), alignSelf: 'center', backgroundColor: theme.backgroundColor.white
  },
  cardInput: {
    flexDirection: 'row',
    borderColor: theme.backgroundColor.lightGray, borderWidth: 1, width: wp('85%'), alignSelf: 'center', backgroundColor: theme.backgroundColor.white
  },
  cardInput1: {
    flexDirection: 'row',
    borderColor: theme.backgroundColor.lightGray, borderWidth: 1, width: wp('40%'), alignSelf: 'center', backgroundColor: theme.backgroundColor.white
  },
  title: {
    color: theme.fontColors.black,
    fontSize: theme.fontSizes.mediumFont,
    textAlign: 'center',
    marginLeft: '10%',
    marginRight: '10%'
  },
  title1: {
    color: theme.fontColors.gray,
    fontSize: 10,
  },
  cardTxt: {
    color: theme.fontColors.inkLight,
    fontSize: theme.fontSizes.smallFontText,
  },
  name: {
    color: theme.fontColors.black,
    fontSize: theme.fontSizes.smallFontText,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  heading: {
    color: theme.fontColors.black,
    fontSize: theme.fontSizes.mediumFontText,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sub: {
    color: theme.fontColors.black,
    fontSize: theme.fontSizes.mediumFont,
    fontWeight: 'bold',
  },
  unlock: {
    color: theme.fontColors.black,
    fontSize: theme.fontSizes.smallFont,
  },
  unlock1: {
    color: theme.fontColors.black,
    fontSize: theme.fontSizes.smallFontText,
    fontWeight: 'bold',
  },
  soldOut: {
    color: theme.fontColors.orange,
    fontSize: theme.fontSizes.smallFontText,
  },
  uploadText: {
    color: '#4D4D4D',
    fontSize: theme.fontSizes.mediumFont,
    fontWeight: 'bold',
  },
  bookConsul: {
    color: theme.fontColors.black,
    fontSize: 17,
    fontWeight: 'bold',
  },
  details: {
    width: wp('50%'),
    alignItems: 'center',
    height: hp('15%'),
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  titleRow: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '10%',
    width: wp('90%'),
  },
  view: {
    width: wp('98%'),
    marginTop: 20,
    backgroundColor: '#FFECE7',
    padding: '5%',
    bottom: 0,
    // paddingLeft: '5%',
    // borderTopLeftRadius: wp('10%'),
    // borderTopLRightRadius: wp('10%'),
  },
  buttonText: {
    color: theme.fontColors.black,
    fontSize: theme.fontSizes.smallFontText,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  image: {
    width: '70%',
    height: '70%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  date: { backgroundColor: '#F5F5F5', flexDirection: 'row', justifyContent: 'center', alignSelf: 'flex-end', width: '40%', right: '3%', padding: 2, borderRadius: 10, alignItems: 'center' },
  text: {
    color: theme.fontColors.textBlue,
    fontWeight: 'bold',
    fontSize: theme.fontSizes.mediumFont,
  },
  text1: {
    color: theme.fontColors.textBlue,
    fontSize: theme.fontSizes.smallFontText,
    textDecorationLine:'underline'
  },
  detail: {
    color: theme.fontColors.black,
    fontSize: theme.fontSizes.smallFontText,
  },
  mostTracked: {
    justifyContent: 'center',
    alignItem: 'center',
    flexDirection: 'row',
    width: wp('95%'),
    justifyContent: 'space-around'
  },
  categories: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  category: {
    flexDirection: 'column',
    backgroundColor: theme.backgroundColor.white,
    width: wp('40%'),
    height: hp('25%'),
    padding: '1%',
    borderRadius: wp('3%'),
    marginBottom: '5%'
  },

  buttonContainer: {
    alignSelf: 'center'
  },
  stepIndicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp('1%'),
    width: wp('90%'),
    alignSelf: 'center'
  },
  stepIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepDot: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: theme.backgroundColor.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepDotActive: {
    width: 20,
    height: 20,
    borderRadius: 15,
    backgroundColor: theme.backgroundColor.blueChoice,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepLine: {
    flex: 1,
    height: 1,
    backgroundColor: theme.backgroundColor.blueTheme,
  },
  stepLineActive: {
    flex: 1,
    height: 2,
    backgroundColor: theme.backgroundColor.blueChoice,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: hp('50%')
  },
  modalContent: {
    backgroundColor: theme.backgroundColor.fillingBlue,
    padding: '5%',
    borderRadius: 10,
    width: wp('80%'),
    alignItems: 'center',
    alignSelf: 'center'
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.fontColors.black,
    marginBottom: 10,
  },
  modalLink: {
    fontSize: 16,
    color: theme.primaryColor,
    textDecorationLine: 'underline',
  },
  couponView: { flexDirection: 'row', borderStyle: 'dashed', borderWidth: 1, padding: '5%', alignItems: 'center', borderColor: theme.backgroundColor.orange, borderRadius: wp('5%') },
  imageView: {
    flexDirection: 'row',
    borderWidth: 1,
    padding: '5%',
    alignItems: 'center',
    borderBottomColor: '#FFDEC3',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    opacity: 0.5,
     right:5
  },
  imageView1: { 
    flexDirection: 'row', 
    borderWidth: 1, 
    padding: '5%', 
    alignItems: 'center', 
    borderBottomColor: '#FFDEC3', 
    borderTopColor: 'transparent',
     borderLeftColor: 'transparent', 
     borderRightColor: 'transparent',
      right: 20, 
      left: -3 },
  tablet: { height: 60, width: 60, borderRadius: 10 },
  buttonContainer: {
    alignSelf: 'center'
  },

  footerView: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: hp('13%'),
    borderTopLeftRadius: wp('8%'),
    borderTopRightRadius: wp('8%'),
    elevation: 10,
    backgroundColor: theme.backgroundColor.themeBg,
    padding: '5%',
    alignItems: 'center',
  },
  milestoneTitle: {
    fontSize: theme.fontSizes.smallFont,
    fontWeight: 'bold',
    color: theme.fontColors.inkLight,
    textAlign:'center', 
    right:5,
    left:5
},
titleContainer: {
  flexDirection:'row',
  justifyContent: 'space-around',
  width: wp('100%'),
  alignSelf: 'center'
},
stepTitleContainer: {
  flexDirection:'row'
},
});
