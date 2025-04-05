import {moderateHeight} from './responsive';

const fontSize = Object.freeze({
  regular: moderateHeight(1.5),
  text: moderateHeight(1.8),
  medium: moderateHeight(2),
  title: moderateHeight(2.5),
  small: moderateHeight(1.3),
  heading: moderateHeight(4),
  name: moderateHeight(3),
});

export default fontSize;
