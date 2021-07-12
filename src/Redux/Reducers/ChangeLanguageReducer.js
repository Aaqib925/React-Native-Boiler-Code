import { CHANGE_LANGUAGE } from "../Actions";

const initialState = {
    locale: 'en'
};
export default (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_LANGUAGE: {
            return {
                locale: action.payload
            }
        }
        default: {
            return state;
        }
    }
};
