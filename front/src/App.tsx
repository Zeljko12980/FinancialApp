import React from 'react';

import './App.css';
import CardList from './Components/CardList/CardList.tsx';
import Search from "./Components/Search/Search.tsx";

function App() {
  return (
    <div class="App">
      <Search/>
      <CardList/>
    </div>
  );
}

export default App;
