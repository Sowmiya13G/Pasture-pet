import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import theme from '../../constants/theme';
import Spacer from '../Spacer';
const ChoicePicker = ({onOptionPress, options, showIcon = true}) => {

  const [selectedOption, setSelectedOption] = useState(null);


  const handleOptionPressInternal = option => {
    setSelectedOption(option);
    onOptionPress && onOptionPress(option);
  };

  const renderOption = (option, label) => (
    <TouchableOpacity onPress={() => handleOptionPressInternal(option)}>
      <View
        style={{
          backgroundColor:
            selectedOption === option
              ? theme.backgroundColor.blueChoice
              : theme.backgroundColor.transparent,
          borderWidth: 2,
          borderColor:
            selectedOption === option
              ? theme.borderColor.blueChoice
              : theme.borderColor.gray,
          borderRadius: 5,
          padding: 8,
          margin: 8,
          alignItems: 'center',
          width: widthPercentageToDP('42%'),
          flexDirection: 'row'
        }}>
        {showIcon &&
          <Icon
          name={option === 'male' ? 'mars' : option === 'female' ? 'venus' : 'transgender'}
          size={18}
          color={
            selectedOption === option
              ? theme.fontColors.white
              : theme.fontColors.inkLight
          }
        />
        }
        <Spacer width={widthPercentageToDP('1%')}/>
        <Text
          style={{
            color:
              selectedOption === option
                ? theme.fontColors.white
                : theme.fontColors.inkLight,
            fontWeight: 'bold',
            fontSize: theme.fontSizes.mediumFont
          }}>
          {option}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        flex: 1,
        flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection: 'row',
        width: widthPercentageToDP('100%'),
      }}>
      {options.map(option => renderOption(option))}
    </View>
  );
};

export default ChoicePicker;