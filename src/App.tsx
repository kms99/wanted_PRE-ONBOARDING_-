import React from 'react';
import Form from './components/form/Form';
import List from './components/list/List';
import { SectionType } from './types/enums';
import Nav from './components/nav/Nav';

function App() {
  return (
    <div>
      <h1>WANTED PRE-ONBOARDING PRE-MISSION - TODO LIST</h1>
      <Form />
      <Nav />
      <List sectionInfo={SectionType.DONE} />
      <List sectionInfo={SectionType.NOT_DONE} />
    </div>
  );
}

export default App;
