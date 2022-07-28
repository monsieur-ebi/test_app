import PropTypes from "prop-types";
import { authenticate } from "../Auth";

const Button = ({ text, color }) => {
  return (
    <>
      <button onClick={() => authenticate()} type="button">
        {text}
      </button>
    </>
  );
};

Button.defaultProptypes = {
  text: "Default",
  color: "#5546FF",
};

Button.propType = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
