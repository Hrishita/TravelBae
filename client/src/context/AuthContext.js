/**
 * Author : Trushita Maurya
 * Created context to pass user information to all child components
 */
import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  token: null,
  login: () => {},
  logout: () => {},
  loadUserProfile: () => {},
});
