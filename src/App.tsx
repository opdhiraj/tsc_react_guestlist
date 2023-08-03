import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import first from "./assets/first.jpg";
import sec from "./assets/sec.jpg";
import AddToList from "./components/AddToList";

export interface PeopleState {
  people: {
    name: string;
    age: number;
    url?: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<PeopleState["people"]>([
    {
      name: "a",
      url: `${first}`,
      age: 30,
      note: "lorem epsom",
    },
    {
      name: "b",
      url: `${sec}`,
      age: 30,
      note: "lorem epsom lorem epsom lorem epsom",
    },
  ]);
  return (
    <div className="App">
      <h1>People Invited Here</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
