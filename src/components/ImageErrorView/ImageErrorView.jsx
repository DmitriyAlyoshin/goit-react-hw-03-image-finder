import errorImage from 'assets/error-1.png';
import { ErrorImg, Text, Wrapper } from './ImageErrorView.styled';
import PropTypes from 'prop-types';

export default function ImageErrorView({ message }) {
  return (
    <Wrapper role="alert">
      <ErrorImg src={errorImage} width="240" alt="Error Image!" />
      <Text>{message}</Text>
    </Wrapper>
  );
}

ImageErrorView.propTypes = {
  message: PropTypes.string,
};
