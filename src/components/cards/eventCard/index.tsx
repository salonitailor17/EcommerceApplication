import React, {memo} from 'react';
import {useDispatch} from 'react-redux';
import {View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {AppText} from '../..';
import {Icon} from '../../../assets';

import {fontSize} from '../../../helpers';
import {activeOpacity} from '../../../helpers/helpers';
import routes from '../../../navigation/routes';

import useStyles from './styles';
import {addToLikes, deleteLikedItems} from '../../../store/actions/app/likes';

const EventCard = ({item, index, icon = false}: any) => {
  const dispatch = useDispatch();
  const styles = useStyles();
  const navigation = useNavigation();

  const handleLike = () => {
    const updatedItem = {...item, isFavorite: 1};
    dispatch(addToLikes(updatedItem));
  };

  const handleDelete = () => {
    dispatch(deleteLikedItems(item));
  };

  const handleDetails = () => {
    navigation.navigate(routes.app.details, {item});
  };

  return (
    <TouchableOpacity
      style={styles.wrapper}
      activeOpacity={activeOpacity}
      onPress={handleDetails}>
      <Image source={{uri: item?.image}} style={styles.image} />

      <View style={styles.wrap}>
        <AppText
          label={item?.title}
          size={fontSize.text}
          fontWeight={'600'}
          style={styles.wrap}
          numberOfLines={2}
        />
        <AppText
          label={`$ ${item?.price}`}
          fontWeight={'600'}
          style={styles.wrap}
        />
      </View>
      <TouchableOpacity
        activeOpacity={activeOpacity}
        style={icon ? {} : styles.icon}
        onPress={handleLike}>
        {item?.isFavorite ? <Icon.LikeFillIcon /> : <Icon.LikeIcon />}
      </TouchableOpacity>
      {icon && (
        <TouchableOpacity
          activeOpacity={activeOpacity}
          onPress={handleDelete}
          style={styles.icon}>
          <Icon.DeleteIcon />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default memo(EventCard);
