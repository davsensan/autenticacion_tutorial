import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { Link, IndexLink } from 'react-router';
import { FormattedMessage, intlShape, injectIntl, defineMessages } from 'react-intl';


const messages = defineMessages({
  Title_Dashboard: {
    id: 'Dashboard.Title_Dashboard',
    defaultMessage: 'Dashboard',
  },
  Subtitle_Dashboard: {
    id: 'Dashboard.Subtitle_Dashboard',
    defaultMessage: 'You should get access to this page only after authentication.',
  }
 
});

const Dashboard = ({ secretData, intl }) => (
  <Card className="container">
    <CardTitle
      title={intl.formatMessage(messages.Title_Dashboard)}
      subtitle={intl.formatMessage(messages.Subtitle_Dashboard)}
    />

    {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}
    
  </Card>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(Dashboard);