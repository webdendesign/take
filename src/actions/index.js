import * as types from "../actionTypes";
import axios from "axios";

const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginSuccess = (token) => ({
  type: types.LOGIN_SUCCESS,
  payload: token
});

const loginFail = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error
});

const registerStart = () => ({
  type: types.REGISTER_START,
});

const registerSuccess = (token) => ({
  type: types.REGISTER_SUCCESS,
  payload: token
});

const registerFail = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error
});

export const logoutInitiate = () => ({
  type: types.LOGOUT_USER,
});

export const setErrorEmpty = () => ({
  type: types.SET_ERROR_EMPTY,
});

export const loginInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart());
    axios
      .post("http://localhost:5000/api/auth/login", {
        email,
        password,
      })
      .then((response) => {
        console.log("response", response);
        dispatch(loginSuccess(response.data.access_token))
      })
      .catch((error) => dispatch(loginFail(error.response.data.message)));
  };
};

export const registerInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(registerStart());
    axios
      .post("http://localhost:5000/api/auth/register", {
        email,
        password,
      })
      .then((response) => {
        console.log("response", response);
        dispatch(registerSuccess(response.data.access_token))
      })
      .catch((error) => dispatch(registerFail(error.response.data.message)));
  };
};

export const contactsRequested = () => {
  return {
    type: types.FETCH_CONTACTS_REQUEST,
  };
};

export const contactsLoaded = (newContacts) => {
  return {
    type: types.FETCH_CONTACTS_SUCCESS,
    payload: newContacts
  };
};

export const contactsError = (error) => {
  return {
    type: types.FETCH_CONTACTS_FAILURE,
    payload: error
  };
};

export const contactAdded = (newBook) => {
  return {
    type: types.CONTACT_ADDED,
    payload: newBook
  };
};

export const contactRemove = (id) => {
  return {
    type: types.CONTACT_REMOVE,
    payload: id
  };
};

export const contactEdit = (editEl) => {
  return {
    type: types.CONTACT_EDIT,
    payload: editEl
  };
};

export const statusSearch = (search) => {
  return {
    type: types.STATUS_SEARCH,
    payload: search
  };
};

export const statusAddForm = (addForm) => {
  return {
    type: types.STATUS_ADD_CONTACT_FORM,
    payload: addForm
  };
};
