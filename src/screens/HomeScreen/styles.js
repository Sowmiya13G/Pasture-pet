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
    width: '100%',
    backgroundColor: theme.backgroundColor.white
  },
  title: {
    color: theme.fontColors.black,
    fontSize: theme.fontSizes.mediumFont,
    position: 'absolute',
    alignSelf: 'center',
    left: '45%',
    top: '55%'
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
  chart: {
    marginVertical: 8,
    width: wp('90%'),
    marginHorizontal: 0,
    // paddingLeft:0,
    borderRadius: 16,
    color: theme.fontColors.black
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '10%',
    width: '90%',
  },

  view: {
    display: 'flex',
    width: wp('100%'),
    height: hp('60%'),
    marginTop: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#FFECE7',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: '5%',
    bottom: 0
  },
  buttonText: {
    color: theme.fontColors.black,
    fontSize: theme.fontSizes.smallFontText,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  imageContainer: {
    width: 75,
    height: 75,
    margin: 5,
    borderRadius: 50,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  date: { backgroundColor: '#F5F5F5', flexDirection: 'row', justifyContent: 'center', alignSelf: 'flex-end', width: '40%', right: '3%', padding: 2, borderRadius: 10, alignItems: 'center' },
  text: {
    color: 'black'
  },
  mostTracked: {
    justifyContent: 'center',
    alignItem: 'center',
    flexDirection: 'row',
    width: wp('95%'),
    justifyContent: 'space-around'
  },
  categories: {
    flexDirection: 'row',
    width: wp('90%'),
    justifyContent:'flex-start',
    paddingLeft:'4%',
    flexWrap: 'wrap'
  }
});
