import React, { useState } from 'react';
import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    Image,
    TextInput
} from 'react-native';

// Packages
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

// Styles
import { styles } from './styles';

// Constants
import theme from '../../constants/theme';
import { strings } from '../../constants/strings';

// Component
import Spacer from '../../components/Spacer';
import commonImagePath from '../../constants/images';
import CustomButton from '../../components/CustomButton/CustomButton';
import Payment from '../../components/Modal/payment';
import AddressType from '../../components/Modal/AddressType';
const CheckOut = () => {
    const navigation = useNavigation()
    const [currentStep, setCurrentStep] = useState(1);
   
    const milestoneTitles = [
        { title: 'Cart'},
        { title: 'Address'},
        { title: 'Review' },
        { title: 'Payment'},
    ];


    const gotoNext = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
        } else {
            navigation.navigate('Success')
        }
    };

    // REnder UI............
    const renderView = () => {
        return (
            <>
                {currentStep === 1 &&
                    <>
                        <View style={styles.view}>
                            <Spacer height={heightPercentageToDP('2%')} />
                            <Text style={[styles.sub, { left: 15 }]}>{strings.yourCart}</Text>
                            <View style={styles.imageView}>
                                <Image source={commonImagePath.omega} style={styles.tablet} />
                                <Spacer width={widthPercentageToDP('2%')} />
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={styles.unlock}>{strings.detailsOfOmega}</Text>
                                    <Text style={styles.unlock}>$30</Text>
                                </View>
                                <Spacer width={widthPercentageToDP('10%')} />
                                <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                                    <Text style={styles.soldOut}>{strings.soldOut}</Text>
                                    <Spacer height={heightPercentageToDP('2%')} />
                                    <Icon name='trash-o' size={15} color={theme.fontColors.orange} />
                                </View>
                            </View>
                            <Spacer height={heightPercentageToDP('1%')} />
                            <View style={styles.imageView1}>
                                <Image source={commonImagePath.omega} style={styles.tablet} />
                                <Spacer width={widthPercentageToDP('2%')} />
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={styles.unlock}>{strings.detailsOfOmega}</Text>
                                    <Text style={styles.unlock}>$30</Text>
                                </View>
                                <View style={{ flexDirection: 'column', alignItems: 'flex-end', right: 18 }}>
                                    <Image source={commonImagePath.count} style={styles.count} />
                                    <Spacer height={heightPercentageToDP('1%')} />
                                    <View style={[styles.titleRow, { alignItems: 'center' }]}>
                                        <Text style={styles.soldOut}>{strings.available}</Text>
                                        <Spacer width={widthPercentageToDP('2%')} />
                                        <Icon name='trash-o' size={15} color={theme.fontColors.orange} />
                                    </View>
                                </View>
                            </View>
                            <Spacer height={heightPercentageToDP('3%')} />
                            <View style={styles.couponView}>
                                <Image source={commonImagePath.percentage} />
                                <Spacer width={widthPercentageToDP('2%')} />
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={styles.uploadText}>{strings.applyCoupon}</Text>
                                    <Text style={styles.unlock}>{strings.unlock}</Text>
                                </View>
                            </View>
                            <Spacer height={heightPercentageToDP('3%')} />
                            <View style={{ backgroundColor: theme.backgroundColor.white, padding: '8%', width: widthPercentageToDP('90%'), borderColor: theme.borderColor.gray, borderWidth: 1, alignSelf: 'center' }}>
                                <Text style={styles.sub}>{strings.details}</Text>
                                <Spacer height={heightPercentageToDP('2%')} />
                                <View style={styles.titleRow}>
                                    <Text style={styles.unlock}>{strings.conDetails}</Text>
                                    <Spacer width={widthPercentageToDP('30%')} />
                                    <Text style={styles.unlock}>$254</Text>
                                </View>
                                <Spacer height={heightPercentageToDP('2%')} />
                                <View style={styles.titleRow}>
                                    <Text style={styles.unlock}>{strings.conDetails}</Text>
                                    <Spacer width={widthPercentageToDP('33%')} />
                                    <Text style={styles.unlock}>$26</Text>
                                </View>
                                <Spacer height={heightPercentageToDP('5%')} />
                                <View style={styles.titleRow}>
                                    <Text style={styles.sub}>{strings.toPay}</Text>
                                    <Spacer width={widthPercentageToDP('50%')} />
                                    <Text style={styles.sub}>$280</Text>
                                </View>
                            </View>
                            <Spacer height={heightPercentageToDP('3%')} />
                        </View>
                    </>}
                {currentStep === 2 &&
                    <View style={styles.view}>
                        <Spacer height={heightPercentageToDP('2%')} />
                        <View style={styles.titleRow}>
                            <Text style={[styles.sub, { left: 15 }]}>{strings.selectAddress}</Text>
                            <Spacer width={widthPercentageToDP('30%')} />
                            <Text style={[styles.text1]}>+{strings.addNewAddress}</Text>
                        </View>
                        <Spacer height={heightPercentageToDP('4%')} />
                        <AddressType />
                     
                        <Spacer height={heightPercentageToDP('50%')} />
                    </View>}
                {currentStep === 3 &&
                    <View style={styles.view}>
                        <Spacer height={heightPercentageToDP('2%')} />
                        <Text style={[styles.sub, { left: 5 }]}>Cart</Text>
                        <View style={styles.imageView1}>
                            <Image source={commonImagePath.omega} style={styles.tablet} />
                            <Spacer width={widthPercentageToDP('2%')} />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.unlock}>{strings.detailsOfOmega}</Text>
                                <Text style={styles.unlock1}>$30</Text>
                            </View>
                            <Spacer width={widthPercentageToDP('10%')} />
                            <View style={{ flexDirection: 'column', alignItems: 'flex-end', right: 18 }}>
                                <Image source={commonImagePath.count1} style={styles.count} />
                                <Spacer height={heightPercentageToDP('1%')} />
                                <Icon name='trash-o' size={15} color={theme.fontColors.orange} />
                            </View>
                        </View>
                        <Spacer height={heightPercentageToDP('1%')} />
                        <View style={styles.imageView1}>
                            <Image source={commonImagePath.omega} style={styles.tablet} />
                            <Spacer width={widthPercentageToDP('1.5%')} />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.unlock}>{strings.detailsOfOmega}</Text>
                                <Text style={styles.unlock1}>$30</Text>
                            </View>
                            <Spacer width={widthPercentageToDP('10%')} />
                            <View style={{ flexDirection: 'column', alignItems: 'flex-end', right: 18 }}>
                                <Image source={commonImagePath.count1} style={styles.count} />
                                <Spacer height={heightPercentageToDP('1%')} />
                                <Icon name='trash-o' size={15} color={theme.fontColors.orange} />
                            </View>
                        </View>
                        <Spacer height={heightPercentageToDP('1.5%')} />
                        <View style={styles.titleRow}>
                            <Text style={[styles.sub, { left: 5 }]}>Address</Text>
                            <Spacer width={widthPercentageToDP('43%')} />
                            <Text style={[styles.text1]}>Change Address</Text>
                        </View>
                        <Spacer height={heightPercentageToDP('1.5%')} />
                        <View style={styles.viewCard}>
                            <Image source={commonImagePath.location} />
                            <Spacer width={widthPercentageToDP('2%')} />
                            <View style={styles.column}>
                                <Text style={styles.sub}>{strings.home}</Text>
                                <Text style={styles.title1}>{strings.homeText}</Text>
                            </View>
                            <Spacer width={widthPercentageToDP('6%')} />
                            <Icon name='check' size={15} color={theme.fontColors.white} style={{ backgroundColor: theme.backgroundColor.blueTheme, borderRadius: 10, padding: 2, alignSelf: 'flex-start' }} />
                        </View>
                        <Spacer height={heightPercentageToDP('1.5%')} />
                        <Text style={[styles.sub, { left: 5 }]}>{strings.details}</Text>
                        <Spacer height={heightPercentageToDP('1.5%')} />
                        <View style={{ backgroundColor: theme.backgroundColor.white, padding: '8%', width: widthPercentageToDP('90%'), borderColor: theme.borderColor.gray, borderWidth: 1, alignSelf: 'center' }}>
                            <View style={styles.titleRow}>
                                <Text style={styles.unlock}>{strings.subTotal}</Text>
                                <Spacer width={widthPercentageToDP('50%')} />
                                <Text style={styles.unlock}>$254</Text>
                            </View>
                            <Spacer height={heightPercentageToDP('1.5%')} />
                            <View style={styles.titleRow}>
                                <Text style={styles.unlock}>Taxes and charges</Text>
                                <Spacer width={widthPercentageToDP('38%')} />
                                <Text style={styles.unlock}>$26</Text>
                            </View>
                            <Spacer height={heightPercentageToDP('1.5%')} />
                            <View style={styles.titleRow}>
                                <Text style={styles.sub}>{strings.toPay}</Text>
                                <Spacer width={widthPercentageToDP('45%')} />
                                <Text style={styles.sub}>$280</Text>
                            </View>
                        </View>
                    </View>
                }
                {currentStep === 4 &&
                    <View style={styles.view}>
                        <Spacer height={heightPercentageToDP('2%')} />
                        <Text style={[styles.sub, { left: 15 }]}>{strings.selectPayment}</Text>
                        <Spacer height={heightPercentageToDP('2%')} />
                        <Payment />
                        <Spacer height={heightPercentageToDP('4%')} />
                        <Text style={styles.cardTxt}>Card Number</Text>
                        <Spacer height={heightPercentageToDP('1%')} />
                        <TextInput style={styles.cardInput} />
                        <Spacer height={heightPercentageToDP('1%')} />
                        <View style={[styles.titleRow, {justifyContent:'space-between', width:widthPercentageToDP('85%'), left:5}]}>
                            <View style={styles.column}>
                                <Text style={styles.cardTxt}>Valid Till</Text>
                                <Spacer height={heightPercentageToDP('1%')} />
                                <TextInput style={styles.cardInput1} />
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.cardTxt}>Cvv</Text>
                        <Spacer height={heightPercentageToDP('1%')} />
                        <TextInput style={styles.cardInput1} />
                            </View>
                        </View>
                        <Spacer height={heightPercentageToDP('3%')} />
                        <Text style={styles.cardTxt}>Name on Card</Text>
                        <Spacer height={heightPercentageToDP('1%')} />
                        <TextInput style={styles.cardInput} />
                        <Spacer height={heightPercentageToDP('20%')} />
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
                        <View style={currentStep >= 3 ? styles.stepDotActive : styles.stepDot}>
                            {currentStep > 3 && (<Icon name="check" size={15} color={theme.fontColors.white} />)}
                        </View>
                        <Spacer width={widthPercentageToDP('1%')} />
                        <View style={currentStep >= 4 ? styles.stepLineActive : styles.stepLine} />
                        <Spacer width={widthPercentageToDP('1%')} />
                        <View style={currentStep === 4 ? styles.stepDotActive : styles.stepDot}>
                            {currentStep === 4}
                        </View>
                    </View>
                    <Spacer width={widthPercentageToDP('10%')} />
                </View>
 
            <View style={styles.titleContainer}>
                {milestoneTitles.map((milestone, index) => (
                    <View key={index} style={styles.stepTitleContainer}>
                    <Text style={[styles.milestoneTitle, { color: currentStep >= index + 1 ? theme.backgroundColor.blueTheme : theme.fontColors.gray }]}>
                            {milestone.title}
                        </Text>
                    </View>
                ))}
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
                <Text style={styles.heading}>Checkout</Text>
                <Spacer width={widthPercentageToDP('20%')} />
            </View>
        );
    };

    const renderFooter = () => {
        let buttonLabel = '';

        switch (currentStep) {
            case 1:
                buttonLabel = strings.selectAddress;
                break;
            case 2:
                buttonLabel = strings.reviewOrder;
                break;
            case 3:
                buttonLabel = strings.makePayment;
                break;
            case 4:
                buttonLabel = strings.pay;
                break;
            default:
                break;
        }
        return (
            <View style={styles.footerView}>
            <CustomButton primaryButton label={buttonLabel} handlePress={gotoNext} />
        </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={["SPECIALIST_DEATILS"]}
                renderItem={renderBody}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={renderHeader()}
            />
            {renderFooter()}
        </SafeAreaView>
    );
};
export default CheckOut;
