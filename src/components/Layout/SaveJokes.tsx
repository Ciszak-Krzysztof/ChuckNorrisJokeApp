import { useState } from "react";
import classes from "./SaveJokes.module.css";

const SaveJokes: React.FC = () => {
  const [jokesAmount, setJokesAmount] = useState<number>(0);

  const decrementInput = () => {
    setJokesAmount((prevAmount) => {
      return prevAmount - 1;
    });
  };

  const incrementInput = () => {
    setJokesAmount((prevAmount) => {
      return prevAmount + 1;
    });
  };

  const inputHandler = (event: any) => {
    setJokesAmount(event.target.value);
  };

  return (
    <div>
      <div className={classes.flex}>
        <span
          className={`${classes.span} ${
            jokesAmount < 0 || jokesAmount > 100 ? classes.errorBox : ""
          }`}
        >
          <button
            className={`${classes.roundButton} ${
              jokesAmount !== 0 ? classes.activeButton : ""
            }`}
            onClick={decrementInput}
          >
            -
          </button>
          <input
            type="number"
            min={0}
            className={classes.input}
            value={jokesAmount}
            onChange={inputHandler}
          />
          <button
            className={`${classes.roundButton} ${
              jokesAmount !== 0 ? classes.activeButton : ""
            }`}
            onClick={incrementInput}
          >
            +
          </button>
        </span>
        <button
          className={`${classes.button} ${
            jokesAmount > 0 && jokesAmount <= 100 ? classes.active : ""
          } `}
        >
          Save Jokes
        </button>
      </div>
      {jokesAmount < 0 || jokesAmount > 100 ? (
        <p className={classes.error}>You can pick a number from 1 to 100.</p>
      ) : null}
    </div>
  );
};

export default SaveJokes;
