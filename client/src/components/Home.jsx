import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';


const Home = ({info={title: "default", subtitle:"default"}}) => (
  <Card className="container">
  	<CardTitle title={info.title} subtitle={info.subtitle}/>
  </Card>
);

export default Home;