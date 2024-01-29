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
    heading: {
        color: theme.fontColors.black,
        fontSize: theme.fontSizes.mediumFontText,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    header: {
        flexDirection: 'row',
        width: wp('99%'),
    },
    text: {
        color: theme.fontColors.black,
        fontWeight: 'bold',
        fontSize: theme.fontSizes.mediumFont,
    },
    text2: {
        color: theme.fontColors.gray,
        fontSize: theme.fontSizes.mediumFont,
        textAlign: 'center',
    },
    detail: {
        color: theme.fontColors.black,
        fontSize: theme.fontSizes.mediumFont,
    },
    footerView: {
        position: 'absolute',
        bottom: 0,
        height: hp('13%'),
        elevation: 10,
        alignItems: 'center'
    },
    view: {
        alignSelf: 'center',
        justifyContent: 'center',
        height: hp('78%')
    }
});
