import React, { useState, createContext } from "react";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { boardDefault } from "./components/Words";

export const AppContext = createContext();

const App = () => {
  const [board, setBoard] = useState(boardDefault);
  return (
    <div className="App">
      <nav>
        <h1>Hello World!</h1>
      </nav>
      <AppContext.Provider value={{ board, setBoard }}>
        <Board />
        <Keyboard />
      </AppContext.Provider>
    </div>
  );
};

export default App;
