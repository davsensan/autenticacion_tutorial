import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { hashHistory, Router } from 'react-router';
import routes from './routes.js';
import { intlShape, injectIntl } from 'react-intl';


const propTypes = {
  intl: intlShape.isRequired,
};


class App extends React.Component{
	render(){
		return(
		  <MuiThemeProvider muiTheme={getMuiTheme()}>
		    <Router history={hashHistory} routes={routes} />
		  </MuiThemeProvider>
		);
		
	}
}

App.propTypes = propTypes;

export default injectIntl(App);