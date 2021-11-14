import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { useRequest } from "../../../hooks";
import ContactList from "../../contact-list";
import ContactsService from "../../../services/contacts-service";
import ErrorIndicator from "../../error-indicator";
import Spinner from "../../spinner";

const contactsService = new ContactsService();

const useContacts = () => {
  const request = useCallback(() => contactsService.getAllContacts(), []);
  return useRequest(request);
};

const ContactListContaner = () => {
  useContacts();
  const loading = useSelector((state) => state.contactList.loading);
  const error = useSelector((state) => state.contactList.error);

  if(error) {
    return <ErrorIndicator />
  }

  if(loading) {
    return <Spinner />
  }

  return (
    <ContactList />
  )
};

export default ContactListContaner;
