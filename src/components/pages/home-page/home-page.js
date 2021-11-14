import React from "react";
import { useSelector } from "react-redux";
import ContactListContainer from "../../containers/contact-list-container";
import FormContaner from "../../containers/form-container/form-container";
import UserNotLogin from "../../user-not-login/user-not-login";
import "./home-page.scss";

const HomePage = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      { user ? (
        <div>
          <FormContaner />
          <ContactListContainer />
        </div>
      ) : (
        <UserNotLogin />
      )}
    </div>
  )
};

export default HomePage;
