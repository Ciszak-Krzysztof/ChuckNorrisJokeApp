import React from "react";
import "./App.css";
import Card from "./components/UI/Card";
import Image from "./components/Layout/Image";
import Joke from "./components/Layout/Joke";

function App() {
  return (
    <Card>
      <Image />
      <Joke
        joke={`“If Chuck Norris were to travel to an alternate dimension in which there was another Chuck Norris and they both fight, they would both win”`}
      />
      <h1>Chuck Norris app</h1>
    </Card>
  );
}

export default App;
