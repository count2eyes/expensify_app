import React from "react";
import ReactDOM from "react-dom";

const Info = props => {
  return (
    <div>
      <h1>Info</h1>
      <p>The info is: {props.info}</p>
    </div>
  );
};

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <h3>This is private info. Please don't share!</h3>}
      <WrappedComponent {...props} />
    </div>
  );
};

const withAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <h3>Please log in to view the infos</h3>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = withAuthentication(Info);

ReactDOM.render(
  <AuthInfo isAuthenticated={true} info=" details" />,
  document.getElementById("app")
);
