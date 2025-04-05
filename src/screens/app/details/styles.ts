import {StyleSheet} from 'react-native';
import {modarateWidth, moderateHeight} from '../../../helpers/responsive';
import {colors} from '../../../assets';

const useStyles = () => {
  return StyleSheet.create({
    wrapper: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      height: moderateHeight(40),
      width: modarateWidth(100),
      resizeMode: 'contain',
      marginBottom: moderateHeight(2),
    },
    container: {
      paddingHorizontal: modarateWidth(5),
    },
    like: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      columnGap: modarateWidth(2),
    },
    title: {
      flex: 1,
      textTransform: 'capitalize',
    },
    desc: {
      textAlign: 'justify',
    },
    descWrapper: {
      marginTop: moderateHeight(3),
      borderWidth: modarateWidth(0.3),
      borderRadius: modarateWidth(2),
      padding: modarateWidth(3),
      borderColor: colors.gray,
    },
    btn: {
      padding: modarateWidth(2),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: modarateWidth(2),
      borderWidth: modarateWidth(0.3),
      marginTop: moderateHeight(2),
    },
    cross: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
};

export default useStyles;
