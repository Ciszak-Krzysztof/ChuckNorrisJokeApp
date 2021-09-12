import Card from "./components/UI/Card";
import Image from "./components/Layout/Image";
import Joke from "./components/Layout/Joke";
import JokeForm from "./components/Layout/JokeForm";
import SaveJokes from "./components/Layout/SaveJokes";
import { useState, useEffect } from "react";

function App() {
  const [chuckJoke, setChuckJoke] = useState<string>("");
  const [isChuck, setIsChuck] = useState<boolean>(false);

  useEffect(() => {
    const fetchJoke = async () => {
      const response = await fetch("http://api.icndb.com/jokes/random");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      setChuckJoke(responseData.value.joke);
    };

    fetchJoke().catch((error) => {
      console.log(error.message);
    });
  }, []);

  return (
    <Card>
      <Image jokeName={isChuck} />
      <Joke joke={chuckJoke} />
      <JokeForm onDrawJoke={setChuckJoke} onDrawImage={setIsChuck} />
      <SaveJokes />
    </Card>
  );
}

export default App;
