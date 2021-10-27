import PropTypes from "prop-types";
import Button from "./Button"; //button can be imported or just written directly

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>

      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};
Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  //makes it so the prop type should be a string, returns an error if not
  title: PropTypes.string,
};

//CSS inline
// const headingStyle = {
//     color: "red", backgroundColor: "black"
// }
export default Header;
