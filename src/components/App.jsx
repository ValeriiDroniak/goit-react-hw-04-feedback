import { useState } from 'react';
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

export const App = () => {
  const [{ good, neutral, bad }, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const onLeaveFeedback = name => {
    setState(prevState => ({ ...prevState, [name]: prevState[name] + 1 }));
  };

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
        <FeedbackOptions options={OPTIONS} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        {bad > 0 || neutral > 0 || good > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no any feedback" />
        )}
      </Section>
    </Box>
  );
};

// export const App = () => {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   const countTotalFeedback = () => good + neutral + bad;

//   const countPositiveFeedbackPercentage = () => {
//     return Math.round((good / countTotalFeedback()) * 100);
//   };

//   const onLeaveFeedback = name => {
//     switch (name) {
//       case 'good':
//         setGood(preGood => preGood + 1);
//         break;
//       case 'neutral':
//         setNeutral(preNeutral => preNeutral + 1);
//         break;
//       case 'bad':
//         setBad(preBad => preBad + 1);
//         break;

//       default:
//         return;
//     }
//   };

//   return (
//     <Box
//       display="flex"
//       flexWrap="wrap"
//       flexDirection="column"
//       justifyContent="center"
//       alignItems="center"
//       padding={3}
//     >
//       <Section title="Please leave feedback" bg="rgb(243, 246, 249)">
//         <FeedbackOptions options={OPTIONS} onLeaveFeedback={onLeaveFeedback} />
//       </Section>

//       <Section title="Statistics">
//         {bad > 0 || neutral > 0 || good > 0 ? (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={countTotalFeedback()}
//             positivePercentage={countPositiveFeedbackPercentage()}
//           />
//         ) : (
//           <Notification message="There is no any feedback" />
//         )}
//       </Section>
//     </Box>
//   );
// };
