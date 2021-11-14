import React, {useState} from "react";
import { useDispatch } from "react-redux";
import {contactEdit} from "../../actions";
import "./contact-list-item.scss";

const ContactListItem = (props) => {
  const {id, username, email, onDelete } = props;
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState(username);
  const [emailname, setEmailName] = useState(email);
  const dispatch = useDispatch();

  const onSave = (id) => {
    const editEl = {
      id: id,
      username: name,
      email: emailname,
    };
    dispatch(contactEdit(editEl));
  };

  const onEdit = () => {
    setVisible(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onSave(id);
    setVisible(false);
  };

  if(visible) {
    return (
      <form onSubmit={onSubmit}>
        <div className="edit__block">
          <div className="edit__block-input">
            <input
              type="text"
              required
              value={name}
              placeholder="Введите имя"
              onChange={(e) => setName(e.target.value)}>
            </input>
            <input
              type="text"
              required
              value={emailname}
              placeholder="Введите почту"
              onChange={(e) => setEmailName(e.target.value)}>
            </input>
          </div>
        </div>
        <button className="edit__btn">
          Сохранить
        </button>
      </form>
    )
  };

  return (
    <div className="contact__item-block">
      <p className="contact__author">{name} | {emailname}</p>
      <div className="contact__block-btn">
        <button
          onClick={() => onEdit()}
          className="contact__btn">
          Ред.
        </button>
        <button
          onClick={onDelete}
          className="contact__btn">
          Удалить
        </button>
      </div>
    </div>
  )
};

export default ContactListItem;
