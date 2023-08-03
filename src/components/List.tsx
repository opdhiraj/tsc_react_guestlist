import React from "react";
// import first from "../assets/first.jpg";
// import sec from "../assets/sec.jpg";
import { PeopleState as PeopleProps } from "../App";

// interface PeopleProps {
//   people: {
//     name: string;
//     age: number;
//     url: string;
//     note?: string;
//   }[];
// }
const List = ({ people }: PeopleProps) => {
  //for displayinfg people

  const renderList = (): JSX.Element[] => {
    return people.map((p, index) => {
      return (
        <li key={index} className="List">
          <div className="List-header">
            <img src={p.url} alt={p.name} className="List-img" />
            <h2>{p.name}</h2>
          </div>
          <p>{p.age}</p>
          <p className="List-note">{p.note}</p>
        </li>
      );
    });
  };
  return <ul>{renderList()}</ul>;
};

export default List;
