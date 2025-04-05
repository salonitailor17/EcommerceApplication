import {
  View,
  TextInput,
  TextInputProps,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import React, {
  Dispatch,
  SetStateAction,
  memo,
  useCallback,
  useMemo,
  useState,
} from 'react';

import AppText from '../appText';
import {colors, Icon} from '../../../assets';
import {fontSize} from '../../../helpers';
import useStyles from './styles';
import {activeOpacity} from '../../../helpers/helpers';
import {modarateWidth} from '../../../helpers/responsive';

interface AppInputProps extends TextInputProps {
  error?: string;
  title?: string;
  setError?: Dispatch<SetStateAction<any>>;
  setValue: Dispatch<SetStateAction<any>>;
  isNumber?: boolean;
  isRequired?: boolean;
  wrapperStyle?: ViewStyle;
  password?: boolean;
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
  password = false,
}: AppInputProps) => {
  const styles = useStyles();
  const [secureTextEntry, setSecureTextEntry] = useState(password);

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

  const PasswordIcon = useMemo(() => {
    return secureTextEntry ? Icon.EyeCloseSVG : Icon.EyeOpenSVG;
  }, [secureTextEntry]);

  const handleEyeIcon = useCallback((): void => {
    setSecureTextEntry(!secureTextEntry);
  }, [secureTextEntry]);

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
          style={[styles.input]}
          value={value}
          placeholder={placeholder}
          onChangeText={handleOnchangeText}
          keyboardType={keyboardType}
          maxLength={maxLength}
          editable={editable}
          secureTextEntry={secureTextEntry}
        />
        {password && (
          <TouchableOpacity
            activeOpacity={activeOpacity}
            onPress={handleEyeIcon}
            style={styles.closeEye}>
            <PasswordIcon height={modarateWidth(5)} width={modarateWidth(5)} />
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <AppText label={error} style={styles.error} color={colors.red} />
      )}
    </View>
  );
};

export default memo(AppInput);
