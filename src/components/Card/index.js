import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import theme from '../../constants/theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Spacer from '../Spacer';
import CustomButton from '../CustomButton/CustomButton';
import commonImagePath from '../../constants/images';
import { strings } from '../../constants/strings';

const Card = ({ handleNext }) => {
    return (
        <View style={styles.container}>
            <Image source={commonImagePath.vetDoc} style={styles.img} />
            <Spacer width={wp('8%')} />
            <View style={styles.details}>
                <Text style={styles.modalTitle}>{strings.docName}</Text>
                <Text style={styles.text}>{strings.docSpl} </Text>
                <Spacer height={hp('1.5%')} />
                <Text style={styles.text}>{strings.address} </Text>
                <Spacer height={hp('1.5%')} />
                <CustomButton logInButton label={strings.book} handlePress={handleNext}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.backgroundColor.white,
        flexDirection: 'row',
        width: wp('90%'),
        marginBottom: '5%',
        alignSelf:'center',
        padding: '5%',
        borderRadius: wp('3%'),
        borderWidth: 1,
        borderColor: theme.borderColor.gray
    },
    closeButton: {
        padding: 10,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    closeButtonText: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: theme.fontColors.textBlue
    },
    text: {
        fontSize: theme.fontSizes.mediumFont,
        color: theme.fontColors.black
    },
    buttonText: {
        fontSize: theme.fontSizes.mediumFont,
        color: theme.fontColors.textBlue,
        textAlign: 'center',
        textDecorationLine: 'underline'
    },
    img: {
        resizeMode: 'contain',
        height: hp('20%'),
        width: wp('25%')
    },
    details:{
        justifyContent:'center',
        alignItems:'flex-start'
    }
});

export default Card;
