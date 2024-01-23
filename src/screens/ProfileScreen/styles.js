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
  heading: {
    color: theme.fontColors.black,
    fontSize: theme.fontSizes.mediumFontText,
    fontWeight: 'bold',
    paddingLeft: '15%',
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6%',
    bottom: 0
  },
  buttonText: {
    color: theme.fontColors.black,
    fontSize: theme.fontSizes.smallFontText,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  piechart: {
    marginVertical: 8,
    borderRadius: 16,
    transform: [{ rotate: '210deg' }]
  },
  date: { backgroundColor: '#F5F5F5', flexDirection: 'row', justifyContent: 'center', alignSelf: 'flex-end', width: '40%', right: '3%', padding: 2, borderRadius: 10, alignItems: 'center' },
  text: {
    color: 'black'
  },
  bar:{ paddingLeft: 10, paddingRight: 10, justifyContent: 'center', alignItem: 'center', right: 5, bottom: 0 }
});
