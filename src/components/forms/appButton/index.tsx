import React, {memo} from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';

import AppText from '../appText';
import {colors} from '../../../assets';

import {activeOpacity} from '../../../helpers/helpers';
import {fontSize} from '../../../helpers';
import useStyles from './styles';

interface AppButtonProps {
  label: string;
  onPress?(): void;
  style?: ViewStyle;
}

const AppButton = ({label = '', onPress, style}: AppButtonProps) => {
  const styles = useStyles();

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={onPress}
      style={[styles.wrapper, style]}>
      <AppText label={label} color={colors.primary} size={fontSize.medium} />
    </TouchableOpacity>
  );
};

export default memo(AppButton);
