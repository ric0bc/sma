import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

import * as routes from '../constants/routes';


const withAuthorization = (authCondition) => (Component) => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      console.log('2');
      console.log(this.props);
      if (!authCondition(this.props.authUser)) {
        this.props.history.push(routes.SIGN_IN);
        console.log('not authorized');
      }
    }

    render() {
      console.log('1');
      
      return this.props.authUser ? <Component /> : null;
    }
  }

  const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser
  });

  return compose(
    withRouter,
    connect(mapStateToProps),
  )(WithAuthorization);
}

export default withAuthorization;