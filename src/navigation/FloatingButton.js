import React from 'react';
import { TouchableOpacity, StyleSheet ,Image} from 'react-native';
import theme from '../constants/theme';
import commonImagePath from '../constants/images';

const FloatingButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
      <Image source={commonImagePath.paw} style={styles.button}/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 25,
    right: 20,
    transform: [{ translateX: -130 }], 
    backgroundColor: theme.backgroundColor.white,
    elevation:0.5,
    borderRadius: 33,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex:1
  },
  button:{
    height: 40,
    width: 40,
    resizeMode: 'cover',
    right:2
  }
});

export default FloatingButton;
