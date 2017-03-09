import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const ChangePassword = ({
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
          floatingLabelText="Old password"
          type="password"
          name="old_password"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
        />
      </div>



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


      <div className="button-line">
        <RaisedButton type="submit" label="Change Password" primary />
      </div>
    </form>
  </Card>
);

ChangePassword.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default ChangePassword;