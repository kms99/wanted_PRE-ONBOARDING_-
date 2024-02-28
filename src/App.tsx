import React from 'react';
import Form from './components/form/Form';
import List from './components/list/List';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';

function App() {
  return (
    <div>
      <Header />
      <Form />
      <Nav />
      <List />
    </div>
  );
}

export default App;
