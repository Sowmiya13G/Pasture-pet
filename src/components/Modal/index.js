import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import theme from '../../constants/theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Spacer from '../Spacer';
import CustomInput from '../CustomInput/CustomInput';
import CustomButton from '../CustomButton/CustomButton';

const ModalContent = ({ closeModal }) => {
  return (
    <View style={styles.container}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Vaccination</Text>
        <Spacer height={hp('3%')}/>
        <Text style={styles.text}>Others - Please Specify </Text>
        <Spacer height={hp('1.5%')}/>
        <CustomInput />
        <Spacer height={hp('2%')}/>
        <Text style={styles.text}>Date</Text>
        <Spacer height={hp('1.5%')}/>
        <CustomInput />
        <Spacer height={hp('2%')}/>
        <Text style={styles.text}>Clinic</Text>
        <Spacer height={hp('1.5%')}/>
        <CustomInput />
        <Spacer height={hp('2%')}/>
        <Text style={styles.text}>Upload Image</Text>
        <Spacer height={hp('1.5%')}/>
        <CustomInput />
        <Spacer height={hp('2%')}/>
        <Text style={styles.buttonText}>View Medical Log</Text>
        <Spacer height={hp('2%')}/>
        
        <CustomButton primaryButton label='Submit' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
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
  modalContent: {
    backgroundColor: '#FFECE7',
    padding: 20,
    height: '80%', 
    borderTopLeftRadius:wp('15%'),
    borderTopRightRadius:wp('15%'),
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign:'center',
    color: theme.fontColors.black
  },
  text: {
    fontSize: theme.fontSizes.mediumFont,
    color: theme.fontColors.black
  },
  buttonText: {
    fontSize: theme.fontSizes.mediumFont,
    color: theme.fontColors.textBlue,
    textAlign:'center',
    textDecorationLine:'underline'
  },
});

export default ModalContent;
