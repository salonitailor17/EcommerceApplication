import {StatusBar, StatusBarProps} from 'react-native';
import React, {memo} from 'react';

import {colors} from '../../../assets';

const AppStatusBar = ({barStyle, backgroundColor}: StatusBarProps) => {
  return (
    <StatusBar
      barStyle={barStyle ? barStyle : 'dark-content'}
      backgroundColor={backgroundColor ? backgroundColor : colors.primary}
    />
  );
};

export default memo(AppStatusBar);
