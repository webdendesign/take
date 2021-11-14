import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { v4 as uuidv4} from "uuid";
import { contactAdded } from "../../actions";
import "./item-add-form.scss";

const ItemAddForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const visible = useSelector((state) => state.status.addForm);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (name.trim() ==="" || email.trim() === "") {
      alert("Enter name or email")
    } else {
      const newContact = {
        id: uuidv4(),
        username: name,
        email,
      }
      dispatch(contactAdded(newContact));
      setName("");
      setEmail("");
    }
  }

  return (visible) ?
    <form className="add__form" onSubmit={onSubmit}>
      <div className="add__block">
        <div className="add__block-input">
        <input type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Введите имя"
              value={name} required/>
        <input type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Введите почту"
              value={email} required/>
        </div>
      </div>
      <div className="add__block-btn">
        <button className="add__btn">Добавить контакт</button>
      </div>
    </form> : null
}

export default ItemAddForm;
