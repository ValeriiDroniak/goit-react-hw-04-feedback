import { useState } from 'react';
import Box from 'components/Box/Box';
import PropTypes from 'prop-types';
import { Button, Input } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const [feedback, setFeedback] = useState('');

  const onSubmitHandler = evt => {
    evt.preventDefault();
    const name = evt.target.elements.feedback.value;
    setFeedback('');
    onLeaveFeedback(name);
  };

  const onChangeHandler = evt => {
    setFeedback(evt.target.value);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mb={3}
        gridGap={3}
      >
        {Object.entries(options).map(([name, Icon]) => {
          return (
            <label key={name}>
              <Input
                type="radio"
                value={name}
                name="feedback"
                checked={name === feedback}
                onChange={onChangeHandler}
              />
              <Icon size="72" />
            </label>
          );
        })}
      </Box>
      <Button type="submit">Submit</Button>
    </form>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    bad: PropTypes.func.isRequired,
    neutral: PropTypes.func.isRequired,
    good: PropTypes.func.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
