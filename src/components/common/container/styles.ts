import {StyleSheet} from 'react-native';
import {colors} from '../../../assets';

const useStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    containerBoard: {
      backgroundColor: colors.primary,
      flexGrow: 1,
    },
  });
};

export default useStyles;
