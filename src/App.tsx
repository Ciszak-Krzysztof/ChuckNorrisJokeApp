import Card from "./components/UI/Card";
import Image from "./components/Layout/Image";
import Joke from "./components/Layout/Joke";
import JokeForm from "./components/Layout/JokeForm";
import SaveJokes from "./components/Layout/SaveJokes";
import { useState, useEffect } from "react";

function App() {
  const [chuckJoke, setChuckJoke] = useState<string>("");
  const [isChuck, setIsChuck] = useState<boolean>(true);

  useEffect(() => {
    const fetchJoke = async () => {
      const response = await fetch("https://api.icndb.com/jokes/random");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const joke = responseData.value.joke.replace(/&quot;/g, '"');

      setChuckJoke(joke);
    };

    fetchJoke().catch((error) => {
      console.log(error.message);
      setChuckJoke(
        "Something went wrong and we were not able to fetch joke for you"
      );
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
