import React, {memo} from 'react';
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view';

interface KeyboardAvoiderProps extends KeyboardAwareScrollViewProps {}

const KeyboardAvoider = ({
  children,
  bounces = true,
  contentContainerStyle = {},
}: KeyboardAvoiderProps) => {
  return (
    <KeyboardAwareScrollView
      bounces={bounces}
      enableOnAndroid
      contentContainerStyle={contentContainerStyle}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}>
      {children}
    </KeyboardAwareScrollView>
  );
};

export default KeyboardAvoider;
