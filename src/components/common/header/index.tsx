import React, {memo} from 'react';
import {View} from 'react-native';

import AppText from '../../forms/appText';

import {fontSize} from '../../../helpers';
import useStyle from './styles';

interface HeaderProps {
  label?: string;
}

const Header = ({label = ''}: HeaderProps) => {
  const styles = useStyle();

  return (
    <View style={styles.wrapper}>
      <View>
        <AppText label={label} size={fontSize.name} />
      </View>
    </View>
  );
};

export default memo(Header);
