import classes from "./Joke.module.css";

const Joke: React.FC<{ joke: string }> = (props) => {
  return <div className={classes.joke}>{props.joke}</div>;
};

export default Joke;
