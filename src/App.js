import React from "react";

import InputForm from "./components/InputForm/InputForm";
import Filter from "./components/Filter/Filter";
import Phonebook from "./components/Phonebook/Phonebook.container";
import Container from "./components/Container/Container";

const App = () => (
  <>
    <Container title="Phonebook">
      <InputForm />
    </Container>
    <Container>
      <Filter />
      <Phonebook />
    </Container>
  </>
);

export default App;
