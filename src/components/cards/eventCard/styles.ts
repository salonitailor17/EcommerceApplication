import {StyleSheet} from 'react-native';
import {colors, globalStyles} from '../../../assets';
import {modarateWidth, moderateHeight} from '../../../helpers/responsive';

const useStyles = () => {
  return StyleSheet.create({
    wrapper: {
      backgroundColor: colors.primary,
      padding: modarateWidth(1),
      flexDirection: 'row',
      justifyContent: 'space-between',
      columnGap: modarateWidth(3),
      borderRadius: modarateWidth(2),
      alignItems: 'center',
      ...globalStyles().shadow,
    },
    image: {
      height: moderateHeight(8),
      width: moderateHeight(8),
      borderRadius: modarateWidth(2),
      resizeMode: 'contain',
      ...globalStyles().shadow,
      backgroundColor: colors.primary,
    },
    title: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      columnGap: modarateWidth(2),
    },
    wrap: {
      flex: 1,
    },
    icon: {
      paddingRight: moderateHeight(2),
    },
  });
};

export default useStyles;
