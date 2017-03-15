import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';


const Home = ({successMessage}) => (
  <Card className="container">
    <CardTitle title="React Application" subtitle="This is the home page." />
    {successMessage && <CardText style={{ fontSize: '16px', color: 'green' }}>{successMessage}</CardText>}
  </Card>
);


export default Home;