import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

const Users = ({ users }) => (

  <Card className="container">
  	{	users.map((user,i) => 
  			<div key={i}>
  			<CardTitle
      			title={user.name}
      			subtitle={"Last modification: " + user.timestand}
    		/>
    			<CardText style={{ fontSize: '16px', color: 'green' }}>Contact: {user.email} </CardText>
    		</div>	
    )};
  </Card>  
);

Users.propTypes = {
  users: PropTypes.array.isRequired
};

export default Users;