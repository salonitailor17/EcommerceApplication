import {StyleSheet} from 'react-native';
import {modarateWidth, moderateHeight} from '../../../helpers/responsive';

const useStyles = () => {
  return StyleSheet.create({
    wrapper: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    flatList: {
      rowGap: moderateHeight(1),
      paddingHorizontal: modarateWidth(5),
      paddingTop: moderateHeight(2),
      paddingBottom: moderateHeight(10),
    },
  });
};

export default useStyles;
