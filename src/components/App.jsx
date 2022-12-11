import { Component } from 'react';
import { ImHappy2, ImNeutral2, ImSad2 } from 'react-icons/im';
import Box from './Box/Box';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

const OPTIONS = {
  good: ImHappy2,
  neutral: ImNeutral2,
  bad: ImSad2,
};

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  onLeaveFeedback = name => {
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  render() {
    const { bad, neutral, good } = this.state;
    return (
      <Box
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding={3}
      >
        <Section title="Please leave feedback" bg="rgb(243, 246, 249)">
          <FeedbackOptions
            options={OPTIONS}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {bad > 0 || neutral > 0 || good > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no any feedback" />
          )}
        </Section>
      </Box>
    );
  }
}
