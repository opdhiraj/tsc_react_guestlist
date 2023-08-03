import React, { useState } from "react";
import { PeopleState as Props } from "../App";

interface PProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList = ({ people, setPeople }: PProps) => {
  const [inputBox, setInputBox] = useState({
    name: "",
    age: "",
    note: "",
    img: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputBox({ ...inputBox, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    if (!inputBox.name || !inputBox.age) return;
    setPeople([
      ...people,
      {
        name: inputBox.name,
        age: parseInt(inputBox.age),
        url: inputBox.img,
        note: inputBox.note,
      },
    ]);
    setInputBox({ name: "", age: "", note: "", img: "" });
  };

  //
  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="name"
        className="AddToList-input"
        value={inputBox.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder="age"
        className="AddToList-input"
        value={inputBox.age}
        name="age"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder=" image url"
        className="AddToList-input"
        value={inputBox.img}
        name="img"
        onChange={handleChange}
      />
      <textarea
        placeholder="note"
        className="AddToList-input"
        value={inputBox.note}
        name="note"
        onChange={handleChange}
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add to List
      </button>
    </div>
  );
};

export default AddToList;
