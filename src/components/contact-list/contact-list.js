import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearch } from "../../hooks";
import {contactRemove} from "../../actions";
import ContactListItem from "../contact-list-item";
import "./contact-list.scss";

const ContactList = () => {
  const contacts = useSelector((state) => state.contactList.contacts);
  const search = useSelector((state) => state.status.search);
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(contactRemove(id));
  };

  const visibleContacts = useSearch(contacts, search);

  return (
    <ul className="contact-list">
      {visibleContacts.length === 0 ? <h3 className="contact-list__title">Таких контактов нет</h3> :
        visibleContacts.map((contact) => {
          const {id} = contact
          return (
            <li key={id} className="contact-list__item">
              <ContactListItem {...contact} onDelete={() => onDelete(id)}/>
            </li>
          )
        })}
    </ul>
  )
};

export default ContactList;
