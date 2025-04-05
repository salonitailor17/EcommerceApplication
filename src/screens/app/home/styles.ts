import {StyleSheet} from 'react-native';
import {modarateWidth, moderateHeight} from '../../../helpers/responsive';

const useStyles = () => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: modarateWidth(5),
      marginVertical: moderateHeight(2),
      flexDirection: 'row',
      columnGap: modarateWidth(3),
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    wrapper: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    flatList: {
      rowGap: moderateHeight(1),
      paddingHorizontal: modarateWidth(5),
      paddingVertical: moderateHeight(2),
    },
    cross: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
};

export default useStyles;
