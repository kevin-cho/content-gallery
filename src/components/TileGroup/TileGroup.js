import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Tile from '../Tile';
import './TileGroup.css';

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    picture: PropTypes.string.isRequired,
  })).isRequired,
};

const TileGroup = ({ data }) => (
  <div className="tile-group">
    {data.map(item => <Tile key={_.uniqueId('tile')} data={item} />)}
  </div>
);

TileGroup.propTypes = propTypes;

export default TileGroup;
