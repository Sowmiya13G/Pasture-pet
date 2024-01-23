import React, { useState } from 'react';
import {
    Text,
    View,
    SafeAreaView,
    Modal,
    TouchableOpacity,
    FlatList,
    Image
} from 'react-native';

// Packages
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

// Component
import Spacer from '../../components/Spacer';
import DropdownPicker from '../../components/DropDownPicker';
// Constants
import theme from '../../constants/theme';
import { strings } from '../../constants/strings';

// Styles
import { styles } from './styles';
import commonImagePath from '../../constants/images';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const BookConsultation = () => {
    const navigation = useNavigation()

    const gotoNext = () => {
navigation.navigate('BookAppointment')
    };
    // REnder UI............

    const renderBody = () => {
        return (
            <>
                <Spacer height={heightPercentageToDP('3%')} />
                <View style={styles.details}>
                    <Image source={commonImagePath.vetDoc} style={styles.image} />
                    <Spacer height={heightPercentageToDP('1%')} />
                    <Text style={styles.text}>{strings.docName}</Text>
                    <Spacer height={heightPercentageToDP('1%')} />
                    <Text style={styles.title}>{strings.docSpl}</Text>
                </View>
                <View style={styles.view}>
                <View style={{flexDirection:'row'}}>
                <Icon name='map-marker' size={18} color={theme.fontColors.orange}/>
                <Spacer width={widthPercentageToDP('3%')} />
                <View style={styles.column}>
                    <Text style={styles.sub}>{strings.clinicAdd}</Text>
                    <Text style={styles.detail}>{strings.clinicAddress}</Text>
                </View>
                <Spacer width={widthPercentageToDP('10%')} />
                    <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                    <Image source={commonImagePath.whatsapp}/>
                    <Spacer width={widthPercentageToDP('3%')} />
                    <Image source={commonImagePath.tele}/>
                    </View>
                </View>
                    <Spacer height={heightPercentageToDP('3%')} />
                    <Text style={styles.sub}>{strings.about}</Text>
                    <Spacer height={heightPercentageToDP('1%')} />
                    <Text style={styles.detail}>{strings.loream}</Text>
                    <Spacer height={heightPercentageToDP('3%')} />
                    <View style={styles.titleRow}>
                        <View style={styles.column}>
                            <Text style={styles.sub}>{strings.email}</Text>
                            <Text style={styles.detail}>{strings.mail}</Text>
                        </View>
                        <Spacer width={widthPercentageToDP('5%')} />
                        <View style={styles.column}>
                            <Text style={styles.sub}>{strings.contactNo}</Text>
                            <Text style={styles.detail}>{strings.contactNum}</Text>
                        </View>
                    </View>
                    <Spacer height={heightPercentageToDP('3%')} />
                    <View style={styles.titleRow}>
                        <View style={styles.column}>
                            <Text style={styles.sub}>{strings.experience}</Text>
                            <Text style={styles.detail}>{strings.years}</Text>
                        </View>
                        <Spacer width={widthPercentageToDP('25%')} />
                        <View style={styles.column}>
                            <Text style={styles.sub}>{strings.consultType}</Text>
                            <Text style={styles.detail}>{strings.type}</Text>
                        </View>
                    </View>
                    <Spacer height={heightPercentageToDP('3%')} />
                    <View style={styles.consultation}>
                        <Text style={styles.bookConsul}>{strings.book}</Text>
                        <Spacer height={heightPercentageToDP('2%')} />
                        <Text style={styles.sub}>{strings.selectType}</Text>
                        <Spacer height={heightPercentageToDP('1%')} />
                        <DropdownPicker
                                options={['cm', 'inch']}
                            />
                        <Spacer height={heightPercentageToDP('5%')} />
                        <Text style={styles.sub}>{strings.reason}</Text>
                        <Spacer height={heightPercentageToDP('1%')} />
                        <CustomInput placeholder={strings.details} />
                    </View>
                    <Spacer height={heightPercentageToDP('3%')} />
                    <View style={styles.buttonContainer}>
                        <CustomButton primaryButton label={strings.next} handlePress={gotoNext} />
                    </View>
                    <Spacer height={heightPercentageToDP('3%')} />
                </View>
            </>
        );
    };

    // Render Header
    const renderHeader = () => {
        return (
            <View style={styles.header}>
                <Spacer width={widthPercentageToDP('1%')} />
                <TouchableOpacity onPress={() => goBack()} >
                    <Icon name="angle-left" size={25} color={theme.fontColors.black} style={styles.backIcon} />
                </TouchableOpacity>
                <Spacer width={widthPercentageToDP('20%')} />
                <Text style={styles.heading}>{strings.details}</Text>
                <Spacer width={widthPercentageToDP('15%')} />
                <TouchableOpacity onPress={() => goBack()} >
                    <Icon name="search" size={20} color={theme.fontColors.black} style={styles.backIcon} />
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={["SPECIALIST_DEATILS"]}
                renderItem={renderBody}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={renderHeader()}
            />
        </SafeAreaView>
    );
};
export default BookConsultation
