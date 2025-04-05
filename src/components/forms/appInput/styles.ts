import {StyleSheet} from 'react-native';
import {modarateWidth, moderateHeight} from '../../../helpers/responsive';
import {colors, globalStyles} from '../../../assets';

const useStyles = () => {
  return StyleSheet.create({
    wrapper: {
      marginTop: moderateHeight(1),
      borderRadius: modarateWidth(1),
      backgroundColor: colors.primary,
      flexDirection: 'row',
      justifyContent: 'space-between',
      ...globalStyles().shadow,
    },
    input: {
      borderRadius: modarateWidth(3),
      paddingHorizontal: modarateWidth(4),
      paddingVertical: modarateWidth(1.5),
    },
    title: {
      flexDirection: 'row',
      columnGap: modarateWidth(1),
      marginTop: moderateHeight(2),
    },
    titleLable: {
      textTransform: 'capitalize',
    },
    error: {
      alignSelf: 'flex-end',
      marginTop: moderateHeight(0.5),
      textTransform: 'capitalize',
    },
    closeEye: {
      justifyContent: 'center',
      paddingHorizontal: modarateWidth(2),
    },
    multilineInput: {
      height: moderateHeight(10),
    },
  });
};

export default useStyles;
