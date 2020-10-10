import React, { useState } from "react";
import "./App.css";
import { CheckboxList } from "./components/checkbox-list";

const list = [
  { label: "Item 1" },
  { label: "Item 2" },
  { label: "Item 3" },
  { label: "Item 4" },
];

function App() {
  const [state, setState] = useState({});

  const onChange = (items) => {
    setState(() => ({ ...state, ...items }));
  };

  console.table(state);

  return (
    <div className="App">
      <CheckboxList {...{ list, onChange }} />
    </div>
  );
}

export default App;
