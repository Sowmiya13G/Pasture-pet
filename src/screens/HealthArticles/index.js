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

  const categories = [
    { title: 'Veterinarian', image: commonImagePath.vetDoc },
    { title: 'Groomers', image: commonImagePath.groomers },
    { title: 'Pet Sitters', image: commonImagePath.petSitters },
    { title: 'Pet Lodges', image: commonImagePath.petLodges },
    { title: 'Veterinarian', image: commonImagePath.veterinairian },
    { title: 'Groomers', image: commonImagePath.groomers },
    { title: 'Pet Sitters', image: commonImagePath.petSitters },
    { title: 'Pet Lodges', image: commonImagePath.petLodges },
  ]
  
  const gotoNext = () => {
    navigation.navigate('VeterinairianScreen')
  };
  // REnder UI............

  const renderCategory = () => {
    return (
      <View style={styles.categories}>
        {categories.map((category, index) => (
          <>
            <TouchableOpacity
              key={index}
              onPress={() => {
                gotoNext()
              }}
              style={styles.category}>
              <Spacer height={heightPercentageToDP('1%')} />
              <Image source={category.image} style={styles.image} />
              <Spacer height={heightPercentageToDP('2%')} />
              <Text style={styles.name}>{category.title}</Text>
              <Spacer height={heightPercentageToDP('2%')} />
              <Text style={styles.text}>{strings.categoryServices}</Text>
              <Spacer height={heightPercentageToDP('2%')} />
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
        <Text style={styles.title}>{strings.titleServices}</Text>
        {/* <Spacer height={heightPercentageToDP('2%')} /> */}
        <View style={styles.view}>
          <Spacer height={heightPercentageToDP('1%')} />
          <Text style={styles.sub}>Categories</Text>
          <Spacer height={heightPercentageToDP('2%')} />

          <FlatList
            data={["CATEGORIES"]}
            renderItem={renderCategory}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
          />
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
        <Spacer width={widthPercentageToDP('10%')} />
        <Text style={styles.heading}>{strings.services}</Text>
        <Spacer width={widthPercentageToDP('10%')} />
        <TouchableOpacity onPress={() => goBack()} >
          <Icon name="shopping-cart" size={20} color={theme.fontColors.black} style={styles.backIcon} />
        </TouchableOpacity>
        <Spacer width={widthPercentageToDP('2%')} />
        <TouchableOpacity onPress={() => goBack()} >
          <Icon name="search" size={20} color={theme.fontColors.black} style={styles.backIcon} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={["HOME"]}
        renderItem={renderBody}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={renderHeader()}
      />
    </SafeAreaView>
  );
};
export default HealthArticle
