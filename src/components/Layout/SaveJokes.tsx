import classes from "./SaveJokes.module.css";

const SaveJokes = () => {
  return (
    <div className={classes.flex}>
      <span className={classes.span}>
        <button className={classes.roundButton}>-</button>
        <input className={classes.input} />
        <button className={classes.roundButton}>+</button>
      </span>
      <button className={classes.button}>Save Jokes</button>
    </div>
  );
};

export default SaveJokes;
