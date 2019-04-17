import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button';

const pokedexMode = ({ show, movesModeButtonPressed }) => {
  debugger;
  if (!show) {
    return null;
  }
  return (
    <div>
      <Button buttonText="moves" show={true} onClickFunction={movesModeButtonPressed} />
    </div>
  );
};

pokedexMode.propTypes = {
  show: PropTypes.bool.isRequired,
  movesModeButtonPressed: PropTypes.func,
};

export default pokedexMode;
