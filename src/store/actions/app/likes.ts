import AsyncStorage from '@react-native-async-storage/async-storage';
import {ToastAndroid} from 'react-native';

export const ADD_TO_LIKES = 'ADD_TO_LIKES';
export const LOAD_LIKED_ITEMS = 'LOAD_LIKED_ITEMS';
export const REMOVE_FROM_LIKES = 'REMOVE_FROM_LIKES';

export const addToLikes = item => {
  return async dispatch => {
    try {
      const storedLikes = await AsyncStorage.getItem('likes');
      let likes = storedLikes ? JSON.parse(storedLikes) : [];

      const isAlreadyLiked = likes?.some(
        likedItem => likedItem?.id === item?.id,
      );

      if (!isAlreadyLiked) {
        const updatedLikes = [...likes, item];
        await AsyncStorage.setItem('likes', JSON.stringify(updatedLikes));
        dispatch({type: ADD_TO_LIKES, payload: updatedLikes});
        ToastAndroid.show('Added to likes', 1000);
      } else {
        ToastAndroid.show('Already added to likes', 1000);
      }
    } catch (error) {
      console.error('Failed to add item to likes', error);
    }
  };
};

export const deleteLikedItems = item => {
  return async dispatch => {
    try {
      const storedLikes = await AsyncStorage.getItem('likes');
      let likes = storedLikes ? JSON.parse(storedLikes) : [];

      const removeArray = likes?.filter(
        likedItem => likedItem?.id !== item?.id,
      );

      await AsyncStorage.setItem('likes', JSON.stringify(removeArray));
      dispatch({type: REMOVE_FROM_LIKES, payload: removeArray});
      ToastAndroid.show('Deleted from likes', 1000);
    } catch (error) {
      console.error('Failed to load liked items', error);
    }
  };
};

export const loadLikedItems = () => {
  return async dispatch => {
    try {
      const storedLikes = await AsyncStorage.getItem('likes');
      const likes = storedLikes ? JSON.parse(storedLikes) : [];
      dispatch({type: LOAD_LIKED_ITEMS, payload: likes});
    } catch (error) {
      console.error('Failed to load liked items', error);
    }
  };
};
