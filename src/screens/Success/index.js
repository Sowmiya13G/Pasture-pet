import React from 'react'
import { Text, FlatList,  Image, SafeAreaView, TouchableOpacity, View, Dimensions } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import Spacer from '../../components/Spacer'
import theme from '../../constants/theme'
import { strings } from '../../constants/strings'
import { styles } from './styles'
import commonImagePath from '../../constants/images'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'

export default function Success() {
  const navigation = useNavigation()

  const goBack = () => { }

  const goToNext = () => {
    navigation.navigate('CheckOut')
  }
  const renderBody = () => {
  return(
    <View style={styles.view}>
        <Image source={commonImagePath.success} style={styles.image}/>
        <Text style={styles.text}>{strings.thanks}</Text>
        <Spacer height={heightPercentageToDP('1%')} />
        <Text style={styles.title}>{strings.fetching}</Text>
        <Spacer height={heightPercentageToDP('2%')} />
        <Text style={styles.text2}>{strings.orderNo}</Text>
    </View>
  )
  };


  const renderFooter = () => {
    return (
      <View style={styles.footerView}>
        <CustomButton primaryButton label={strings.viewOrder} handlePress={goToNext} />
      </View>
    )
  }
  // Render Header
  const renderHeader = () => {
    return (
      <>
        <Spacer height={heightPercentageToDP('5%')} />
        <View style={styles.header}>
          <Spacer width={widthPercentageToDP('5%')} />
          <TouchableOpacity onPress={() => goBack()} >
            <Icon name="angle-left" size={25} color={theme.fontColors.black} style={styles.backIcon} />
          </TouchableOpacity>
          <Spacer width={widthPercentageToDP('33%')} />
          <Text style={styles.heading}>Checkout</Text>
          <Spacer width={widthPercentageToDP('25%')} />
        </View>
      </>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={['SUCCESS']}
        renderItem={renderBody}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={renderHeader()}
      />
      {renderFooter()}
    </SafeAreaView>
  )
}
