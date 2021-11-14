import React from "react";
import SearchPanel from "../../search-panel";
import ItemAddForm from "../../item-add-form";
import ItemStatusForm from "../../item-status-form";
import "./form-container.scss";

const FormContaner = () => {
  return (
    <div className="form-container">
      <div className="form-container__search">
        <SearchPanel />
        <ItemStatusForm />
      </div>
      <ItemAddForm />
    </div>
  )
};

export default FormContaner;
