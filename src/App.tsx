import React from 'react';
import Form from './components/form/Form';
import List from './components/list/List';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import * as St from './app.styled';

function App() {
  return (
    <St.Container>
      <Header />
      <Form />
      <Nav />
      <List />
    </St.Container>
  );
}

export default App;
