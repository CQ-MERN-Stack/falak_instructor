import React from 'react';

class Login extends React.Component {
  render() {
    const { isAuth } = this.props;
    return isAuth ? (
      <div>User is logged in</div>
    ) : (
      <div>User is logged out</div>
    )
  }
}

export default Login