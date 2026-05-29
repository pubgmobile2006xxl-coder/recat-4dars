import React from 'react';
import "./App.css"; 
import Header from './Companents/Header/Header';
import Section from './Companents/Main/Section/Section'
import Section2 from './Companents/Main/Section2/Section2'
import Section3 from './Companents/Main/Section3/Section';
const App = () => {
  return (
    <>
      <Header></Header>
      <Section></Section>
      <Section2></Section2>
      <Section3></Section3>
    </>
  );
};

export default App;