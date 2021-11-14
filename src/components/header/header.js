import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {logoutInitiate} from "../../actions";
import "./header.scss";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logoutInitiate());
  };

  return (
    <div>
      <header className="header">
        {user ? (
          <button className="header__logout-btn" onClick={onLogout}>
            Выйти
          </button>
        ) : (
          <Link to="/login">
            <button className="header__login-btn">Войти</button>
          </Link>
        )}
      </header>
    </div>
  );
};

export default Header;
