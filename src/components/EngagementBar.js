import React from 'react';
import PropTypes from 'prop-types';
import { Glyphicon } from 'react-bootstrap';
import _ from 'lodash';
import './EngagementBar.css';

const propTypes = {
  likes: PropTypes.number,
  comments: PropTypes.number,
};

const EngagementBar = ({ likes, comments }) => (
  <div className="engagement-bar">
    {!_.isUndefined(likes) &&
      <div className="engagement-container">
        <Glyphicon glyph="heart" className="heart" />
        <span>{likes}</span>
      </div>
    }
    {!_.isUndefined(comments) &&
      <div className="engagement-container">
        <Glyphicon glyph="comment" className="comment" />
        <span>{comments}</span>
      </div>
    }
  </div>
);

EngagementBar.propTypes = propTypes;

export default EngagementBar;
