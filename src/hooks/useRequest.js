import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { contactsRequested, contactsLoaded, contactsError } from "../actions";

const useRequest = (request) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsRequested());
    request()
      .then(data => dispatch(contactsLoaded(data)))
      .catch(error => dispatch(contactsError(error)))
  }, [request, dispatch]);
};

export default useRequest;
