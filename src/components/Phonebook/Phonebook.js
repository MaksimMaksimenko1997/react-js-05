import React from "react";
import PropTypes from "prop-types";
import CSSTransition from "react-transition-group/CSSTransition";
import TransitionGroup from "react-transition-group/TransitionGroup";

import PhonebookItem from "./PhonebookItem.container";

import s from "./Phonebook.module.css";

const Phonebook = ({ contacts }) => {
  return (
    <>
    <TransitionGroup component="ul" className={s.list}>
      {contacts.map((contact) => (
        <CSSTransition timeout={250} classNames={s}>
        <li className={s.item} key={contact.id}>
          <PhonebookItem id={contact.id} />
        </li>
      </CSSTransition>
      ))}
    </TransitionGroup>
    </>
  );
};
Phonebook.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};

export default Phonebook;
