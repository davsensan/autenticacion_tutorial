import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const ChangeProfile = ({
  onSubmit,
  onChange,
  errors,
  user
}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Change Password</h2>
      {errors.summary && <p className="error-message">{errors.summary}</p>}
      <div className="field-line">
        <TextField
          floatingLabelText="Name"
          name="name"
          errorText={errors.name}
          onChange={onChange}
          value={user.name}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Email"
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>
      <br/>
      <h4 className="card-heading">If this fields are empty, this parameter doesn't change </h4> 
      <div className="field-line">
        <TextField
          floatingLabelText="New password"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
        />
      </div>



      <div className="field-line">
        <TextField
          floatingLabelText="Confirm new password"
          type="password"
          name="confir_password"
          onChange={onChange}
          errorText={errors.confir_password}
          value={user.confir_password}
        />
      </div>

      
      <div className="field-line">
        <CardText className="card-heading">For your security, please enter your current password </CardText>
        <TextField
          floatingLabelText="Current password"
          type="password"
          name="old_password"
          onChange={onChange}
          errorText={errors.old_password}
          value={user.old_password}
        />
      </div>

      <div className="button-line">
        <RaisedButton type="submit" label="Change Profile" primary />
      </div>
    </form>
  </Card>
);

ChangeProfile.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default ChangeProfile;