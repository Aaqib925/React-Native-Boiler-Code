import React from 'react';
import { connect } from 'react-redux'
import { mainContainer, quoteStyles } from '../../Constants/styles'
import { View, Text, Button } from 'react-native'
import { languageLocale } from '../../Constants/enum'
import { changeLanguage } from "../../Redux/Actions"
import { useTranslate } from 'react-redux-multilingual'
const FirstScreen = (props) => {
    const t = useTranslate();
    const handleChangeLanguage = () => {
        const { changeLanguage, currentLocale } = props;
        if (currentLocale === languageLocale.en) {
            changeLanguage(languageLocale.zh)
        }
        else {
            changeLanguage(languageLocale.en)
        }
    }
    const { currentLocale } = props;
    return (
        <View style={{ ...mainContainer }}>
            <Text style={{ ...quoteStyles }}>{t("firstQuote")}</Text>
            <Button onPress={handleChangeLanguage} title={`Change Language to ${currentLocale === languageLocale.en ? "Chinese" : "English"}`}></Button>
        </View>
    )
}
const mapStateToProps = (state) => {
    return {
        currentLocale: state?.Language?.locale
    }
}

const mapDispatchToProps = {
    changeLanguage
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstScreen);