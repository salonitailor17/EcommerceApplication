import {StyleSheet} from 'react-native';
import {modarateWidth, moderateHeight} from '../../../helpers/responsive';
import {fontSize} from '../../../helpers';
import {colors} from '../../../assets';

const useStyles = () => {
  return StyleSheet.create({
    wrapper: {
      height: moderateHeight(5),
      paddingHorizontal: modarateWidth(4),
      borderRadius: modarateWidth(1),
      backgroundColor: colors.primary,
      flex: 1,
    },
    input: {
      flex: 1,
      paddingVertical: moderateHeight(1),
      height: moderateHeight(5),
      fontSize: fontSize.text,
    },
  });
};

export default useStyles;
