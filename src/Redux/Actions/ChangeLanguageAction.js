export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
import { IntlActions } from 'react-redux-multilingual'

export const changeLanguage = (locale, data) => (dispatch, getState) => {
    try {
        dispatch(IntlActions.setLocale(locale))
        dispatch(
            {
                type: CHANGE_LANGUAGE,
                payload: locale
            }
        );
    } catch (e) {
        console.log(e)
    }
}