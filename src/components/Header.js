import PropTypes from "prop-types";
import Button from "./Button"; //button can be imported or just written directly
import { useLocation } from "react-router-dom"; //hook //look at the route we are currently on

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>

      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
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
