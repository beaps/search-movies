import React from 'react';

import { Title } from './components/Title'
import { SearchForm } from './components/SearchForm'

import './App.css';

function App() {
  return (
    <div className="App">
      <Title>Search Movies</Title>
      <SearchForm />
    </div>
  );
}

export default App;
