import React from "react";
import { Link } from "react-router-dom";
import "./user-not-login.scss";

const UserNotLogin = () => {
  return(
    <div className="user">
      <h2 className="user__title">Похоже вы не авторизованы</h2>
      <h3 className="user__desc">
        Если у вас имеется учётная запись, пожалуйста <Link to="/login">войдите</Link>
      </h3>
      <h3 className="user__desc">
        Если у вас нет учётной записи, пожалуйста{" "}
        <Link to="/register">зарегистрируйтесь</Link>
      </h3>
    </div>
  )
};

export default UserNotLogin;
