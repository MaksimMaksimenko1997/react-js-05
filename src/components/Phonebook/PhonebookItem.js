import React from "react";
import PropTypes from "prop-types";
import s from "./Phonebook.module.css";

const PhonebookItem = ({ contacts={name:"",number:""}, id, onDelete }) => {
const contact = contacts.find(item => item.id === id) || {};
  return (
    <>
      <span>
        {contact.name} : {contact.number}
      </span>
      <button type="button" className={s.close+" btn"} onClick={() => {
        onDelete(id)
        }}>
        +
      </button>
    </>
  );
};

PhonebookItem.propTypes = {
  contacts: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PhonebookItem;
