import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import path from 'path';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

addLocaleData([...en, ...es]);

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
const language_navigator = (navigator.languages && navigator.languages[0]) ||
                     navigator.language ||
                     navigator.userLanguage;



// Split locales with a region code
const languageWithoutRegionCode = language_navigator.toLowerCase().split(/[_-]+/)[0];



const messages = {};
const languages = ['en', 'es'];
languages.forEach((locale) => {
  messages[locale] = require(`../../build/lang/${locale}.json`);
});
// Render our react-app component into the div with id "react-app"

// If browser doesn't support Intl (i.e. Safari), then we manually import
// the intl polyfill and locale data.
if (!window.Intl) {
  require.ensure([
    'intl',
    'intl/locale-data/jsonp/en.js',
    'intl/locale-data/jsonp/es.js',
  ], (require) => {
    require('intl');
    require('intl/locale-data/jsonp/en.js');
    require('intl/locale-data/jsonp/es.js');

    render(
      <IntlProvider locale={languageWithoutRegionCode} messages={messages[languageWithoutRegionCode] || messages[language_navigator] || messages.en}>
      <App />
    </IntlProvider>,
    document.getElementById('react-app')
    );
  });
} else {
  render(
    <IntlProvider locale={languageWithoutRegionCode} messages={messages[languageWithoutRegionCode] || messages[language_navigator] || messages.en}>
      <App />
    </IntlProvider>,
    document.getElementById('react-app')
  );
}
