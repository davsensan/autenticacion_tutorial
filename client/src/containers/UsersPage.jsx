import React from 'react';
import Auth from '../modules/Auth';
import Users from '../components/Users.jsx';


class UsersPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {}
      ]
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentWillMount() {
    const xhr = new XMLHttpRequest();
    console.log("componentWillMount")
    xhr.open('get', '/api/users');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          users: xhr.response.users
        });
      }
    });
    xhr.send();
  }

  /**
   * Render the component.
   */
  render() {
    return (<Users users={this.state.users} />);
  }

}

export default UsersPage;