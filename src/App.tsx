import React from "react";
import "./App.scss";
import { Sidebar } from "./sidebar/Sidebar";

function App() {
  const people = [
    { name: "Саша", age: 25, budget: 40000 },
    { name: "Кеша", age: 22, budget: 20000 },
    { name: "Леша", age: 15, budget: 50000 },
    { name: "Яна", age: 27, budget: 30000 },
    { name: "Алена", age: 35, budget: 80000 },
    { name: "Марина", age: 32, budget: 10000 },
    { name: "Олег", age: 26, budget: 54000 },
  ];

  const group = [
    { name: "Саша", gender: "м", age: 22 },
    { name: "Леха", gender: "м", age: 32 },
    { name: "Катя", gender: "ж", age: 12 },
    { name: "Борис", gender: "м", age: 35 },
    { name: "Настя", gender: "ж", age: 33 },
    { name: "Гена", gender: "м", age: 17 },
    { name: "Лидия", gender: "ж", age: 19 },
    { name: "Света", gender: "ж", age: 18 },
    { name: "Аскыл", gender: "м", age: 14 },
    { name: "Бокка", gender: "м", age: 39 },
  ];

  const numbers = [1, 2, 3];

  //forEach
  // people.forEach((person) => console.log(person));

  //map
  // const newPeople = people.map((person) => `${person.name} (${person.age}) `);
  // console.log(newPeople);

  //filter;
  // const adults = people.filter((person) => person.age >= 18);
  // console.log(adults);

  // reduce
  // const amount = people.reduce((total, person) => total + person.budget, 0);
  // console.log(amount);

  //find
  // const igor = people.find((person) => person.name === "Саша");
  // console.log(igor);

  //findIndex
  // const igorIndex = people.findIndex((person) => person.name === "Олег");
  // console.log(igorIndex);

  //=========group

  // group.forEach((member) => console.log(member));

  // const secondGroup = group.map(
  //   (member) => `${member.name} ${member.age} (${member.gender})`
  // );
  // console.log(secondGroup);

  // const women = group.filter((member) => member.gender == "ж");
  // console.log(women);

  // const amount = group.reduce((age, member) => age + member.age, 0);
  // console.log(amount);

  // const lida = group.find((lida) => lida.name === "Лидия");
  // console.log(lida);

  // const lidaIndex = group.findIndex((member) => member.name === "Лидия");
  // console.log(lidaIndex);

  // const splice = group.splice(0, 1);
  // console.log(group);

  // const slice = group.slice(1);
  // console.log(slice);

  // let jj = numbers.indexOf(1);
  // console.log(jj);

  return (
    <div className="App">
      <div
        className="App-header"
        style={{
          color: "red",
          fontSize: 40,
        }}
      >
        HEADER
      </div>
      <div className="App-main">
        <Sidebar />
        <div className="App-content"></div>
      </div>
    </div>
  );
}

export default App;
