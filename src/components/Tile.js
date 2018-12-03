import React from 'react';
import PropTypes from 'prop-types';
import './Tile.css';

const propTypes = {
  url: PropTypes.string.isRequired,
};

const Tile = ({ url }) => (
  <img src={url} alt="tile" className="tile" />
);

Tile.propTypes = propTypes;

export default Tile;
