/*
 * action types
 */

export const PREV_MONTH = 'PREV_MONTH';
export const NEXT_MONTH = 'NEXT_MONTH';
export const SELECT_DATE = 'SELECT_DATE';
export const CHANGE_MONTH = 'CHANGE_MONTH';
// export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

/*
 * action creators
 */

// export function addTodo(text) {
//   return { type: ADD_TODO, text }
// }

// export function toggleTodo(index) {
//   return { type: TOGGLE_TODO, index }
// }

export function selectDate(date) {
  return { type: SELECT_DATE, date };
}

export function preveMonth(move) {
  return { type: PREV_MONTH, move };
};

export function nextMonth(move) {
  return { type: NEXT_MONTH, move };
};

export function changeMonth(data) {
  return { type: CHANGE_MONTH, data };
};
