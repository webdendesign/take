import {
  STATUS_SEARCH,
  STATUS_ADD_CONTACT_FORM
} from "../actionTypes";

const initialState = {
  search: "",
  addForm: false
};

const statusReducer = (state = initialState, action) => {

  switch (action.type) {
    case STATUS_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case STATUS_ADD_CONTACT_FORM:
      return {
        ...state,
        addForm: !action.payload
      };
    default:
      return state;
  }
};

export default statusReducer;
