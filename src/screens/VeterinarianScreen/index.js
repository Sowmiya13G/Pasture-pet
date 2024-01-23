import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  FlatList,
  Animated
} from 'react-native';

// Packages
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

// Component
import Spacer from '../../components/Spacer';
import Card from '../../components/Card';
import ModalFilter from '../../components/Modal/ModalFilter';
// Constants
import theme from '../../constants/theme';
import { strings } from '../../constants/strings';

// Styles
import { styles } from './styles';
import { Background } from '../../components/Background';

const VeterinairianScreen = () => {
  const navigation = useNavigation()
  const cardArray = Array.from({ length: 15 });
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);

  const toggleFilterModal = () => {
  };
  const gotoNext = () => {
    navigation.navigate('BookConsultation')
  };
  // REnder UI............

  const renderCard = () => {
    return (
      <>
        <Card handleNext={gotoNext} />
      </>

    )
  }
  const renderBody = () => {
    return (
      <>
        <Spacer height={heightPercentageToDP('5%')} />
        <Text style={styles.title}>{strings.titleVet}</Text>
        <Spacer height={heightPercentageToDP('1%')} />
    <Background backgroundImageStyle={styles.background} />
        <View style={styles.view}>
          <View style={styles.titleRow}>
            <Text style={styles.text}>{strings.availDocs}</Text>
            <Spacer width={widthPercentageToDP('25%')} />
            <TouchableOpacity onPress={toggleFilterModal}>
              <Icon name='filter' color={theme.fontColors.black} size={15} />
            </TouchableOpacity>
          </View>
          <Spacer height={heightPercentageToDP('3%')} />
          <FlatList
            data={cardArray}
            renderItem={renderCard}
            keyExtractor={(item, index) => index.toString()}
          />
          {isFilterModalVisible &&
            <Modal
              visible={isFilterModalVisible}
              transparent
              animationType="slide"
              onRequestClose={toggleFilterModal}
            >
              <ModalFilter onClose={toggleFilterModal} />
            </Modal>

          }
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
        <Text style={styles.heading}>{strings.selectVet}</Text>
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
        data={["INFORMATION"]}
        renderItem={renderBody}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={renderHeader()}
      />
    </SafeAreaView>
  );
};
export default VeterinairianScreen
