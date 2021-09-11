import ChuckImage from "../../assets/Chuck Norris photo@3x.png";
import classes from "./Image.module.css";

const Photo: React.FC = (props) => {
  return (
    <div>
      <img className={classes.image} src={ChuckImage} alt="chuck" />
    </div>
  );
};

export default Photo;
