import { createContext, useReducer, useEffect } from "react";
import { authReducer } from "../Reducer/auth_reducer";
import { TOKEN_NAME, REFTOKEN } from "../Utils/consstants";
import authApi from "../Api/auth_api";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    authLoading: true,
    isAuthenticated: false,
  });

  //Authenticate user
  const loadUser = async () => {
    console.log("checking user");
    try {
      const response = await authApi.verifyUser();
      // console.log(response.data);
      if (response.data.success === false) {
        console.log("Verify token");
        dispatch({
          type: "SET_AUTH",
          payload: {
            isAuthenticated: true,
          },
        });
      }
      console.log("load:", authState);
    } catch (error) {
      localStorage.removeItem(TOKEN_NAME);
      // localStorage.removeItem(REFTOKEN);
      console.log("faild verify");
      dispatch({
        type: "SET_AUTH",
        payload: { isAuthenticated: false },
      });
    }
  };

  useEffect(() => loadUser(), []);

  // Login
  const loginUser = async (userForm) => {
    try {
      const response = await authApi.postSignIn(userForm);
      // console.log(response.data);
      if (response.data.success)
        localStorage.setItem(TOKEN_NAME, response.data.accessToken);
      // localStorage.setItem(REFTOKEN, response.data.refreshToken);

      await loadUser();

      return response.data;
    } catch (error) {
      if (error.response.data) {
        console.log(error.response.data);
        return error.response.data;
      }
    }
  };

  // Register
  const registerUser = async (userForm) => {
    try {
      const response = await authApi.postSignUp(userForm);

      console.log(`data: ${response.data}`);

      return response.data;
    } catch (error) {
      console.log(error.response.data);
      if (error.response.data) return error.response.data;
    }
  };

  // Logout;
  const logoutUser = () => {
    localStorage.removeItem(TOKEN_NAME);
    // localStorage.removeItem(REFTOKEN);
    dispatch({
      type: "SET_AUTH",
      payload: { isAuthenticated: false },
    });
  };

  // Context data
  const authContextData = {
    registerUser,
    loginUser,
    logoutUser,
    authState,
    loadUser,
  };

  // Return provider
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
