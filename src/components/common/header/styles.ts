import {StyleSheet} from 'react-native';
import {colors} from '../../../assets';
import {modarateWidth} from '../../../helpers/responsive';

const useStyle = () => {
  return StyleSheet.create({
    wrapper: {
      alignItems: 'center',
      backgroundColor: colors.primary,
      padding: modarateWidth(3),
      justifyContent: 'center',
    },
  });
};

export default useStyle;
