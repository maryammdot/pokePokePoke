import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './styles';

const button = props => {
  const { buttonText, horizontalPositionInsideTheParent, onClickFunction, show } = props;

  if (!show) {
    return null;
  }

  return (
    <Button position={horizontalPositionInsideTheParent} onClick={onClickFunction}>
      {buttonText}
    </Button>
  );
};

button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  horizontalPositionInsideTheParent: PropTypes.string,
  onClickFunction: PropTypes.func,
  show: PropTypes.bool,
};

export default button;
