// ROOT REDUCER
import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";

//? REDUX APP LEVEL STATES
export default combineReducers({
  alert,
  auth,
  profile
});
