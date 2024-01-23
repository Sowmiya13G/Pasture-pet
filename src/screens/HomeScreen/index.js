import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  Modal
} from 'react-native';

// Packages
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

// Component
import ModalContent from '../../components/Modal';
import Spacer from '../../components/Spacer';
// Constants
import theme from '../../constants/theme';
import { strings } from '../../constants/strings';
import commonImagePath from '../../constants/images';

// Styles
import { styles } from './styles';

const Home = () => {
  const navigation = useNavigation()
  const [isModalVisible, setModalVisible] = useState(false);

  const mostTracked = [
    { title: 'Weight', image: commonImagePath.weight, background: '#E2F5CB' },
    { title: 'Paws', image: commonImagePath.paw, background: '#FFF0BD' },
    { title: 'Eyes', image: commonImagePath.eyeImg, background: '#D1DCFE' },
  ]
  const categories = [
    { title: 'Weight', image: commonImagePath.weight, background: '#E2F5CB' },
    { title: 'Paws', image: commonImagePath.paw, background: '#FFF0BD' },
    { title: 'Eyes', image: commonImagePath.eyeImg, background: '#D1DCFE' },
    { title: 'Skin& Coat', image: commonImagePath.vector, background: '#CDF5FE' },
    { title: 'Vaccination', image: commonImagePath.vaccine, background: '#CCFFBF' },
    { title: 'Digestion', image: commonImagePath.digestion, background: '#EBEBEB' },
    { title: 'Grooming', image: commonImagePath.grooming, background: '#FFCDCD' },
    { title: 'Others', image: commonImagePath.other, background: '#FFF0BD' },
  ]
  const toggleModal = () => {
    console.log('closing')
    setModalVisible(!isModalVisible);

  };
  // REnder UI............
  const renderBody = () => {
    return (
      <>
        <Spacer height={heightPercentageToDP('5%')} />
        <Text style={styles.sub}>Most Tracked</Text>
        <Spacer height={heightPercentageToDP('2%')} />
        <View style={styles.mostTracked}>
          {mostTracked.map((image, index) => (

            <View style={{ flexDirection: 'column', }}>
              <View key={index} style={{ backgroundColor: image.background, ...styles.imageContainer }}>
                <Image source={image.image} style={styles.image} />
              </View>
              <Text style={styles.name}>{image.title}</Text>
              <Spacer height={heightPercentageToDP('2%')} />
            </View>
          ))}
        </View>
        <View style={styles.view}>
          <Spacer height={heightPercentageToDP('2%')} />
          <Text style={styles.sub}>Categories</Text>
          <Spacer height={heightPercentageToDP('2%')} />
          <View style={styles.categories}>
            {categories.map((image, index) => (
              <>
              <TouchableOpacity
                key={index}
                onPress={() => {
                  if (image.title === 'Vaccination') {
                    toggleModal();
                  }
                }}
                style={{ flexDirection: 'column' }}>
                <View key={index} style={{ backgroundColor: image.background, ...styles.imageContainer }}>
                  <Image source={image.image} style={styles.image} />
                </View>
                <Text style={styles.name}>{image.title}</Text>
                <Spacer height={heightPercentageToDP('2%')} />

              </TouchableOpacity>
                <Spacer width={widthPercentageToDP('4%')} />
              </>
            ))}
          </View>
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
        <Text style={styles.heading}>{strings.healthTracker}</Text>
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
        data={["HOME"]}
        renderItem={renderBody}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={renderHeader()}
      />
      {isModalVisible&&
       <Modal
        isVisible={isModalVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropOpacity={0.5}
        onBackdropPress={() => setModalVisible(false)}
        onSwipeComplete={toggleModal} 
        swipeDirection='down'
        style={{ margin: 0 }}
      >
        <ModalContent closeModal={toggleModal} />
      </Modal>
      }
    </SafeAreaView>
  );
};
export default Home