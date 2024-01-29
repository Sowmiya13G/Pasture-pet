
import React, { useState, useRef } from 'react'
import { Text, FlatList, Modal, Image, SafeAreaView, TouchableOpacity, View, Dimensions } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import Spacer from '../../components/Spacer'
import { Background } from '../../components/Background'
import theme from '../../constants/theme'
import { strings } from '../../constants/strings'
import { styles } from './styles'
import commonImagePath from '../../constants/images'
import CustomButton from '../../components/CustomButton/CustomButton'
import ChoicePicker from '../../components/ChoicePicker'
import { useNavigation } from '@react-navigation/native'
export default function ShopScreen() {
  const [currentPage, setCurrentPage] = useState(0);
  const { width } = Dimensions.get('window');
  const flatListRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const options = ['yes', 'no']
  const navigation = useNavigation()
  const banner = [
    { image: commonImagePath.omega },
    { image: commonImagePath.omega },
    { image: commonImagePath.omega },
    { image: commonImagePath.omega },
  ]
  const goBack = () => { }
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const goToNext = () => {
    navigation.navigate('CheckOut')
  }
  const renderBody = () => {
    return (
      <>
        <Spacer height={heightPercentageToDP('3%')} />
        <View style={styles.details}>
          <FlatList
            ref={flatListRef}
            data={banner}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={{ width, alignItems: 'center', height: heightPercentageToDP('20%') }}>
                <Image source={item.image} style={[styles.image]} />
              </View>
            )}
            onMomentumScrollEnd={(event) => {
              const indexOfNextScreen = Math.floor(event.nativeEvent.contentOffset.x / width);
              setCurrentPage(indexOfNextScreen);
            }}
          />

          {currentPage < banner.length && (
            <View style={[styles.pagination]}>
              {banner.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.paginationDot,
                    index === currentPage ? styles.paginationDotActive : null,
                  ]}
                />
              ))}
            </View>
          )}
        </View>
        <Spacer height={heightPercentageToDP('3%')} />
        <View style={styles.row}>
          <Text style={styles.minus}>-</Text>
          <Text style={styles.count}>1</Text>
          <Text style={styles.plus}>+</Text>
        </View>
        <Spacer height={heightPercentageToDP('3%')} />
        <View style={{ padding: '8%' }}>
          <View style={[styles.titleRow, { alignItems: 'center' }]}>
            <Text style={styles.sub}>{strings.omega}</Text>
            <Spacer width={widthPercentageToDP('25%')} />
            <Icon name='heart-o' size={20} color={theme.fontColors.gray} />
          </View>
          <Spacer height={heightPercentageToDP('1%')} />
          <Text style={styles.detail}>{strings.tabletLorem}</Text>
          <Spacer height={heightPercentageToDP('2%')} />
          <View style={styles.viewCard}>
            <Text style={styles.detail}>250gms</Text>
            <Spacer width={widthPercentageToDP('36%')} />
            <Text style={styles.text}>$30</Text>
            <Spacer width={widthPercentageToDP('2%')} />
            <Text style={styles.text2}>$30</Text>
            <Spacer width={widthPercentageToDP('5%')} />
            <Icon name='check' size={15} color={theme.fontColors.black} style={{ backgroundColor: theme.backgroundColor.secondaryOrange, borderRadius: 10, padding: 2 }} />
          </View>
          <Spacer height={heightPercentageToDP('1%')} />
          <View style={styles.viewCard2}>
            <Text style={styles.detail}>250gms</Text>
            <Spacer width={widthPercentageToDP('36%')} />
            <Text style={styles.text}>$30</Text>
            <Spacer width={widthPercentageToDP('2%')} />
            <Text style={styles.text2}>$30</Text>
            <Spacer width={widthPercentageToDP('5%')} />
            <Icon name='check' size={15} color={theme.fontColors.black} style={{ backgroundColor: theme.backgroundColor.secondaryOrange, borderRadius: 10, padding: 2 }} />
          </View>
        </View>
      </>
    );
  };


  const renderFooter = () => {
    return (
      <View style={styles.footerView}>
        <CustomButton primaryButton label={strings.addToCart} handlePress={goToNext} />
      </View>
    )
  }
  // Render Header
  const renderHeader = () => {
    return (
      <>
        <Spacer height={heightPercentageToDP('3%')} />
        <View style={styles.header}>
          <Spacer width={widthPercentageToDP('5%')} />
          <TouchableOpacity onPress={() => goBack()} >
            <Icon name="angle-left" size={25} color={theme.fontColors.black} style={styles.backIcon} />
          </TouchableOpacity>
          <Spacer width={widthPercentageToDP('33%')} />
          <Image source={commonImagePath.fur} style={styles.fur} />
          <Spacer width={widthPercentageToDP('25%')} />
          <Icon name="shopping-cart" size={20} color={theme.fontColors.black} style={styles.backIcon} />
          <Spacer width={widthPercentageToDP('5%')} />
          <Icon name="search" size={20} color={theme.fontColors.black} style={styles.backIcon} />
        </View>
      </>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Background backgroundImageStyle={styles.background} />
      <FlatList
        data={['SHOP']}
        renderItem={renderBody}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={renderHeader()}
      />
      {renderFooter()}
    </SafeAreaView>
  )
}
