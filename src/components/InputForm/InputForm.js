import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CSSTransition from "react-transition-group/CSSTransition";
import {Slide, toast, ToastContainer} from "react-toastify";
import actions from "../../redux/phonebook/phonebook-actions";

import s from "./InputForm.module.css";

class InputForm extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ).isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    displayError: false,
    name: "",
    number: "",
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  existError = ()=> {
    toast.error("Contact already in list", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    this.setState({displayError: true})
  } 
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, displayError } = this.state;
    const { contacts, onSubmit } = this.props;
    const sameContact = contacts.some(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );
    if (sameContact) {
     this.existError();
      this.reset();
      return;
    } else if (displayError) {
      this.setState({displayError: false})
    }
    onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number, displayError } = this.state;
    return (
      <>
       <CSSTransition in={displayError}>
          <ToastContainer
            transition={Slide}
            position="top-right"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            duration={250}
          />
        </CSSTransition>
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label} htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          onChange={this.handleChange}
          className={s.input}
          name="name"
          value={name}
          placeholder="Name"
          autoComplete="off"
          autoFocus
        />

        <label className={s.label} htmlFor="number">
          Number
        </label>
        <input
          id="number"
          type="text"
          onChange={this.handleChange}
          className={s.input}
          name="number"
          value={number}
          placeholder="Phone number"
          autoComplete="off"
        />
        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </form>
      </>
    );
  }
}
const mapStateToProps = ({ contacts: { contacts } }) => ({
  contacts,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({ name, number }) =>
    dispatch(actions.addContact({ name, number })),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
