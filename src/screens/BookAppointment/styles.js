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
    // width: '100%',
    backgroundColor: theme.backgroundColor.white
  },
  title: {
    color: theme.fontColors.black,
    fontSize: theme.fontSizes.mediumFont,
    textAlign: 'center',
    marginLeft: '10%',
    marginRight: '10%'
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
  uploadText:{
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
    width:wp('50%'),
    alignItems: 'center',
    height: hp('15%'),
    flexDirection:'row',
    alignSelf: 'flex-start',
  },
 titleRow:{
flexDirection:'row',
 },
 column:{
    flexDirection:'column',
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
    width: wp('100%'),
    marginTop: 20,
    backgroundColor: '#FFECE7',
    padding: '8%',
    bottom: 0,
    paddingLeft:'5%'
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
  detail:{ 
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
    marginBottom:'5%'
  },  

  buttonContainer: {
    alignSelf: 'center'
}, 
stepIndicatorContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: hp('2%'),
  width:wp('90%'),
  alignSelf:'center'
},
stepIndicator: {
  flexDirection: 'row',
  alignItems: 'center',
},
stepDot: {
  width: 20,
  height: 20,
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
  alignSelf:'center'
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
});
