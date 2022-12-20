import Box from 'components/Box/Box';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { Button, Input } from './FeedbackOptions.styled';

class FeedbackOptions extends Component {
  state = {
    feedback: '',
  };

  static propTypes = {
    options: PropTypes.shape({
      bad: PropTypes.func.isRequired,
      neutral: PropTypes.func.isRequired,
      good: PropTypes.func.isRequired,
    }),
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  onSubmitHandler = evt => {
    evt.preventDefault();
    const name = evt.target.elements.feedback.value;
    this.setState({ feedback: '' });
    this.props.onLeaveFeedback(name);
  };

  onChangeHandler = evt => {
    this.setState({ feedback: evt.target.value });
  };

  render() {
    const { options } = this.props;
    const { feedback } = this.state;

    return (
      <form onSubmit={this.onSubmitHandler}>
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
                  onChange={this.onChangeHandler}
                />
                <Icon size="72" />
              </label>
            );
          })}
        </Box>
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}

export default FeedbackOptions;
