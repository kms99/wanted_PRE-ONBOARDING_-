import React from 'react';
import Form from './components/form/Form';
import List from './components/list/List';
import { SectionType } from './types/enums';

function App() {
  return (
    <div>
      <h1>원티드 PRE-ONBOARDING PRE-MISSION - TODO LIST</h1>
      <Form />
      <List sectionInfo={SectionType.done} />
      <List sectionInfo={SectionType.notDone} />
    </div>
  );
}

export default App;
