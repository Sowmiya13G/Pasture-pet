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

const HealthArticle = () => {
  const navigation = useNavigation()

  const recommend = [
    { title: strings.healthy, image: commonImagePath.dog },
    { title: strings.essential, image: commonImagePath.dogImg },
    { title: strings.healthy, image: commonImagePath.dogImg },
    { title: strings.essential, image: commonImagePath.pet },
    { title: strings.healthy, image: commonImagePath.dog },
    { title: strings.essential, image: commonImagePath.pet },
  ]
  const healthy = [
    { title: strings.healthy, image: commonImagePath.dogImg },
    { title: strings.essential, image: commonImagePath.pet },
    { title: strings.healthy, image: commonImagePath.dogImg },
    { title: strings.essential, image: commonImagePath.pet },
    { title: strings.healthy, image: commonImagePath.dog },
    { title: strings.essential, image: commonImagePath.pet },
  ]
  const grooming = [
    { title: strings.healthy, image: commonImagePath.dog },
    { title: strings.essential, image: commonImagePath.pet },
    { title: strings.healthy, image: commonImagePath.dogImg },
    { title: strings.essential, image: commonImagePath.pet },
    { title: strings.healthy, image: commonImagePath.dog },
    { title: strings.essential, image: commonImagePath.pet },
  ]

  const gotoNext = (heading) => {
    navigation.navigate('Article', { heading });
  };
  // REnder UI............

  const renderRecommend = () => {
    return (
          <>
        {recommend.map((category, index) => (
          <View
              style={[styles.category, index !== 0 && { marginLeft: widthPercentageToDP('5%') }]}
             >
              <Spacer height={heightPercentageToDP('1%')} />
              <Image source={category.image} style={styles.image} />
              <Spacer height={heightPercentageToDP('2%')} />
              <Text style={styles.name}>{category.title}</Text>
              <Spacer height={heightPercentageToDP('2%')} />
              <Text style={styles.text}>{strings.articleLoream}</Text>
            </View>
        ))}
          </>
    )
  }
  const renderHealthy = () => {
    return (
          <>
        {healthy.map((category, index) => (
          <View
              style={[styles.category, index !== 0 && { marginLeft: widthPercentageToDP('5%') }]}
             >
              <Spacer height={heightPercentageToDP('1%')} />
              <Image source={category.image} style={styles.image} />
              <Text style={styles.name}>{category.title}</Text>
              <Spacer height={heightPercentageToDP('1%')} />
              <Text style={styles.text}>{strings.articleLoream}</Text>
              <Spacer height={heightPercentageToDP('1%')} />
            </View>
        ))}
          </>
    )
  }
  const renderGrooming = () => {
    return (
          <>
        {grooming.map((category, index) => (
          <View
              style={[styles.category, index !== 0 && { marginLeft: widthPercentageToDP('5%') }]}
             >
              <Spacer height={heightPercentageToDP('1%')} />
              <Image source={category.image} style={styles.image} />
              <Spacer height={heightPercentageToDP('1%')} />
              <Text style={styles.name}>{category.title}</Text>
              <Spacer height={heightPercentageToDP('1%')} />
              <Text style={styles.text}>{strings.articleLoream}</Text>
              <Spacer height={heightPercentageToDP('1%')} />
            </View>
        ))}
          </>
    )
  }
  const renderBody = () => {
    return (
      <>
        <Spacer height={heightPercentageToDP('5%')} />
        <Text style={styles.title}>{strings.titleServices}</Text>
        <Spacer height={heightPercentageToDP('3%')} />
        <View style={{ padding: '3%' }}>
          <View style={styles.titleRow}>
            <Text style={styles.sub}>{strings.recommend}</Text>
            <Spacer width={widthPercentageToDP('25%')} />
            <Text
              style={styles.seeAll}
              onPress={() => {
                gotoNext(strings.relatedArticle);
              }}
            >{strings.seeAll}</Text>
          </View>
          <Spacer height={heightPercentageToDP('2%')} />
          <View style={styles.viewTop}>
          <FlatList
            data={["RECOMMEND"]}
            renderItem={renderRecommend}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
          showsHorizontalScrollIndicator={false}
          />
          </View>
        </View>
        <View style={styles.view}>
          <Spacer height={heightPercentageToDP('1%')} />
          <View style={styles.titleRow}>
            <Text style={styles.sub}>{strings.healthArticle}</Text>
            <Spacer width={widthPercentageToDP('30%')} />
            <Text
              style={styles.seeAll}
              onPress={() => {
                gotoNext(strings.healthArticle);
              }}
            >{strings.seeAll}</Text>
          </View>
          <Spacer height={heightPercentageToDP('2%')} />
          <FlatList
            data={["HEALTHY"]}
            renderItem={renderHealthy}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}

          />
          <Spacer height={heightPercentageToDP('3%')} />
          <View style={styles.titleRow}>
            <Text style={styles.sub}>{strings.grooming}</Text>
            <Spacer width={widthPercentageToDP('30%')} />
            <Text
              style={styles.seeAll}
              onPress={() => {
                gotoNext(strings.grooming);
              }}
            >{strings.seeAll}</Text>
          </View>
          <Spacer height={heightPercentageToDP('2%')} />
          <FlatList
            data={["GROOMING"]}
            renderItem={renderGrooming}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </>
    );
  };

  // Render Header
  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <Spacer width={widthPercentageToDP('3%')} />
        <TouchableOpacity onPress={() => goBack()} >
          <Icon name="angle-left" size={25} color={theme.fontColors.black} style={styles.backIcon} />
        </TouchableOpacity>
        <Spacer width={widthPercentageToDP('8%')} />
        <Text style={styles.heading}>{strings.info}</Text>
        <Spacer width={widthPercentageToDP('8%')} />
        <TouchableOpacity onPress={() => goBack()} >
          <Icon name="shopping-cart" size={20} color={theme.fontColors.black} style={styles.backIcon} />
        </TouchableOpacity>
        <Spacer width={widthPercentageToDP('2%')} />
        <TouchableOpacity onPress={() => goBack()} >
          <Icon name="search" size={20} color={theme.fontColors.black} style={styles.backIcon} />
        </TouchableOpacity>
        <Spacer width={widthPercentageToDP('2%')} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={["INFORMATION"]}
        renderItem={renderBody}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={renderHeader()}
      />
    </SafeAreaView>
  );
};
export default HealthArticle
