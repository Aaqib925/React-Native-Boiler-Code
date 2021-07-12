import { combineReducers } from "redux";
import { IntlReducer as Intl } from 'react-redux-multilingual'
import changeLanguageReducer from './ChangeLanguageReducer'
import TabBarReducer from './TabBarReducer'
const appReducer = combineReducers(Object.assign({}, {
    Intl,
    Language: changeLanguageReducer,
    TabBar: TabBarReducer
}))

export default appReducer;