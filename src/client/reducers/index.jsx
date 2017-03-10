import { combineReducers } from "redux";
import { PREV_MONTH, NEXT_MONTH, SELECT_DATE, CHANGE_MONTH } from "../actions/action";

// const updateData = (state, action) => {
//   return action.data || state;
// };

// export default updateData;

const InitialInfo = {
      month: new Date().getMonth(),
      year: new Date().getFullYear()
    };

const InitialDate = {
      date: new Date().getDate(),
      month: new Date().getMonth(),
      year: new Date().getFullYear()
    };

const InitialStat = {
      months: ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      brMonths: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
      common: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      leap: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      NameofDay: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
    };

const InitialMonthNotes = {};

function info(state = InitialInfo, action) {
  switch (action.type) {
    case PREV_MONTH:
      if (state.month <= 0) {
        return {month: 11, year: state.year - 1};
      } 
      return {month: state.month - 1, year: state.year};
    case NEXT_MONTH:
      if (state.month >= 11) {
        return {month: 0, year: state.year + 1};
      } 
      return {month: state.month + 1, year: state.year};
    default:
      return state;
  }
}

function selectedDay(state = InitialDate, action) {
  switch (action.type) {
    case SELECT_DATE:
      return action.date;
    default:
      return state;
  }
}

function stat(state = InitialStat, action) {
  return state;
}

function monthNotes(state = InitialMonthNotes, action) {
  switch (action.type) {
    case CHANGE_MONTH:
      return action.data;
    default:
      return state;
  }
}

const celendarApp = combineReducers({
  info,
  selectedDay,
  stat,
  monthNotes
});

export default celendarApp;
