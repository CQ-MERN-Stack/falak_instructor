import React from "react";
import { Redirect, Route } from "react-router-dom";

class PrivateRoutes extends React.Component {
  render() {
    const {isAuth} = this.props;
    if(isAuth) {
      return (
        <Route .... />
        <Route .... />
        <Route .... />
        <Route .... />
      )
    }
    else{
      alert ("login");
      return <Redirect to="/" />
    }
  }
}
