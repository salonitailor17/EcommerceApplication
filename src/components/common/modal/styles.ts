import {StyleSheet} from 'react-native';
import {colors} from '../../../assets';
import {modarateWidth} from '../../../helpers/responsive';

const useStyles = () => {
  return StyleSheet.create({
    modal: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    wrapper: {
      backgroundColor: colors.primary,
      borderRadius: modarateWidth(3),
      width: modarateWidth(90),
      padding: modarateWidth(3),
    },
  });
};

export default useStyles;
