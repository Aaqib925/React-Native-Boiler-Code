import { primaryColor, inActiveColor, fontFamily } from "../../Constants/styles";
import { Image, Text, KeyboardAvoidingView, View, useWindowDimensions, Dimensions, StyleSheet, Keyboard, SafeAreaView, Platform, AppState } from 'react-native';
import { useTranslate } from 'react-redux-multilingual'
import React, { useState, useEffect } from 'react';
import { TabView, TabBar, SceneMap } from "react-native-tab-view"
import { TabViewAnimated, TabBar as TabBarForIOS } from "react-native-tab-view-fixed"
import Home from '../Views/firstScreen';
import Users from '../Views/secondScreen';
import Info from "../Views/thirdScreen";
import Inbox from "../Views/fourthScreen";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faList, faUsers, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { normalizeWidth, normalizeWithScale } from "../../Utils/fontUtil";
import { fontH3, fontH4 } from "../../Constants/styles";
import { connect } from "react-redux";
import { TabIndex } from '../../Redux/Actions'
const TabViewExample = (props) => {
    const [appState, setAppState] = useState(AppState.currentState)
    useEffect(() => {
        if (appState === 'active') {
            const { TabIndex } = props
            TabIndex(0)
        }
        AppState.addEventListener('change', handleAppStateChange);
        return () => {
            AppState.removeEventListener('change', handleAppStateChange);
        }
    }, [])
    const handleAppStateChange = (nextAppState) => {
        console.log(nextAppState, "nextAppState")
        if (appState.match(/inactive|background/) && nextAppState === 'active') {
            const { TabIndex } = props
            TabIndex(0)
            console.log('App has come to the foreground!')
        }
        setAppState(nextAppState);
    }
    const t = useTranslate();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'Home', title: t("home"), icon: faHome },
        { key: 'Users', title: t("users"), icon: faUsers },
        { key: 'Info', title: t("info"), icon: faList },
        { key: 'Inbox', title: t("inbox"), icon: faEnvelope },
    ]);
    renderScene = ({ route }) => {
        if (route.key === 'Home' && index == 0) {
            return <Home />;
        } else if (route.key === 'Users' && index == 1) {
            return <Users />;
        } else if (route.key === 'Info' && index == 2) {
            return <Info />;
        } else if (route.key === 'Inbox' && index == 3) {
            return <Inbox />
        }
    }
    const checkTabBarIndex = (val) => {
        const { TabIndex } = props
        setIndex(val)
        TabIndex(val)
    }
    const renderTabBar = props => {
        return (
            <SafeAreaView style={styles.container}>
                {
                    Platform.OS === 'android' ?
                        <TabBar
                            onIndexChange={routes}
                            keyboardDismissMode='auto'
                            {...props}
                            renderLabel={({ route, focused, color }) => (
                                <Text style={{ fontSize: fontH4, color: focused ? "white" : primaryColor }}>
                                    {route.title}
                                </Text>
                            )}
                            renderIcon={({ route, focused, color }) => (
                                <FontAwesomeIcon
                                    icon={route.icon}
                                    color={focused ? "white" : primaryColor}
                                    size={normalizeWithScale(20)}
                                />
                            )}
                            indicatorStyle={{ backgroundColor: primaryColor, height: '100%', borderRadius: normalizeWidth(10) }}
                            style={{ ...styles.tabBar }}
                            pressColor={"white"}
                        // pressOpacity={0.8}
                        /> :
                        <TabBarForIOS
                            onIndexChange={routes}
                            keyboardDismissMode='auto'
                            {...props}
                            renderLabel={({ route, focused, color }) => (
                                <Text style={{ fontFamily: fontFamily.Primary.Medium, fontSize: fontH3, color: focused ? "white" : primaryColor }}>
                                    {route.title}
                                </Text>
                            )}
                            renderIcon={({ route, focused, color }) => (
                                <FontAwesomeIcon
                                    icon={route.icon}
                                    color={focused ? "white" : primaryColor}
                                    size={normalizeWithScale(20)}
                                />
                            )}
                            indicatorStyle={{ backgroundColor: primaryColor, height: '100%', borderRadius: normalizeWidth(10) }}
                            style={{ ...styles.tabBar }}
                            pressColor={"white"}
                        // pressOpacity={0.8}
                        />
                }

            </SafeAreaView>
        )



    };

    return (
        <>
            {
                Platform.OS === 'android' ? <TabView
                    keyboardDismissMode='auto'
                    renderTabBar={renderTabBar}
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={checkTabBarIndex}
                    tabBarPosition="bottom"
                    initialLayout={{
                        height: 0,
                        width: Dimensions.get('window').width,
                    }}
                    lazy={true}
                /> : <TabViewAnimated
                    keyboardDismissMode='auto'
                    renderFooter={renderTabBar}
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={checkTabBarIndex}
                    initialLayout={{
                        height: 0,
                        width: Dimensions.get('window').width,
                    }}
                    lazy={true}
                />
            }
        </>
    );
}
const mapDispatchToProps = {
    TabIndex
};
export default connect(null, mapDispatchToProps)(TabViewExample)


const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: 'white',
        paddingTop: 0,
        paddingBottom: 0,
        shadowOpacity: Platform.OS === 'android' ? 0.58 : null,
        shadowRadius: Platform.OS === 'android' ? 16.00 : null,
        elevation: 26
    },
    container: {
    },
});