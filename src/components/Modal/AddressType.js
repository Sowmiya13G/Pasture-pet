import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, } from 'react-native';
import theme from '../../constants/theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { strings } from '../../constants/strings';
import commonImagePath from '../../constants/images';
import Spacer from '../Spacer';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

const AddressType = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const categories = [
        { type: strings.home },
        { type: strings.work },
        { type: strings.friendHouse }
    ];
    const toggleCategory = (category) => {
        if (selectedCategory && selectedCategory.type === category.type) {
            setSelectedCategory(null);
        } else {
            setSelectedCategory(category);
        }
    };

    return (
        <View style={styles.container}>
            {categories.map((category, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => toggleCategory(category)}
                    style={[
                        styles.viewCard,
                        index !== categories.length - 1 && styles.borderBottom,
                    ]} >
                    <Image source={commonImagePath.location} />
                    <Spacer width={widthPercentageToDP('2%')} />
                    <View style={styles.column}>
                        <Text style={styles.sub}>{category.type}</Text>
                        <Spacer height={heightPercentageToDP('1%')} />
                        <Text style={styles.title1}>{strings.homeText}</Text>
                    </View>
                    <Spacer width={widthPercentageToDP('8%')} />
                    <View style={[styles.stepDot, selectedCategory && selectedCategory.type === category.type && styles.stepDotActive]}>
                        {selectedCategory && selectedCategory.type === category.type ? (
                            <Icon name="check" size={15} color={theme.fontColors.white} />
                        ) : null}
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewCard: {
        padding: '5%',
        flexDirection: 'row',
        borderColor: theme.backgroundColor.lightGray,
        borderWidth: 1,
        width: wp('87%'),
        alignSelf: 'center',
        backgroundColor: theme.backgroundColor.white
    },
    text: {
        fontSize: theme.fontSizes.mediumFont,
        color: theme.fontColors.black,
    },
    title1: {
        color: theme.fontColors.gray,
        fontSize: 10,
    },
    title: {
        color: theme.fontColors.black,
        fontSize: theme.fontSizes.mediumFont,
        textAlign: 'center',
        marginLeft: '10%',
        marginRight: '10%'
    },
    sub: {
        color: theme.fontColors.black,
        fontSize: theme.fontSizes.mediumFont,
        fontWeight: 'bold',
    },
    checkboxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: hp('8%'),
        width: wp('90%'),
        backgroundColor: theme.backgroundColor.white,
        paddingLeft: '5%',
        paddingRight: '5%',
        borderWidth: 1,
        borderColor: theme.borderColor.gray,
    },
    borderBottom: {
        marginBottom: '5%',
    },
    checkbox: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        borderRadius: 15,
        padding: 0,
        margin: 0,
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
        backgroundColor: theme.backgroundColor.blueChoice,
        width: 20,
        height: 20,
        borderRadius: 15,
    },

});

export default AddressType;
