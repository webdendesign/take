import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link, useHistory} from "react-router-dom";
import { loginInitiate, setErrorEmpty } from "../../actions";
import "./login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const {user, error} = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(setErrorEmpty());
    if (user) {
      history.push("/");
    }
  }, [dispatch, history, user]);

  const onLogin = (e) => {
    e.preventDefault();
    dispatch(loginInitiate(email, password));
  };

  return (
    <div className="login">
      <h2 className="login__title">Войти</h2>
      {error && <p className="login__error">{error}</p>}
      <form onSubmit={onLogin} className="login__form">
        <div className="login__block">
          <div className="login__block-input">
            <input
              type="text"
              value={email}
              placeholder="Exampl@gmail.com"
              onChange={(e) => setEmail(e.target.value)}>
            </input>
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}>
            </input>
          </div>
        </div>
        <button className="login__btn">Войти</button>
        <span className="login__link">
          <Link to="/register">Регистрация</Link>
        </span>
      </form>
    </div>
  )
};

export default Login;
