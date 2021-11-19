import LoginScreen from "./login_screen";

import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../Context/auth_context";

const AuthScreen = ({ authRoute }) => {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);

  let body;

  if (authLoading)
    body = <div class="spinner-border text-info " role="status"></div>;
  else if (isAuthenticated) return <Redirect to="/" />;
  else
    body = (
      <>
        <LoginScreen />
      </>
    );

  return <>{body}</>;
};

export default AuthScreen;
