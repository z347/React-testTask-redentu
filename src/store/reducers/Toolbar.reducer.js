import { CHANGE_BACKGROUND_COLOR, CHANGE_FONT_SIZE, CHANGE_FONT_COLOR } from '../../constants/actionTypes';

const initialState = {
    bgColor: false,
    fontSize: false,
    fontColor: false,
};

export default function fetchImagesReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_BACKGROUND_COLOR:
            return {
                ...state,
                bgColor: action.bgColor,
            };
        case CHANGE_FONT_SIZE:
            return {
                ...state,
                fontSize: action.fontSize,
            };
        case CHANGE_FONT_COLOR:
            return {
                ...state,
                fontColor: action.fontColor,
            };
        default:
            return state;
    }
}
