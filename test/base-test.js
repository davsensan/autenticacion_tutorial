import Base from '../client/src/components/Base.jsx';
import expect from 'expect';
import expectJSX from 'expectJSX';
import React from 'react';
import {createRenderer} from 'react-addons-test-utils';
import {IntlProvider} from 'react-intl';
import { Link, IndexLink } from 'react-router';


describe('Base test', function() {
  it('English test', function() {
	const rendered = createRenderer();
	const messages = defineMessages({
	  ReactApp: {
	    id: 'Base.ReactApp',
	    defaultMessage: 'React ',
	  },
	  Users: {
	    id: 'Base.Users',
	    defaultMessage: 'List users',
	  },
	  ChangeProfile: {
	    id: 'Base.ChangeProfile',
	    defaultMessage: 'Change profile',
	  },
	  Logout: {
	    id: 'Base.Logout',
	    defaultMessage: 'Log out',
	  },
	  Login: {
	    id: 'Base.Login',
	    defaultMessage: 'Log in',
	  },
	  Signup: {
	    id: 'Base.Signup',
	    defaultMessage: 'Sign up',
	  },
	  Remove: {
	    id: 'Base.Remove',
	    defaultMessage: 'Remove user',
	  },
	  Spanish: {
	    id: 'Base.Spanish',
	    defaultMessage: 'Spanish',
	  },
	  English: {
	    id: 'Base.English',
	    defaultMessage: 'English',
	  }
	});

	const intlProvider = new IntlProvider({locale:'en'}, {});
	const {intl} = intlProvider.getChildContext();
	const parrafo = 

	rendered.render(<Base children="<p> prueba </p>"> intl={intl} locale={intl.locale}/>)

	expect(rendered.getRenderOutput()).toEqualJSX({
		<div>
    		<div className="top-bar">
    		  <div className="top-bar-left">
    		    <IndexLink to="/" style={{color: 'blue'}}>{intl.formatMessage(messages.ReactApp)}</IndexLink>
    		    <Link to="/spanish" style={(intl.locale==="es" || intl.locale ==="es-ES") ? {fontSize: '16px', color:'white', background: 'green'} : {fontSize: '16px'}}>{intl.formatMessage(messages.Spanish)}</Link>
    		    <Link to="/english" style={(intl.locale==="en") ? {fontSize: '16px', color:'white', background: 'green'} : {fontSize: '16px'}}>{intl.formatMessage(messages.English)}</Link>
    		  </div>
		
    		  {Auth.isUserAuthenticated() ? (
    		    <div className="top-bar-right">
    		      <Link to="/remove" style={{color:'red'}}>{intl.formatMessage(messages.Remove)}</Link>
    		      <Link to="/users">{intl.formatMessage(messages.Users)}</Link>
    		      <Link to="/changeProfile">{intl.formatMessage(messages.ChangeProfile)}</Link>
    		      <Link to="/logout">{intl.formatMessage(messages.Logout)}</Link>
    		    </div>
    		  ) : (
    		    <div className="top-bar-right">
    		      <Link to="/login">{intl.formatMessage(messages.Login)}</Link>
    		      <Link to="/signup">{intl.formatMessage(messages.Signup)}</Link>
    		    </div>
    		    )}
    		</div>
    		{children}
  		</div>
		});
  }
}
