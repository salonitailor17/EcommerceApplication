import React, {memo} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import useStyles from './styles';
import Icon from '../../../assets/icons';
import {colors} from '../../../assets';

import {activeOpacity} from '../../../helpers/helpers';
import {moderateHeight} from '../../../helpers/responsive';

interface AppBottomTabProps extends BottomTabBarProps {}

const AppBottomTab = ({state, navigation}: AppBottomTabProps) => {
  const styles = useStyles();

  return (
    <>
      <View style={{backgroundColor: colors.primary}}>
        <View style={styles.container}>
          {state?.routes?.map((route, index) => {
            const isFocused = state.index === index;
            const fillStroke = isFocused ? colors.green : colors.primary;
            const fillStrokeColor = isFocused ? colors.green : colors.black;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route?.name, route?.params);
              }
            };

            const TabIcon = () =>
              index === 0 ? (
                <Icon.ShoppingIcon
                  height={moderateHeight(3.5)}
                  width={moderateHeight(3.5)}
                  fill={fillStrokeColor}
                />
              ) : (
                <Icon.LikeIcon fill={fillStroke} />
              );
            return (
              <TouchableOpacity
                activeOpacity={activeOpacity}
                onPress={onPress}
                key={index}>
                <TabIcon />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </>
  );
};

export default memo(AppBottomTab);
