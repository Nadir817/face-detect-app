import React from "react";

const Navigation = props => {
  if (props.isSignedIn) {
    return (
      <nav>
        <p
          className="f3 link dim pa3 underline black pointer"
          onClick={() => props.onRouteChange("signout")}
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav>
        <p
          className="f3 link dim pa3 underline black pointer"
          onClick={() => props.onRouteChange("signin")}
        >
          Sign In
        </p>
        <p
          className="f3 link dim pa3 underline black pointer"
          onClick={() => props.onRouteChange("register")}
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
