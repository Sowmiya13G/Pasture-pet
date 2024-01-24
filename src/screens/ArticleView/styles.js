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
    // // textAlign: 'center',
    // marginLeft: '10%',
    // marginRight: '10%'
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
    paddingLeft: '15%',
  },
  sub: {
    color: theme.fontColors.black,
    fontSize: theme.fontSizes.mediumFontText,
    fontWeight: 'bold',
    marginLeft: '5%',
  },
  details: {
    marginTop: '3%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '10%',
    width: '90%',
  },
  titleRow:{
    flexDirection:'row',
    alignItems:'center',
     },
     seeAll:{
      color: theme.fontColors.textBlue,
      fontSize: theme.fontSizes.mediumFont,
      fontWeight: 'bold',
     textDecorationLine:'underline'
     },
  view: {
    display: 'flex',
    width: wp('100%'),
    marginTop: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#FFECE7',
    padding: '6%',
    bottom: 0
  },
  list: {
    display: 'flex',
    width: wp('100%'),
    padding: '3%',
    height: hp('32%'),
  },
  buttonText: {
    color: theme.fontColors.black,
    fontSize: theme.fontSizes.smallFontText,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  image: {
    flex: 1,
    width: '80%',
    height: '80%',
    resizeMode: 'cover',
    alignSelf: 'center',
    borderRadius: wp('3%')
  },
  date: { backgroundColor: '#F5F5F5', flexDirection: 'row', justifyContent: 'center', alignSelf: 'flex-end', width: '40%', right: '3%', padding: 2, borderRadius: 10, alignItems: 'center' },
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: theme.fontSizes.smallFont
  },
  mostTracked: {
    color: theme.fontColors.textBlue,
    textAlign: 'center',
    fontSize: theme.fontSizes.mediumFontText,
    fontWeight:'bold'

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
    height: hp('27%'),
    padding: '1%',
    borderRadius: wp('3%'),
    // marginBottom:'5%'
  }
});
