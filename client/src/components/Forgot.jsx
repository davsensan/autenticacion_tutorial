import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { FormattedMessage, intlShape, injectIntl, defineMessages } from 'react-intl';


const messages = defineMessages({
  Forgot_title: {
    id: 'Forgot.Forgot_title',
    defaultMessage: 'Forgot Password',
  },
  Button_forgot: {
    id: 'Forgot.Button_forgot',
    defaultMessage: 'Send',
  },
  Message_account: {
    id: 'Forgot.Message_account',
    defaultMessage: 'Do you have an account?',
  },
  TextEmail_Forgot: {
    id: 'Forgot.TextEmail_Forgot',
    defaultMessage: 'Email',
  },
  Login_Forgot: {
    id: 'Forgot.Login_Forgot',
    defaultMessage: 'Log in',
  }
});

const Forgot = ({
  onSubmit,
  onChange,
  errors,
  user,
  intl
}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">{intl.formatMessage(messages.Forgot_title)}</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText={intl.formatMessage(messages.TextEmail_Forgot)}
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className="button-line">
        <RaisedButton type="submit" label={intl.formatMessage(messages.Button_forgot)} primary />
      </div>

      <CardText> {intl.formatMessage(messages.Message_account)} <Link to={'/login'}> {intl.formatMessage(messages.Login_Forgot)}</Link>.</CardText>
    </form>
  </Card>
);

Forgot.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  intl: intlShape.isRequired,

};

export default injectIntl(Forgot);