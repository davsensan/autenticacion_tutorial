import React from 'react';
import Base from '../components/Base.jsx';
import { connect } from 'react-redux';
import {action_switchLanguage} from "../actions"

const BasePage = connect(
    state => ({info: state.content.basePage, language: state.content.lang}),
    dispatch => ({onSwitchLanguage(lang){
    	dispatch(action_switchLanguage(lang))
    	}
	})
)(Base)


export default BasePage