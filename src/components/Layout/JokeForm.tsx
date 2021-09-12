import { useState } from "react";
import classes from "./JokeForm.module.css";

const JokeForm: React.FC = (props) => {
  const [category, setCategory] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("Chuck");
  const [lastName, setLastName] = useState<string>("Norris");

  const selectCategoryHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCategory(event.target.value);
  };

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value.split(" ")[0]);
    if (event.target.value.split(" ")[1]) {
      setLastName(event.target.value.split(" ")[1]);
    } else {
      setLastName("");
    }
    if (event.target.value.length === 0) {
      setFirstName("Chuck");
      setLastName("Norris");
    }
  };

  const fetchUrl = `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`;
  const fetchUrlCategory = `${fetchUrl}&limitTo=[${category}]`;

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const fetchJoke = async () => {
      const response = await fetch(
        category.length === 0 ? fetchUrl : fetchUrlCategory
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      console.log(responseData.value.joke);
      console.log(responseData);
    };

    fetchJoke().catch((error) => {
      console.log(error.message);
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <select
          onChange={selectCategoryHandler}
          defaultValue="select"
          className={`${classes.form} ${classes.select}`}
        >
          <option value="select" disabled>
            Select category
          </option>
          <option value="explicit">Explicit</option>
          <option value="nerdy">Nerdy</option>
        </select>
        <input
          onChange={inputHandler}
          placeholder="Impersonate Chuck Norris"
          className={`${classes.form} ${classes.input}`}
        ></input>
      </div>
      <button className={`${classes.form} ${classes.button}`}>
        Draw a random {`${firstName} ${lastName}`} Joke
      </button>
    </form>
  );
};

export default JokeForm;
