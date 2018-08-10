import {
    GET_IMAGES,
    GET_IMAGES_SUCCESS,
    GET_IMAGES_ERROR
} from '../actions/images';

const INITIAL_STATE = {
    images: [],
    isLoading: false,
    error: null,
};

const images = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_IMAGES:
            return {
                ...state,
                isLoading: true
            };
        case GET_IMAGES_SUCCESS:
            return {
                ...state,
                images: action.images,
                isLoading: false
            };
        case GET_IMAGES_ERROR:
            return {
                ...state,
                error: action.error,
                isLoading: false
            };
        default:
            return state;
    }
};

export default images;