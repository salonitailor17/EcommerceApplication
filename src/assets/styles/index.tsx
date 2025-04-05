import {StyleSheet} from 'react-native';
import {moderateHeight} from '../../helpers/responsive';
import colors from '../theme/colors';

const globalStyles = () => {
  return StyleSheet.create({
    shadow: {
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: moderateHeight(0.6),
      },
      shadowOpacity: 0.1,
      shadowRadius: moderateHeight(0.5),
      elevation: moderateHeight(0.7),
    },
  });
};

export default globalStyles;
