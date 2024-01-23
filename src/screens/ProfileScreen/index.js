import React, { useState } from 'react';
import {
    StatusBar,
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';

// Packages
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Spacer from '../../components/Spacer';
import { BarChart, PieChart } from 'react-native-chart-kit';
// Constants
import theme from '../../constants/theme';
import { strings } from '../../constants/strings';
// Styles
import { styles } from './styles';

const Profile = () => {
    const navigation = useNavigation()
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Sep'],
        datasets: [
            {
                data: [40, 45, 39, 37, 35, 35, 35,],
            },
        ],
    };
    const dataMonth = [
        {
            month: 'Jan',
            notVomiting: 21 - 4,
            vomiting: 9,
        },
        {
            month: 'Feb',
            notVomiting: 23 - 11,
            vomiting: 6,
        },
    ];
    const goToView = () => {
        navigation.navigate('ViewScreen')
    }

    // REnder UI............
    const renderBody = () => {
        return (
            <>
                <Spacer height={heightPercentageToDP('2%')} />
                <View style={styles.date}>
                    <Text style={styles.text}>Date Picker</Text>
                    <Spacer width={widthPercentageToDP('2%')} />
                    <Icon name="calendar" size={15} color={theme.fontColors.black} />
                </View>
                <View style={styles.bar}>
                    <BarChart
                        data={data}
                        width={350}
                        height={220}
                        yAxisSuffix="kg"
                        chartConfig={{
                            backgroundColor: theme.backgroundColor.white,
                            backgroundGradientFrom: theme.backgroundColor.white,
                            backgroundGradientTo: theme.backgroundColor.white,
                            decimalPlaces: 0,
                            color: (opacity = 1) => `rgba(255, 140, 109, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            style: {
                                borderRadius: 16,
                            }
                        }}
                        style={styles.chart}
                    />
                

                </View>
                <View style={styles.view}>
                    <Spacer height={heightPercentageToDP('3%')} />
                    <View style={{ flexDirection: 'row', width: widthPercentageToDP('93%'), padding: 2, justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.buttonText}>Highest</Text>
                            <Spacer height={heightPercentageToDP('2%')} />
                            <View style={{ backgroundColor: '#CEDCFC', padding: '3%', alignItems: 'center', justifyContent: 'center', width: widthPercentageToDP('37%'), height: heightPercentageToDP('10%'), borderRadius: 15 }}>
                                <Text style={styles.buttonText}>FEB</Text>
                                <Spacer height={heightPercentageToDP('1%')} />
                                <View style={{ flexDirection: 'row', backgroundColor: 'black', padding: '2%', borderRadius: 10, width: '100%', justifyContent: 'center' }}>
                                    <Icon name='arrow-up' color={theme.fontColors.white} size={15} />
                                    <Spacer width={widthPercentageToDP('2%')} />
                                    <Text style={{ color: 'white', fontSize: 10, textAlign: 'center' }}>20 % Higher on avg </Text>
                                </View>
                            </View>
                        </View>
                        <Spacer width={widthPercentageToDP('8%')} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.buttonText}>Lowest</Text>
                            <Spacer height={heightPercentageToDP('2%')} />
                            <View style={{ backgroundColor: '#CEDCFC', padding: '3%', alignItems: 'center', justifyContent: 'center', width: widthPercentageToDP('37%'), height: heightPercentageToDP('10%'), borderRadius: 15 }}>
                                <Text style={styles.buttonText}>FEB</Text>
                                <Spacer height={heightPercentageToDP('1%')} />
                                <View style={{ flexDirection: 'row', backgroundColor: 'black', padding: '2%', borderRadius: 10, width: '100%', justifyContent: 'center' }}>
                                    <Icon name='arrow-up' color={theme.fontColors.white} size={15} />
                                    <Spacer width={widthPercentageToDP('2%')} />
                                    <Text style={{ color: 'white', fontSize: 10, textAlign: 'center' }}>20 % Higher on avg </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Spacer height={heightPercentageToDP('3%')} />
                    <View style={{ alignItems: 'flex-start', marginLeft: 0, marginRight: '55%' }}>
                        <Text style={{ color: 'black', }}>Symptoms Analytics -</Text>
                        <Text style={styles.buttonText}>Vomiting</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: widthPercentageToDP('80%') }}>
                        {dataMonth.map((item, index) => (
                            <View key={index}>
                                <PieChart
                                    data={[
                                        {
                                            name: 'No Vomiting',
                                            population: item.notVomiting,
                                            color: '#FFEDD5',
                                            legendFontColor: 'transparent',
                                        },
                                        {
                                            name: 'Vomiting',
                                            population: item.vomiting,
                                            color: '#FF8C6D',
                                            legendFontColor: 'transparent',
                                        },
                                    ]}
                                    width={120}
                                    height={120}
                                    chartConfig={{
                                        backgroundGradientFrom: theme.backgroundColor.white,
                                        backgroundGradientTo: theme.backgroundColor.white,
                                        decimalPlaces: 0,
                                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                        labelColor: (opacity = 0),
                                        style: {
                                            borderRadius: 16,
                                            backgroundColor: theme.fontColors.black,
                                        },
                                    }}
                                    accessor="population"
                                    backgroundColor="transparent"
                                    paddingLeft="20"
                                    absolute
                                    style={styles.piechart}
                                    hasLegend={false}
                                />
                                <Text style={{ color: theme.fontColors.black, textAlign: 'center', fontWeight: 'bold' }}>{item.month}</Text>
                            </View>
                        ))}
                        <Text style={{ color: theme.fontColors.black, position: 'absolute', top: '28%', left: '10%', fontSize: theme.fontSizes.smallFont }}>21 days</Text>
                        <Text style={{ color: theme.fontColors.black, position: 'absolute', top: '55%', left: '23%', fontSize: theme.fontSizes.smallFont, fontWeight: 'bold' }}>8 days</Text>
                        <Text style={{ color: theme.fontColors.black, position: 'absolute', top: '28%', left: '70%', fontSize: theme.fontSizes.smallFont }}>23 days</Text>
                        <Text style={{ color: theme.fontColors.black, position: 'absolute', top: '55%', left: '83%', fontSize: theme.fontSizes.smallFont, fontWeight: 'bold' }}>6 days</Text>

                    </View>
                    <Spacer height={heightPercentageToDP('2%')} />
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, alignSelf: 'flex-end', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: theme.fontColors.black }}>No Symptom</Text>
                        <Spacer width={widthPercentageToDP('6%')} />
                        <View style={{ backgroundColor: '#FF8C6D', height: 15, width: 40 }} />
                        <Spacer width={widthPercentageToDP('5%')} />
                        <Text style={{ color: theme.fontColors.black }}>Symptom</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, alignSelf: 'flex-start' }}>
                        <Text style={{ color: theme.fontColors.textBlue, textDecorationLine: 'underline' }}>View Images</Text>
                        <Spacer width={widthPercentageToDP('5%')} />
                        <TouchableOpacity onPress={goToView}>
                            <Text style={{ color: theme.fontColors.textBlue, textDecorationLine: 'underline' }}>View Notes</Text>
                        </TouchableOpacity>
                    </View>
                    <Spacer height={heightPercentageToDP('8%')} />
                </View>
            </>

        );
    };

    // Render Header
    const renderHeader = () => {
        return (
            <View style={styles.header}>
                <Spacer width={widthPercentageToDP('8%')} />
                <TouchableOpacity onPress={() => goBack()} >
                    <Icon name="angle-left" size={25} color={theme.fontColors.black} style={styles.backIcon} />
                </TouchableOpacity>
                <Spacer width={widthPercentageToDP('2%')} />
                <Text style={styles.heading}>{strings.healthDashborad}</Text>
                <Spacer width={widthPercentageToDP('15%')} />
                <TouchableOpacity onPress={() => goBack()} >
                    <Icon name="search" size={20} color={theme.fontColors.black} style={styles.backIcon} />
                </TouchableOpacity>
                <Spacer height={heightPercentageToDP('8%')} />
                <Text style={styles.title}>{strings.weight}</Text>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={["PROFILE"]}
                renderItem={renderBody}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={renderHeader()}
            />
        </SafeAreaView>
    );
};
export default Profile