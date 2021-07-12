import React from 'react';
import { Platform } from "react-native"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { normalizeWidth } from '../utils/fontUtil';

const autoScrollHOC = (HocComponent) => {
    return (props) => {
        return (
            Platform.OS === 'android' ? <HocComponent {...props} /> :
                <KeyboardAwareScrollView extraScrollHeight={normalizeWidth(40)}>
                    <HocComponent {...props} />
                </KeyboardAwareScrollView>
        )
    }
}

export default autoScrollHOC