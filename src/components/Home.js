import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import withAuthorization from './withAuthorization';
import { db } from '../firebase';

class HomePage extends Component {
  componentDidMount() {
    console.log('test');
    
    const { onSetUsers } = this.props;

    db.onceGetUsers().then(snapshot => 
      onSetUsers(snapshot.val())
    );
  
  }
  render() {
    const { users, authUser } = this.props;
    
    return (
      <div>
        <h1>Home Page</h1>
        <p>The Home Page is accesible by every signed in user.</p>
        { !!authUser && authUser.email}
        { !!users && <UserList users={users} /> }
      </div>
    )
  }  
}

const UserList = ({ users }) => 
  <div>
    <h2>List of Usernames of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>

    {Object.keys(users).map(key => 
      <div key={key}>{users[key].username}</div>
    )}
  </div>

const mapStateToProps = (state) => ({
  users: state.userState.users,
  authUser: state.sessionState.authUser
});

const mapDispatchToProps = (dispatch) => ({
  onSetUsers: (users) => dispatch({type: 'USERS_SET', users}),
});

const authCondition = (authUser) => !!authUser && authUser.role === 'ADMIN';

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, mapDispatchToProps)
)(HomePage);