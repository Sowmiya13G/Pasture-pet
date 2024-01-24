import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

// Packages
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

// Component
import Spacer from '../../components/Spacer';
// Constants
import theme from '../../constants/theme';
import { strings } from '../../constants/strings';
import commonImagePath from '../../constants/images';

// Styles
import { styles } from './styles';

const ArticleView = ({ route }) => {
  const { title } = route.params;
  console.log(title)
  const navigation = useNavigation()

  const healthy = [
    { title: strings.healthy, image: commonImagePath.dogImg },
    { title: strings.essential, image: commonImagePath.pet },
    { title: strings.healthy, image: commonImagePath.dog },
    { title: strings.essential, image: commonImagePath.pet },
    { title: strings.healthy, image: commonImagePath.dog },
    { title: strings.essential, image: commonImagePath.dogImg },
  ]

  const gotoNext = () => {
    navigation.navigate('VeterinairianScreen')
  };
  // REnder UI............


  const renderHealthy = () => {
    return (

      <View style={styles.categories}>
        {healthy.map((category, index) => (
          <>
            <TouchableOpacity
              key={index}
              onPress={() => {
                gotoNext()
              }}
              style={[styles.category, index !== 0 && { marginLeft: widthPercentageToDP('5%') }]}
              >
              <Spacer height={heightPercentageToDP('1%')} />
              <Image source={category.image} style={styles.image} />
              <Spacer height={heightPercentageToDP('1%')} />
              <Text style={styles.name}>{category.title}</Text>
              <Spacer height={heightPercentageToDP('1%')} />
              <Text style={styles.text}>{strings.articleLoream}</Text>
              <Spacer height={heightPercentageToDP('1%')} />
            </TouchableOpacity>
          </>
        ))}
      </View>
    )
  }
  const renderBody = () => {
    return (
      <>
        <Spacer height={heightPercentageToDP('5%')} />
        <Text style={styles.mostTracked}>{strings.healthy}</Text>
        <Spacer height={heightPercentageToDP('2%')} />
        <Image source={commonImagePath.dogVec} style={{alignSelf:'center', resizeMode:'contain', height:heightPercentageToDP('33%'), width:widthPercentageToDP('99%')}}/>
        <View style={styles.view}>
          <Spacer height={heightPercentageToDP('2%')} />
          <Text style={styles.title}>{strings.loreamArticle}</Text>
          <Spacer height={heightPercentageToDP('2%')} />
          <Text style={styles.title}>{strings.loreamArticle}</Text>
          <Spacer height={heightPercentageToDP('2%')} />
          <Text style={styles.title}>{strings.loreamArticle}</Text>
          <Spacer height={heightPercentageToDP('5%')} />
          <View style={styles.titleRow}>
            <Text style={styles.sub}>{strings.relatedArticle}</Text>
            <Spacer width={widthPercentageToDP('33%')} />
            <Text
              style={styles.seeAll}
              // onPress={() => {
              //   gotoNext(strings.relatedArticle);
              // }}
            >{strings.seeAll}</Text>
          </View>
          <View style={styles.list}>
          <FlatList
            data={["HEALTHY"]}
            renderItem={renderHealthy}
            keyExtractor={(item, index) => index.toString()}
           horizontal={true}
           showsHorizontalScrollIndicator={false}
          />
          </View>
        </View>
      </>
    );
  };

  // Render Header
  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <Spacer width={widthPercentageToDP('5%')} />
        <TouchableOpacity onPress={() => goBack()} >
          <Icon name="angle-left" size={25} color={theme.fontColors.black} style={styles.backIcon} />
        </TouchableOpacity>
        <Spacer width={widthPercentageToDP('10%')} />
        <Text style={styles.heading}>{strings.healthArticle}</Text>
        <Spacer width={widthPercentageToDP('10%')} />
        <TouchableOpacity onPress={() => goBack()} >
          <Icon name="shopping-cart" size={20} color={theme.fontColors.black} style={styles.backIcon} />
        </TouchableOpacity>
        <Spacer width={widthPercentageToDP('5%')} />
        <TouchableOpacity onPress={() => goBack()} >
          <Icon name="search" size={20} color={theme.fontColors.black} style={styles.backIcon} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={["ARTICLEViewS"]}
        renderItem={renderBody}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={renderHeader()}
      />
    </SafeAreaView>
  );
};
export default ArticleView
