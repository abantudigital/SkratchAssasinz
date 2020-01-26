// ALERT ACTION
import uuid from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "./types";

//! setAlert action will dispatch Action "type" to Reducer
//! Reducer will add the alert to the State
export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  const id = uuid.v4();

  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
