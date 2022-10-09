import PropTypes from 'prop-types';
import { FeedbackButtons, ButtonsWrapp } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onKlick }) => {
  const feedbackVariants = Object.keys(options);
  return (
    <ButtonsWrapp>
      {feedbackVariants.map(key => (
        <FeedbackButtons key={key} onClick={onKlick}>
          {key}
        </FeedbackButtons>
      ))}
    </ButtonsWrapp>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onKlick: PropTypes.func,
};

export default FeedbackOptions;
