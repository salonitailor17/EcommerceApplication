import React, {ReactElement, memo} from 'react';
import {View, ViewStyle} from 'react-native';

import AppStatusBar from '../appStatusBar';
import Header from '../header';
import KeyboardAvoider from '../keyboardAwareScrollView';

import useStyles from './styles';
import {colors} from '../../../assets';

interface ContainerProps {
  children?: ReactElement[] | ReactElement;
  containerStyle?: ViewStyle;
  form?: boolean;
  label?: string;
  header?: boolean;
}

const Container = ({
  children,
  containerStyle,
  form = false,
  label,
  header = false,
}: ContainerProps) => {
  const styles = useStyles();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: !header ? colors.primary : ''},
      ]}>
      <AppStatusBar />
      {header && <Header label={label} />}
      {form ? (
        <KeyboardAvoider
          contentContainerStyle={[styles.containerBoard, containerStyle]}>
          {children}
        </KeyboardAvoider>
      ) : (
        <View style={[styles.container, containerStyle]}>{children}</View>
      )}
    </View>
  );
};

export default memo(Container);
