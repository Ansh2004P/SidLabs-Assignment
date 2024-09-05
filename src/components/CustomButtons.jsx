import PropTypes from "prop-types";

const CustomButtons = ({ content }) => {
  return (
    <button className="text-sky-700 px-2 rounded-md border border-sky-700 transition-all duration-300 hover:bg-sky-700 hover:text-white text-md">
      {content}
    </button>
  );
};

export default CustomButtons;

CustomButtons.propTypes = {
  content: PropTypes.string,
};
