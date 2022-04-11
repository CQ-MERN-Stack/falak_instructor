import React from "react";
import { Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes"

const PublicRoute = (props) => {
  return (
    <div>
      <Route path="/" exact render={()=><Login />} />
      <Route path="/home" exact render={()=><PrivateRoutes />} />
    </div>
  )
}