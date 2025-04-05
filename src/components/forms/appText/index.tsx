import {Text, TextProps, TextStyle} from 'react-native';
import React, {memo} from 'react';

import {colors} from '../../../assets';
import {fontSize} from '../../../helpers';

import useStyles from './styles';

interface AppTextProps extends TextProps {
  label: string | number;
  color?: string;
  style?: TextStyle;
  size?: number;
  fontWeight?: any;
  centere?: boolean;
}

const AppText = ({
  label,
  color,
  style,
  size,
  fontWeight,
  centere,
  numberOfLines,
}: AppTextProps) => {
  const styles = useStyles();

  return (
    <Text
      numberOfLines={numberOfLines ? numberOfLines : 1}
      style={[
        styles.label,
        style,
        {
          color: color ? color : colors.black,
          fontSize: size ? size : fontSize.regular,
          fontWeight: fontWeight ? fontWeight : '400',
          // textAlign: centere ? 'center' : 'auto',
        },
      ]}>
      {label}
    </Text>
  );
};

export default memo(AppText);
