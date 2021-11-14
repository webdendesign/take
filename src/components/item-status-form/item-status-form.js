import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {statusAddForm} from "../../actions";
import "./item-status-form.scss";

const ItemStatusForm = () => {
  const visible = useSelector((state) => state.status.addForm);
  const dispatch = useDispatch();

  const onFormClick = () => {
    dispatch(statusAddForm(visible));
  };

  return (
    <div className="form">
      <button type="button"
              className="form__btn"
              onClick={() => onFormClick()}>Добавить контакт
      </button>
    </div>
  )
};

export default ItemStatusForm;
