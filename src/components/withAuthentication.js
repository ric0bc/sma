import React from 'react';
import { connect } from 'react-redux';

import { firebase } from '../firebase';
import { db } from '../firebase';

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);
      this.state = { auth: false }
    }
    componentWillMount() {
      const { onSetAuthUser } = this.props;
      firebase.auth.onAuthStateChanged(authUser => {
        if(authUser){
          db.onceGetAuthUser(authUser.uid).then(snapshot => 
            onSetAuthUser(snapshot.val())  
          );
        } else {
          onSetAuthUser(null);
          this.setState({ auth: true });
        }
      });
    }

    render() {
      if(this.state.auth){
        return <Component />;
      }
      return this.props.authUser ? <Component /> : <div>Loading</div>;
    }
  }

  const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser
  });

  const mapDispatchToProps = (dispatch) => ({
    onSetAuthUser: (authUser) => dispatch({ type: 'AUTH_USER_SET', authUser }),
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithAuthentication);
}

export default withAuthentication;