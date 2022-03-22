import React,{ useState } from 'react';
import Data from './components/Data';
import List from './components/List';
import './App.css';

function App() {
  const [people, setPeople] = useState(Data)
  return (
    <div className="container">
      <List people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
