import {View, TextInput, TextInputProps, ViewStyle} from 'react-native';
import React, {Dispatch, SetStateAction, memo} from 'react';

import AppText from '../appText';
import {colors} from '../../../assets';
import {fontSize} from '../../../helpers';
import useStyles from './styles';

interface AppInputProps extends TextInputProps {
  error?: string;
  title?: string;
  setError?: Dispatch<SetStateAction<any>>;
  setValue: Dispatch<SetStateAction<any>>;
  isNumber?: boolean;
  isRequired?: boolean;
  wrapperStyle?: ViewStyle;
}

const AppInput = ({
  title = '',
  value,
  setValue,
  error = '',
  setError,
  isNumber,
  keyboardType,
  maxLength,
  editable = true,
  isRequired = false,
  placeholder,
  wrapperStyle,
  multiline,
}: AppInputProps) => {
  const styles = useStyles();

  const handleOnchangeText = text => {
    if (isNumber) {
      const regex = /^\s*\d*\s*$/;
      if (regex.test(text)) {
        setValue && setValue(text);
      }
    } else {
      setValue && setValue(text);
    }
    setError && setError('');
  };

  return (
    <View style={wrapperStyle}>
      {title && (
        <View style={styles.title}>
          <AppText
            label={title}
            style={styles.titleLable}
            size={fontSize.text}
          />
          {isRequired && <AppText label="*" color={colors.red} />}
        </View>
      )}
      <View style={[styles.wrapper]}>
        <TextInput
          style={[styles.input, multiline && styles.multilineInput]}
          value={value}
          placeholder={placeholder}
          onChangeText={handleOnchangeText}
          keyboardType={keyboardType}
          maxLength={maxLength}
          editable={editable}
          multiline={multiline}
          textAlignVertical={multiline ? 'top' : 'center'}
        />
      </View>
      {error && (
        <AppText label={error} style={styles.error} color={colors.red} />
      )}
    </View>
  );
};

export default memo(AppInput);
