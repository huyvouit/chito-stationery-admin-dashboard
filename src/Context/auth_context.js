import { createContext, useReducer, useEffect } from "react";
import { authReducer } from "../Reducer/auth_reducer";
import { TOKEN_NAME, REFTOKEN } from "../Utils/consstants";
import authApi from "../api/auth_api";

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
      if (response.data.success) {
        console.log("Verify token");
        dispatch({
          type: "SET_AUTH",
          payload: {
            authLoading: false,
            isAuthenticated: true,
          },
        });
        // console.log(response.data.user);
      }
    } catch (error) {
      localStorage.removeItem(TOKEN_NAME);
      // localStorage.removeItem(REFTOKEN);
      console.log("faild verify");
      dispatch({
        type: "SET_AUTH",
        payload: { authLoading: false, isAuthenticated: false },
      });
    }
  };

  useEffect(() => loadUser(), []);

  // Login
  const loginUser = async (userForm) => {
    try {
      const response = await authApi.postSignIn(userForm);
      // console.log(response.data.accessToken);
      if (response.data.success)
        localStorage.setItem(TOKEN_NAME, response.data.accessToken);
      // localStorage.setItem(REFTOKEN, response.data.refreshToken);
      // console.log(`data: ${response.config}`);
      await loadUser();

      return response.data;
    } catch (error) {
      if (error.response.data) {
        // console.log(error.response.data);
        return error.response.data;
      }

      // else return { success: false, message: error.message };
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
      payload: { authLoading: false, isAuthenticated: false },
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
