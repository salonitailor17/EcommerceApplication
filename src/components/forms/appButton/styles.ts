import {StyleSheet} from 'react-native';
import {colors} from '../../../assets';
import {modarateWidth, moderateHeight} from '../../../helpers/responsive';

const useStyles = () => {
  return StyleSheet.create({
    wrapper: {
      backgroundColor: colors.green,
      padding: moderateHeight(1),
      borderRadius: modarateWidth(1),
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: moderateHeight(2),
    },
  });
};

export default useStyles;
