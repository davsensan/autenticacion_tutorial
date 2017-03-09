import React, { PropTypes } from 'react';
import Auth from '../modules/Auth';
import ChangeProfile from '../components/ChangeProfile.jsx';


class ChangeProfilePage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props, context) {
    super(props, context);

    const name = localStorage.getItem('userProfileName');
    const email = localStorage.getItem('userProfileEmail')
    console.log("name: " + name + " email: " + email)
    // set the initial component state
    this.state = {
      errors: {},
      user: {
        name: name,
        email: email,
        old_password: '',
        password: '',
        confir_password: ''
      }
    };
    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message
    const email = encodeURIComponent(this.state.user.email);
    const name = encodeURIComponent(this.state.user.name);
    const old_password = encodeURIComponent(this.state.user.old_password);
    const password = encodeURIComponent(this.state.user.password);
    const confir_password = encodeURIComponent(this.state.user.confir_password);
    const formData = `email=${email}&name=${name}&password=${password}&confir_password=${confir_password}&old_password=${old_password}`;

    console.log(formData)
    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/api/changeProfile');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });

        console.log(xhr.response.user.email)
        // set a user profile items
        localStorage.setItem('userProfileName', xhr.response.user.name);
        localStorage.setItem('userProfileEmail', xhr.response.user.email);

        // set a message
        localStorage.setItem('successMessage', xhr.response.message);

        //Cerramos sesion para iniciar con los nuevos datos
        Auth.deauthenticateUser();

        // change the current URL to /
        this.context.router.replace('/login');
      } else {
        // failure

        // change the component state
        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <ChangeProfile
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

ChangeProfilePage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default ChangeProfilePage;