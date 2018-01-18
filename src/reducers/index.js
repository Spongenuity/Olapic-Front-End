import { combineReducers } from 'redux';
import { GET_PHOTOS } from '../actions';

const photosReducer = (photos = [], action) => {
    switch(action.type) {
        case GET_PHOTOS:
            return action.payload.data;
        default:
            return photos;
    }
};

const rootReducer = combineReducers({
    photos: photosReducer
  });

export default rootReducer;