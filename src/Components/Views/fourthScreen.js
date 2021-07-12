import React from 'react';
import { mainContainer, quoteStyles } from '../../Constants/styles'
import { View, Text } from 'react-native'
import { useTranslate } from 'react-redux-multilingual'
const FourthScreen = () => {
    const t = useTranslate();
    return (
        <View style={{ ...mainContainer }}>
            <Text style={{ ...quoteStyles }}>{t("fourthQuote")}</Text>
        </View>
    )
}

export default FourthScreen;