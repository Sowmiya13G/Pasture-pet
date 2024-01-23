import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../../constants/theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Spacer from '../Spacer';
import CustomButton from '../CustomButton/CustomButton';
import { CheckBox } from 'react-native-elements';

const ModalFilter = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const categories = [
        'Nutritionist',
        'Eye Specialist',
        'General Vet',
        'Dentistry',
        'Nutritionist',
        'General Vet',
    ];
    const toggleCategory = (category) => {
        const isSelected = selectedCategories.includes(category);

        if (isSelected) {
            setSelectedCategories(selectedCategories.filter((item) => item !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.modalTitle}>Filter</Text>
                {categories.map((category, index) => (
                    <View key={index} style={styles.checkboxContainer}>
                        <CheckBox
                            value={selectedCategories.includes(category)}
                            onValueChange={() => toggleCategory(category)}
                        />
                        <Text style={styles.text}>{category}</Text>
                    </View>
                ))}
                <Spacer height={hp('3%')} />
                <View style={styles.buttonContainer}>
                    <CustomButton primaryButton label="SAVE" />
                </View>
                <Spacer height={hp('3%')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
        bottom: 0,
    },
    content: {
        backgroundColor: '#F8DAC7',
        padding: 20,
        height: hp('50%'),
        bottom: 0
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: theme.fontColors.black,
    },
    text: {
        fontSize: theme.fontSizes.mediumFont,
        color: theme.fontColors.black,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: hp('8%'),
        width: wp('90%'),
        marginBottom: hp('-2.5%'),
    },
    buttonContainer: {
        alignSelf: 'center'
    }
});

export default ModalFilter;
