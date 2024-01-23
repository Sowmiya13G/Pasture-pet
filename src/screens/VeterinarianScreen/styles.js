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
 titleRow:{
flexDirection:'row',
justifyContent:'space-around',
 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '10%',
    width: '90%',
  },
  view: {
    width: wp('100%'),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: '5%',
    bottom: 0,
    marginTop: '5%',
    // height:hp('100%')
  },
  background:{
    width: wp('100%'),
    marginTop: '35%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    bottom: 0,
    // height:'100%'
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
    fontWeight: 'bold',
    fontSize: theme.fontSizes.mediumFont,
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
  filterModalContainer: {
    // height: hp('80%'),
    // backgroundColor: theme.backgroundColor.white,
    // borderTopLeftRadius: wp('5%'),
    // borderTopRightRadius: wp('5%'),
    // padding: wp('5%'),
    bottom:0
  },

});
