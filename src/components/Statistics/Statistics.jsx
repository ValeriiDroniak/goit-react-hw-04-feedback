import Box from 'components/Box/Box';
import PropTypes from 'prop-types';
import { ImHappy2, ImNeutral2, ImSad2 } from 'react-icons/im';
import { Counter, TotalCounter, Text } from './Statistics.styled';

const Statistics = ({ bad, neutral, good, total, positivePercentage }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
      padding={0}
      gridGap={0}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        mb={3}
        gridGap={3}
      >
        <p>
          <ImHappy2 size="72" color="green" />
          <Counter>{good}</Counter>
        </p>
        <p>
          <ImNeutral2 size="72" color="yellow" />
          <Counter display="block">{neutral}</Counter>
        </p>
        <p>
          <ImSad2 size="72" color="red" />
          <Counter>{bad}</Counter>
        </p>
      </Box>
      <div>
        <Text>
          Total:
          <TotalCounter>{total}</TotalCounter>
        </Text>
        <Text>
          Positive feedback:
          <TotalCounter>{positivePercentage}%</TotalCounter>
        </Text>
      </div>
    </Box>
  );
};

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
};

export default Statistics;
