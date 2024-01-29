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
  bookConsul: {
    color: theme.fontColors.black,
    fontSize: 17,
    fontWeight: 'bold',
  },
  details: {
    width: wp('100%'),
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('25%'), 
    alignSelf:'center'

  },
  titleRow: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column'
  },
  header: {
    flexDirection: 'row',
    width: wp('99%'),
  },
  view: {
    width: wp('100%'),
    marginTop: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#FFECE7',
    padding: '8%',
    bottom: 0
  },
  buttonText: {
    color: theme.fontColors.black,
    fontSize: theme.fontSizes.smallFontText,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  text: {
    color: theme.fontColors.black,
    fontWeight: 'bold',
    fontSize: theme.fontSizes.mediumFont,
  },
  text2: {
    color: theme.fontColors.gray,
    fontSize: theme.fontSizes.mediumFont,
  },
  detail: {
    color: theme.fontColors.black,
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
    marginBottom: '5%'
  },
  fur: {
    alignSelf: 'center'
  },
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
    alignItems: 'center'
  },
  background: {
    top: '45%', borderRadius: wp('10%')
  },
  image: {
    resizeMode: 'contain',
    height: hp('20%'),
    width: wp('90%'),
  },
  description: {
    fontSize: theme.fontSizes.mediumFont,
    textAlign: 'center',
    color: theme.fontColors.secondaryBlack,
    paddingBottom: '10%',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.backgroundColor.black,
    top:5
  },
  paginationDot: {
    width: wp('3%'),
    height: hp('1.5%'),
    borderRadius: 5,
    backgroundColor: theme.backgroundColor.gray,
    marginHorizontal: 5,
    // bottom:'40%'
  },
  paginationDotActive: {
    backgroundColor: theme.backgroundColor.blueTheme,
  },
  row:{
    justifyContent: 'space-between',
    flexDirection:'row',
    width:wp('30%'),
    alignSelf:'center',
    alignItems: 'center',
  },
  plus:{
    padding: '3%',
    backgroundColor: theme.backgroundColor.secondaryOrange,
    borderRadius: wp('2%'),
    fontWeight:'bold',
    fontSize: theme.fontSizes.mediumFont, 
    paddingLeft:'10%',
    paddingRight:'10%', alignSelf:'center'
  },
  count:{
    fontWeight:'bold',
    fontSize: theme.fontSizes.mediumFontText, 
    color: theme.fontColors.black
  }, 
  minus:{
    padding: '3%',
    backgroundColor: theme.backgroundColor.gray,
    borderRadius: wp('2%'),
    fontWeight:'bold',
    fontSize: theme.fontSizes.mediumFont, 
    paddingLeft:'10%',
    paddingRight:'10%', alignSelf:'center'
  }, 
  viewCard: {
    padding: '4%', 
   flexDirection:'row', 
    borderColor: theme.backgroundColor.orange, borderWidth:1, width: wp('85%'), alignSelf:'center', backgroundColor:theme.backgroundColor.white
  },
  viewCard2: {
    padding: '4%', 
   flexDirection:'row', 
    borderColor: theme.backgroundColor.gray, borderWidth:1, width: wp('85%'), alignSelf:'center', backgroundColor:theme.backgroundColor.white
  },
  modalOverlay: {
    // ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    // alignSelf:'center',
     justifyContent:'center',
    // height:'100%'
  },

  modalContent: {
    backgroundColor:'#FFF7F2',
    padding: '10%',
  borderRadius:wp('5%'),
   alignSelf:'center',
    height: hp('20%'),
    width:wp('75%'), top:'180%'
  },
});
