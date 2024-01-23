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
import { Calendar } from 'react-native-calendars';

// Component
import Spacer from '../../components/Spacer';

// Constants
import theme from '../../constants/theme';
import { strings } from '../../constants/strings';

// Styles
import { styles } from './styles';
import commonImagePath from '../../constants/images';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import ChoicePicker from '../../components/ChoicePicker';

const BookAppointment = () => {
    const navigation = useNavigation()
    const options = ['11:00 AM - 12:00 PM', '12:00 PM - 01:00 PM', '01:00 PM - 02:00 PM', '02:00 PM - 03:00 PM', '03:00 AM - 04:00 PM', '04:00 PM - 05:00 PM']
    const [currentStep, setCurrentStep] = useState(1);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const [isCalendarVisible, setCalendarVisible] = useState(false);

    const handleShowDatePicker = () => {
        setCalendarVisible(true);
        console.log('kjshgad')
    };

    const hideCalendar = () => {
        setCalendarVisible(false);
    };

    const gotoNext = () => {
        if (currentStep === 3) {
            setSuccessModalVisible(true)
        } else if (currentStep < 3) {
            setCurrentStep(currentStep + 1);
        } else {
            console.log('kjshgad')
        }
    };

    // REnder UI............
    const renderView = () => {
        return (
            <>
                {currentStep === 1 &&
                    <>
                        <View style={styles.details}>
                            <Image source={commonImagePath.vetDoc} style={styles.image} />
                            <View style={styles.column}>
                                <Text style={styles.text}>{strings.docName}</Text>
                                <Spacer height={heightPercentageToDP('1%')} />
                                <Text style={styles.title}>{strings.docSpl}</Text>
                            </View>
                        </View>
                        <View style={styles.view}>
                            <Spacer height={heightPercentageToDP('2%')} />
                            <Text style={styles.sub}>{strings.selectDate}</Text>
                            <Spacer height={heightPercentageToDP('2%')} />
                            <TouchableOpacity style={{ borderWidth: 1, padding: '5%', alignItems: 'center', backgroundColor: theme.backgroundColor.white, borderRadius: 8, flexDirection: 'row', width: widthPercentageToDP('90%') }} onPress={handleShowDatePicker}>
                                <Text style={styles.uploadText}>{selectedDate ? selectedDate.toLocaleDateString() : strings.selectDate}</Text>
                                <Spacer width={widthPercentageToDP('60%')} />
                                <Icon name='angle-down' size={15} color={theme.fontColors.black} />
                            </TouchableOpacity>
                            <Spacer height={heightPercentageToDP('5%')} />
                            <Text style={styles.sub}>{strings.availSlot}</Text>
                            <Spacer height={heightPercentageToDP('1%')} />
                            <ChoicePicker options={options} showIcon={false} />
                            <Spacer height={heightPercentageToDP('5%')} />
                            <Text style={styles.sub}>{strings.description}</Text>
                            <Spacer height={heightPercentageToDP('1%')} />
                            <CustomInput placeholder={strings.details} />
                            <Spacer width={widthPercentageToDP('6%')} />
                            <Text style={styles.sub}>{strings.upload}</Text>
                            <Spacer height={heightPercentageToDP('1%')} />
                            <View style={{ borderStyle: 'dashed', borderWidth: 1, padding: '5%', alignItems: 'center' }}>
                                <Image source={commonImagePath.placeholder} />
                                <Text style={styles.uploadText}>{strings.uploadtext}</Text>
                            </View>
                            <Spacer height={heightPercentageToDP('3%')} />
                            <View style={styles.buttonContainer}>
                                <CustomButton primaryButton label={strings.checkOut} handlePress={gotoNext} />
                            </View>
                            {isCalendarVisible && (
                                <Modal
                                    isVisible={isCalendarVisible}
                                    onBackdropPress={hideCalendar}
                                    style={{ justifyContent: 'flex-end', margin: 0, backgroundColor:theme.backgroundColor.fillingBlue ,height: heightPercentageToDP('30%') }}>
                                    <Calendar
                                        onDayPress={(day) => {
                                            setSelectedDate(new Date(day.timestamp));
                                            hideCalendar();
                                        }}
                                        markedDates={{
                                            [selectedDate.toISOString().split('T')[0]]: {
                                                selected: true,
                                                disableTouchEvent: true,
                                                selectedColor: theme.backgroundColor.primary,
                                                selectedTextColor: theme.fontColors.white,
                                            },
                                        }}
                                    />
                                </Modal>
                            )}
                        </View>
                    </>}
                {currentStep === 2 &&
                    <View style={styles.view}>
                        <Spacer height={heightPercentageToDP('2%')} />
                        <View style={{ backgroundColor: theme.backgroundColor.white, padding: '10%', width: widthPercentageToDP('93%'), borderRadius: 20, borderColor: theme.borderColor.gray, borderWidth: 1 }}>
                            <View style={styles.titleRow}>
                                <Text style={styles.sub}>{strings.conDetails}</Text>
                                <Spacer width={widthPercentageToDP('40%')} />
                                <Icon name='angle-down' size={15} color={theme.fontColors.black} />
                            </View>
                            <Spacer height={heightPercentageToDP('4%')} />
                            <View style={styles.titleRow}>
                                <Text style={styles.uploadText}>Doctor Name</Text>
                                <Spacer width={widthPercentageToDP('30%')} />
                                <Text style={styles.uploadText}>Dr Rajkumar</Text>
                            </View>
                            <Spacer height={heightPercentageToDP('4%')} />
                            <View style={styles.titleRow}>
                                <Text style={styles.uploadText}>Service Type</Text>
                                <Spacer width={widthPercentageToDP('31%')} />
                                <Text style={styles.uploadText}>Veteritian</Text>
                            </View>
                            <Spacer height={heightPercentageToDP('4%')} />
                            <View style={styles.titleRow}>
                                <Text style={styles.uploadText}>Consultation Type</Text>
                                <Spacer width={widthPercentageToDP('23%')} />
                                <Text style={styles.uploadText}>Video</Text>
                            </View>
                            <Spacer height={heightPercentageToDP('4%')} />
                            <View style={styles.titleRow}>
                                <Text style={styles.uploadText}>Date</Text>
                                <Spacer width={widthPercentageToDP('45%')} />
                                <Text style={styles.uploadText}>12/03/2022</Text>
                            </View>
                            <Spacer height={heightPercentageToDP('4%')} />
                            <View style={styles.titleRow}>
                                <Text style={styles.uploadText}>Time</Text>
                                <Spacer width={widthPercentageToDP('45%')} />
                                <Text style={styles.uploadText}>10:00 AM</Text>
                            </View>
                            <Spacer height={heightPercentageToDP('4%')} />
                            <View style={styles.titleRow}>
                                <Text style={styles.uploadText}>{strings.reason}</Text>
                                <Spacer width={widthPercentageToDP('15%')} />
                                <Text style={styles.uploadText}>Cough</Text>
                            </View>
                        </View>
                        <Spacer height={heightPercentageToDP('2%')} />
                        <View style={{ backgroundColor: theme.backgroundColor.white, padding: '10%', width: widthPercentageToDP('93%'), borderRadius: 20, borderColor: theme.borderColor.gray, borderWidth: 1 }}>
                            <Text style={styles.sub}>{strings.paymentSummary}</Text>
                            <Spacer height={heightPercentageToDP('5%')} />
                            <View style={styles.titleRow}>
                                <Text style={styles.uploadText}>{strings.conDetails}</Text>
                                <Spacer width={widthPercentageToDP('35%')} />
                                <Text style={styles.uploadText}>$200</Text>
                            </View>
                            <Spacer height={heightPercentageToDP('3%')} />
                            <View style={styles.titleRow}>
                                <Text style={styles.uploadText}>{strings.conDetails}</Text>
                                <Spacer width={widthPercentageToDP('37%')} />
                                <Text style={styles.uploadText}>$26</Text>
                            </View>
                            <Spacer height={heightPercentageToDP('5%')} />
                            <View style={styles.titleRow}>
                                <Text style={styles.sub}>{strings.conDetails}</Text>
                                <Spacer width={widthPercentageToDP('35%')} />
                                <Text style={styles.sub}>$260</Text>
                            </View>
                        </View>
                        <Spacer height={heightPercentageToDP('3%')} />
                        <View style={styles.buttonContainer}>
                            <CustomButton primaryButton label={strings.makePayment} handlePress={gotoNext} />
                        </View>
                    </View> }
                {currentStep === 3 &&
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalText}>Your Payment was Successfull!</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('BookScreen')}>
                                <Text style={styles.modalLink}>Go to Services</Text>
                            </TouchableOpacity>
                        </View>
                    </View>}
            </>
        )
    };

    // Render body
    const renderBody = () => {
        return (
            <>
                <Spacer height={heightPercentageToDP('3%')} />
                <View style={styles.stepIndicatorContainer}>
                    <Spacer width={widthPercentageToDP('10%')} />
                    <View style={styles.stepIndicator}>
                        <View style={currentStep >= 1 ? styles.stepDotActive : styles.stepDot}>
                            {currentStep > 1 && (<Icon name="check" size={15} color={theme.fontColors.white} />)}
                        </View>
                        <Spacer width={widthPercentageToDP('1%')} />
                        <View style={currentStep >= 2 ? styles.stepLineActive : styles.stepLine} />
                        <Spacer width={widthPercentageToDP('1%')} />
                        <View style={currentStep >= 2 ? styles.stepDotActive : styles.stepDot}>
                            {currentStep > 2 && (<Icon name="check" size={15} color={theme.fontColors.white} />)}
                        </View>
                        <Spacer width={widthPercentageToDP('1%')} />
                        <View style={currentStep >= 3 ? styles.stepLineActive : styles.stepLine} />
                        <Spacer width={widthPercentageToDP('1%')} />
                        <View style={currentStep === 3 ? styles.stepDotActive : styles.stepDot}>
                            {currentStep === 3}
                        </View>
                    </View>
                    <Spacer width={widthPercentageToDP('10%')} />
                </View>
                {renderView()}
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
export default BookAppointment;
