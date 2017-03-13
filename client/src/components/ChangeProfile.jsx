import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { FormattedMessage, intlShape, injectIntl, defineMessages } from 'react-intl';


const messages = defineMessages({
  ChangePassword: {
    id: 'ChangeProfile.ChangePassword',
    defaultMessage: 'Change Password',
  },
  TextName: {
    id: 'ChangeProfile.TextName',
    defaultMessage: 'Name',
  },
  TextEmail: {
    id: 'ChangeProfile.TextEmail',
    defaultMessage: 'email',
  },
  Advertisment: {
    id: 'ChangeProfile.Advertisment',
    defaultMessage: "If this fields are empty, this parameter doesn't change",
  },
  TextNewPassword: {
    id: 'ChangeProfile.TextNewPassword',
    defaultMessage: 'New password',
  },
  TextConfirmPassword: {
    id: 'ChangeProfile.TextConfirmPassword',
    defaultMessage: 'Confirm your new password',
  },
  AdvertismentSecurity: {
    id: 'ChangeProfile.AdvertismentSecurity',
    defaultMessage: 'For your security, please enter your current password',
  },
  TextCurrentPassword: {
    id: 'ChangeProfile.TextCurrentPassword',
    defaultMessage: 'Current password',
  },
  ButtonProfile: {
    id: 'ChangeProfile.ButtonProfile',
    defaultMessage: 'Change profile',
  },
  
});


const ChangeProfile = ({
  onSubmit,
  onChange,
  errors,
  user,
  intl
}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">{intl.formatMessage(messages.ChangePassword)}</h2>
      {errors.summary && <p className="error-message">{errors.summary}</p>}
      <div className="field-line">
        <TextField
          floatingLabelText={intl.formatMessage(messages.TextName)}
          name="name"
          errorText={errors.name}
          onChange={onChange}
          value={user.name}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText={intl.formatMessage(messages.TextEmail)}
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>
      <br/>
      <h4 className="card-heading">{intl.formatMessage(messages.Advertisment)}</h4> 
      <div className="field-line">
        <TextField
          floatingLabelText={intl.formatMessage(messages.TextNewPassword)}
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
        />
      </div>



      <div className="field-line">
        <TextField
          floatingLabelText={intl.formatMessage(messages.TextConfirmPassword)}
          type="password"
          name="confir_password"
          onChange={onChange}
          errorText={errors.confir_password}
          value={user.confir_password}
        />
      </div>

      
      <div className="field-line">
        <CardText className="card-heading">{intl.formatMessage(messages.AdvertismentSecurity)}</CardText>
        <TextField
          floatingLabelText={intl.formatMessage(messages.TextCurrentPassword)}
          type="password"
          name="old_password"
          onChange={onChange}
          errorText={errors.old_password}
          value={user.old_password}
        />
      </div>

      <div className="button-line">
        <RaisedButton type="submit" label={intl.formatMessage(messages.ButtonProfile)} primary />
      </div>
    </form>
  </Card>
);

ChangeProfile.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  intl: intlShape.isRequired,

};

export default injectIntl(ChangeProfile);