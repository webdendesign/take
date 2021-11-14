import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { registerInitiate, setErrorEmpty } from "../../actions";
import "./register.scss";

const Register = () => {
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

  const onRegister = (e) => {
    e.preventDefault();
    dispatch(registerInitiate(email, password));
  };

  return (
    <div className="register">
      <h2 className="register__title">Регистрация</h2>
      {error && <p className="register__error">{error}</p>}
      <form onSubmit={onRegister} className="register__form">
        <div className="register__block">
          <div className="register__block-input">
            <input
              type="text"
              value={email}
              placeholder="Example@gmail.com"
              required
              onChange={(e) => setEmail(e.target.value)}>
            </input>
            <input
              type="password"
              value={password}
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}>
            </input>
          </div>
        </div>
        <button className="register__btn">Регистрация</button>
        <span className="register__link">
          <Link to="/login">Войти</Link>
        </span>
      </form>
    </div>
  )
}

export default Register;
