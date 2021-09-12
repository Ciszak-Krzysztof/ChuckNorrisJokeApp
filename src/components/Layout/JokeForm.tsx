import classes from "./JokeForm.module.css";

const JokeForm: React.FC<{ name: string }> = (props) => {
  return (
    <form>
      <div>
        <select
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
          placeholder="Impersonate Chuck Norris"
          className={`${classes.form} ${classes.input}`}
        ></input>
      </div>
      <button className={`${classes.form} ${classes.button}`}>
        Draw a random {props.name} Joke
      </button>
    </form>
  );
};

export default JokeForm;
