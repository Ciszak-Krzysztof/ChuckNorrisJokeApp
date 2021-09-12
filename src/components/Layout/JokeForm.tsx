import { useState } from "react";
import classes from "./JokeForm.module.css";

const JokeForm: React.FC<{
  onDrawJoke: React.Dispatch<React.SetStateAction<string>>;
  onDrawImage: React.Dispatch<React.SetStateAction<boolean>>;
}> = (props) => {
  const [category, setCategory] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("Chuck");
  const [lastName, setLastName] = useState<string>("Norris");
  const [isTouched, setIsTouched] = useState<boolean>(false);

  const selectCategoryHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCategory(event.target.value);
  };

  const isChuckHandler = () => {
    if (`${firstName} ${lastName}` !== "Chuck Norris") {
      props.onDrawImage(false);
    } else {
      props.onDrawImage(true);
    }
  };

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value.split(" ")[0]);
    if (event.target.value.split(" ")[1]) {
      setLastName(event.target.value.split(" ")[1]);
    } else {
      setLastName("");
    }
    setIsTouched(true);
    if (event.target.value.length === 0) {
      setFirstName("Chuck");
      setLastName("Norris");
      setIsTouched(false);
    }
  };

  const fetchUrl: string = `https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`;
  const fetchUrlCategory: string = `${fetchUrl}&limitTo=[${category}]`;

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const fetchJoke = async () => {
      const response: Response = await fetch(
        category.length === 0 ? fetchUrl : fetchUrlCategory
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      props.onDrawJoke(responseData.value.joke);
    };

    fetchJoke().catch((error) => {
      console.log(error.message);
    });

    isChuckHandler();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <select
          onChange={selectCategoryHandler}
          defaultValue="select"
          className={`${classes.form} ${classes.select} ${
            category === "" ? classes.gray : ""
          }`}
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
          className={`${classes.form} ${classes.input} ${
            !isTouched ? classes.gray : ""
          }`}
        ></input>
      </div>
      <button className={`${classes.form} ${classes.button}`}>
        Draw a random {`${firstName} ${lastName}`} Joke
      </button>
    </form>
  );
};

export default JokeForm;
