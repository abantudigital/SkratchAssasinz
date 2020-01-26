// ALERT REDUCER
// Function that takes in a piece of State & an Action
/* 
? Actions will contains 2 things: 
? Type(mandatory)
? Type is what we need to evaluate w/ Switch Statement by Cases
- Variables or Constants for types. Could use a String 
- Payload(data), "Payload"  can be called anything
! State gets passed down to the component that calls it
! setAlert action will dispatch Action "type" to Reducer
! Reducer will add the alert to the State, which initialy is just an empty array
*/

import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
}
