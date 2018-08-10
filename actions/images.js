// import Api from '../api/images';

export const GET_IMAGES = 'GET_IMAGES';
export const GET_IMAGES_SUCCESS = 'GET_IMAGES_SUCCESS';
export const GET_IMAGES_ERROR = 'GET_IMAGES_ERROR';

export const getImages = () => (dispatch) => {
    dispatch({ type: GET_IMAGES })

    // Api.getImages()
    //     .then(res => { return res.json() })
    //     .then(result => {
    //         dispatch({ type: GET_IMAGES_SUCCESS, images: result })
    //     })
    //     .catch((err) => {
    //         dispatch({ type: GET_IMAGES_ERROR, error: err })
    //     })
}