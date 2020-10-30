import { connect } from "react-redux";


import Phonebook from "./Phonebook";

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  const filtered = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
  return filtered;
};

const mapStateToProps = ({ contacts: { contacts, filter } }) => {
  return {
    contacts: getVisibleContacts(contacts, filter),
  };
};


export default connect(mapStateToProps)(Phonebook);
