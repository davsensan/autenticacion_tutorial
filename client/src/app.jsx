import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { hashHistory, Router } from 'react-router';
import routes from './routes.js';
import { Provider } from "react-redux";
import { createStore }  from "redux";
import switch_language from "./store/reducers"

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

const store = createStore(switch_language);

ReactDom.render((
  	<MuiThemeProvider muiTheme={getMuiTheme()}>
  		<Provider store={store}>
    		<Router history={hashHistory} routes={routes} />
    	</Provider>
  	</MuiThemeProvider>), document.getElementById('react-app'));