import ChuckImage from "../../assets/Chuck Norris photo@3x.png";
import unknownImage from "../../assets/Random photo@3x.png";
import classes from "./Image.module.css";

const Photo: React.FC<{ jokeName: boolean }> = (props) => {
  return (
    <div>
      <img
        className={props.jokeName ? classes.imageChuck : classes.imageUnknown}
        src={props.jokeName ? ChuckImage : unknownImage}
        alt="chuck"
      />
      <p>{props.jokeName}</p>
    </div>
  );
};

export default Photo;
