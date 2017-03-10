import React, {PropTypes} from 'react';
import { Card, CardTitle } from 'material-ui/Card';


const Home = ({info}) => (
  <Card className="container">
  	<CardTitle title={info.title} subtitle={info.subtitle}/>
  </Card>
);

Home.propTypes = {
  info: PropTypes.object.isRequired
};
export default Home;