import Box from 'components/Box/Box';
import PropTypes from 'prop-types';

const Section = ({ title, bg, children }) => {
  // console.log(children);
  return (
    <Box
      as="section"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding={5}
      gridGap={3}
      minWidth="sectionBox"
      bg={bg}
      boxShadow="rgb(0 0 0 / 20%) 0px 3px 1px -2px,
        rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px"
    >
      <h2>{title}</h2>
      {children}
    </Box>
  );
};

Section.propTypes = {
  bg: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Section;
