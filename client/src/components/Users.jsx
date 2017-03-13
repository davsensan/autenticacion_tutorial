import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { FormattedMessage, intlShape, injectIntl, defineMessages } from 'react-intl';


const messages = defineMessages({
  LastModificate: {
    id: 'Users.LastModificate',
    defaultMessage: 'Last modification: ',
  },
  Contact: {
    id: 'Users.Contact',
    defaultMessage: 'Contact: ',
  },
  Contact: {
    id: 'Users.Contact',
    defaultMessage: 'Contact: ',
  },
  UserCount:
  {
  id:'Users.UserCount', 
  defaultMessage: '{count, number} {count, plural, one {user registered} other {users registered}}'
  }
})

const Users = ({ users, intl }) => (

  <Card className="container">
  <h2 style={{color: 'green'}}>
    {intl.formatMessage(messages.UserCount, { count: users.length })}
      </h2>
  	{	users.map((user,i) => 
  			<div key={i}>
  			<CardTitle
      			title={user.name}
      			subtitle={intl.formatMessage(messages.LastModificate) + user.timestand}
    		/>
        
    			<CardText style={{ fontSize: '16px', color: 'green' }}>Contact: {user.email} </CardText>
    		</div>	
    )};
  </Card>  
);

Users.propTypes = {
  users: PropTypes.array.isRequired
};

export default injectIntl(Users);