import {
  ADD_TO_LIKES,
  LOAD_LIKED_ITEMS,
  REMOVE_FROM_LIKES,
} from '../../actions/app/likes';

const initialState = {
  likedItems: [],
};

export const likesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LIKES:
      return {
        ...state,
        likedItems: action.payload,
      };
    case REMOVE_FROM_LIKES:
      return {
        ...state,
        likedItems: action.payload,
      };
    case LOAD_LIKED_ITEMS:
      return {
        ...state,
        likedItems: action.payload,
      };
    default:
      return state;
  }
};
