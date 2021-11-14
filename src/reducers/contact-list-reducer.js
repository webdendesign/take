import {
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_FAILURE,
  CONTACT_ADDED,
  CONTACT_REMOVE,
  CONTACT_EDIT,
} from "../actionTypes";

const initialState = {
  constacts: [],
  loading: true,
  error: null
};

const updateContacts = (contacts, item, idx) => {

  if (item.count === 0) {
    return [
      ...contacts.slice(0, idx),
      ...contacts.slice(idx + 1)
    ]
  }

  if (idx === -1) {
    return [
      ...contacts,
      item
    ]
  }

  return [
    ...contacts.slice(0, idx),
    item,
    ...contacts.slice(idx + 1)
  ]
};

const update = (state, {id, username, email}) => {
  const { contacts } = state;
  const newContact = {id, username, email};
  const contactIndex = contacts.findIndex((contact) => contact.id === id);

  return updateContacts(contacts, newContact, contactIndex);
};

const contactListReducer = (state = initialState, action) => {

  const {contacts } = state;

  switch (action.type) {
    case FETCH_CONTACTS_REQUEST:
      return {
        contacts: [],
        loading: true,
        error: null
      };
    case FETCH_CONTACTS_SUCCESS:
      return {
        contacts: action.payload,
        loading: false,
        error: null
      };
    case FETCH_CONTACTS_FAILURE:
      return {
        contacts: [],
        loading: false,
        error: action.payload
      };
    case CONTACT_ADDED:
      return {
        ...state,
        contacts: [action.payload, ...contacts]
      };
    case CONTACT_REMOVE:
      const newArray = contacts.filter((el) => el.id !== action.payload);
      return {
        ...state,
        contacts: newArray
      };
    case CONTACT_EDIT:
      return {
        ...state,
        contacts: update(state, action.payload)
      };
    default:
      return state;
  }
};

export default contactListReducer;
