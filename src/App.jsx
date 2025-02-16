import { useState } from 'react'

import './App.css'
import SwipeDeck from './assets/SwipeDeck'

function App() {
  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <SwipeDeck />
    </div>
  );
}

export default App;