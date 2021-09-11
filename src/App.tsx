import React from "react";
import Card from "./components/UI/Card";
import Image from "./components/Layout/Image";
import Joke from "./components/Layout/Joke";
import JokeForm from "./components/Layout/JokeForm";
import SaveJokes from "./components/Layout/SaveJokes";

function App() {
  return (
    <Card>
      <Image />
      <Joke
        joke={`“If Chuck Norris were to travel to an alternate dimension in which there was another Chuck Norris and they both fight, they would both win”`}
      />
      <JokeForm name="Chuck Norris" />
      <SaveJokes />
    </Card>
  );
}

export default App;
