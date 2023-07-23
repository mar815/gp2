import React from 'react';
import HomePage from './components/HomePage';
import ItemList from './components/ItemList';

const App: React.FC = () => {
  return (
    <div className="container">
      <HomePage />
      <ItemList />
    </div>
  );
}

export default App;
