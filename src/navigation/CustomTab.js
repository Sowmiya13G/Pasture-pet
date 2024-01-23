import React, { useEffect, useRef } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Animated,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';
import theme from '../constants/theme';

const {width} = Dimensions.get('window');
const TAB_BAR_WIDTH = width / 4;
const ANIMATED_PART_HEIGHT = 6;

const CustomTab = ({ state, descriptors, navigation }) => {
  const animationHorizontalValue = useRef(new Animated.Value(0)).current;
  const animate = index => {
    Animated.spring(animationHorizontalValue, {
      toValue: index * (width / 4),
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animate(state.index);
  }, [state.index]);

  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Animated.View style={styles.animatedContainer}>
        <Animated.View
          style={[
            styles.animatedView,
            {
              width: width / 4,
              transform: [{ translateX: animationHorizontalValue }],
            },
          ]}
        />
      </Animated.View>
      <View style={{ flexDirection: 'row' }}>
        {state.routes.map((route, index) => {
          return (
            <TouchableWithoutFeedback
              accessibilityRole="button"
              accessibilityState={state.index === index ? { selected: true } : {}}
              onPress={() => navigation.navigate(route.name)}
              key={`${index}--${route.key}`}>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopColor: 'grey',
    borderTopWidth: 0.5,
    backgroundColor: theme.backgroundColor.white,
    height: 50,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    marginTop: 5,
  },
  animatedView: {
    width: TAB_BAR_WIDTH,
    height: ANIMATED_PART_HEIGHT,
    backgroundColor: theme.backgroundColor.orange,
  },
  animatedContainer: {
    width: TAB_BAR_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabTextActive: {
    color: theme.fontColors.white,
  },
  tabTextInactive: {
    color: '#999999',
  },
});

export default CustomTab;
