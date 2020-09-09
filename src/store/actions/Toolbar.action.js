import { CHANGE_BACKGROUND_COLOR, CHANGE_FONT_SIZE, CHANGE_FONT_COLOR } from '../../constants/actionTypes';

export function onChangeBackgroundColor(bgColor) {
    return {
        type: CHANGE_BACKGROUND_COLOR,
        bgColor,
    };
}

export function onChangeFontSize(fontSize) {
    return {
        type: CHANGE_FONT_SIZE,
        fontSize,
    };
}

export function onChangeFontColor(fontColor) {
    return {
        type: CHANGE_FONT_COLOR,
        fontColor,
    };
}
