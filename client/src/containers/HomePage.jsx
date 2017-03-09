import React from 'react';
import Home from '../components/Home.jsx';
import { connect } from 'react-redux';


const HomePage = connect(
    state => ({info: state.content.homePage}),
    null
)(Home)

export default HomePage