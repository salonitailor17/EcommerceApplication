import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';

import {colors, Icon} from '../../../assets';
import {AppText, Container} from '../../../components';

import useStyles from './styles';
import {fontSize} from '../../../helpers';
import {activeOpacity} from '../../../helpers/helpers';
import {moderateHeight} from '../../../helpers/responsive';

import {addToLikes} from '../../../store/actions/app/likes';

const Details = ({route}) => {
  const item = route?.params?.item;
  const styles = useStyles();

  const dispatch = useDispatch();

  const handleLike = () => {
    const updatedItem = {...item, isFavorite: 1};
    dispatch(addToLikes(updatedItem));
  };

  return (
    <Container header label={'Details'} form>
      <Image source={{uri: item?.image}} style={styles.image} />
      <View style={styles.container}>
        <View style={styles.like}>
          <AppText
            label={item?.title}
            size={fontSize.medium}
            fontWeight={'600'}
            style={styles.title}
            numberOfLines={3}
          />
          <TouchableOpacity activeOpacity={activeOpacity} onPress={handleLike}>
            {item?.isFavorite ? <Icon.LikeFillIcon /> : <Icon.LikeIcon />}
          </TouchableOpacity>
        </View>
        <AppText
          label={`$ ${item?.price}`}
          fontWeight={'600'}
          style={styles.title}
          size={fontSize.title}
          color={colors.secondary}
        />
        <View style={styles.descWrapper}>
          <AppText
            label={`Category : ${item?.category}`}
            fontWeight={'500'}
            style={styles.title}
          />
          <AppText
            label={`Rating : ${item?.rating?.rate}`}
            fontWeight={'500'}
            style={[styles.title, {marginTop: moderateHeight(1)}]}
          />
          <AppText
            label={`Description:`}
            fontWeight={'500'}
            style={[styles.title, {marginTop: moderateHeight(1)}]}
          />
          <AppText
            label={item?.description}
            numberOfLines={800}
            style={styles.desc}
          />
        </View>
      </View>
    </Container>
  );
};

export default Details;
