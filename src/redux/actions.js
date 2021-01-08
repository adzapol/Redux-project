import {
    CHANGE_THEME,
    DECRIMENT,
    DISABLE_BUTTONS,
    ENABLE_BUTTONS,
    INCREMENT,
} from './types'

export function increment() {
    return {
        type: INCREMENT,
    }
}

export function decriment() {
    return {
        type: DECRIMENT,
    }
}

export function enableButtons() {
    return {
        type: ENABLE_BUTTONS,
    }
}

export function disableButtons() {
    return {
        type: DISABLE_BUTTONS,
    }
}

export function changeTheme(newTheme) {
    return {
        type: CHANGE_THEME,
        payload: newTheme,
    }
}

export function asyncIncrement() {
    return function (dispatch) {
        dispatch(disableButtons())
        setTimeout(() => {
            dispatch(increment())
            dispatch(enableButtons())
        }, 1500)
    }
}
