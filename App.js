import React from 'react';
import { translations } from './translations'
import { primaryColor } from './src/Constants/styles'
import { Provider } from "react-redux";
import { IntlProvider, useTranslate } from 'react-redux-multilingual'
import StatusBarComponent from "./src/Components/SharedComponents/StatusBarComponent"
import { store } from "./src/Redux/Store"
import TabBarContent from './src/Components/SharedComponents/TabBarContent'
const App = () => {
  console.disableYellowBox = true; // For disabling warning yellow box
  const t = useTranslate();

  return (
    <>
      <Provider store={store}>
        <IntlProvider translations={translations} locale='en' >
          <StatusBarComponent barStyle="light-content" backgroundColor={primaryColor} />
          {/* <MainRoute /> */}
          {/* <ToastComponent /> */}
          <TabBarContent />
        </IntlProvider>
      </Provider>
    </>

  )
}

export default App