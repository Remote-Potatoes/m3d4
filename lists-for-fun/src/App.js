import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
const { Fragment } = React;

// IF STATEMENTS
// IF ELSE STATEMENTS
// LOOP OVER DATA
// Play with state with arrays (and actually change how the arrays look like)

const initialState = [
  {
    name: "Fancy",
    address: "Amsterdam",
    city: "Amsterdam",
    isApartment: false,
  },
  {
    name: "!Fancy",
    address: "Your beloved city, Berlin",
    city: "Berlin",
    isApartment: true,
  },
  {
    name: "Queen's Palace in London",
    address: "124 Buckingham Palace, ring twice just in case",
    city: "London",
    isApartment: false,
  },
  {
    name: "Sagrada Familia",
    address: "23223 Unfinished Lane",
    city: "In EESSpain",
    isApartment: false,
  },
  {
    name: "my hometown",
    address: "cheng gung 3rd road ", // THE SU(i dont know how to write in taiwanese) OF TAIWAN
    city: "NaNtou",
    isApartment: true,
  },
  {
    name: "the white house",
    address: "the orange street",
    city: "the green washington",
    isApartment: true,
  },
  {
    name: "gangehi island",
    address: "somewhere where there's cocunts and water",
    city: "no real city",
    isApartment: false,
  },
];

function HousesComponents() {
  const [arrOfHousingStructures, setArrOfHousingStructures] =
    useState(initialState);
  const [initialSort, setInitialSort] = useState("asc");

  function sort() {
    if (initialSort === "asc") {
      sortDescending();
      setInitialSort("desc");
      return;
    }
    sortAscending();
    setInitialSort("asc");
  }

  function sortAscending() {
    const copyOfArray = [...arrOfHousingStructures];

    copyOfArray.sort((a, b) => a.city.localeCompare(b.city));
    setArrOfHousingStructures(copyOfArray);
  }

  function sortDescending() {
    const copyOfArray = [...arrOfHousingStructures];

    copyOfArray.sort((a, b) => b.city.localeCompare(a.city));
    setArrOfHousingStructures(copyOfArray);
  }

  function addNewCity() {
    const newCity = {
      name: "albuquerque",
      address: "los pollos hermano",
      city: "new mexico",
      isApartment: false,
    };

    const newArr = arrOfHousingStructures.slice();

    const existsInStateArr = newArr.find(
      (house) => house.address === newCity.address
    );

    if (existsInStateArr) {
      return;
    }

    newArr.unshift(newCity);

    setArrOfHousingStructures([newCity, ...arrOfHousingStructures]);
  }

  function reset() {
    setArrOfHousingStructures(initialState);
    setInitialSort("asc");
  }

  return (
    <div>
      <button onClick={sort}>Sort cities {initialSort}ending</button>
      <button onClick={addNewCity}>Add a new city</button>
      <button onClick={reset}>Reset</button>
      {arrOfHousingStructures.map((house, index) => {
        return (
          <Fragment key={index}>
            <h1>Name: {house.name}</h1>
            <h2>Address: {house.address}</h2>
            <h3>City: {house.city}</h3>
          </Fragment>
        );
      })}
      {/* {{#each arrOfHousingStructures}}
      <p>{{this.name}}</p>
    {{/each}} */}
    </div>
  );
}

function App() {
  const isItChristmas = false;
  const daysSinceLastTimeDanielsBankWentOut = 0;

  // if (!isItChristmas) {
  //   return <div>I dont want to wait anymore</div>;
  // }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <HousesComponents />

        {/* {{#if isItChristmas}}

        <p>Its christmas time!!</p>
        {{/if}} */}
        {isItChristmas ? ( // if
          <p>Its christmas, ho ho ho</p> // do this
        ) : (
          // else
          <p>Its Halloween, buuuuuuh</p> // do this instead
        )}

        {isItChristmas ? (
          <div>Christmas tree</div>
        ) : 5 < 1 ? (
          <p>Wrong math</p>
        ) : (
          <p>This is halloween</p>
        )}

        {!isItChristmas ? <p>No need to build a tree</p> : null}

        {!isItChristmas && <div>No ho ho for you yet</div>}

        {daysSinceLastTimeDanielsBankWentOut && <div>Hello</div>}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
