import {StyleSheet} from 'react-native';

import {modarateWidth, moderateHeight} from '../../../helpers/responsive';
import {colors} from '../../../assets';

const useStyles = () => {
  return StyleSheet.create({
    container: {
      height: moderateHeight(8),
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: modarateWidth(90),
      alignSelf: 'center',
      marginBottom: moderateHeight(2),
      borderRadius: modarateWidth(10),
    },
  });
};

export default useStyles;
