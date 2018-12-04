import React from 'react';
import PropTypes from 'prop-types';
import { Well } from 'react-bootstrap';
import _ from 'lodash';
import './TagList.css';

const propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const TagList = ({ tags }) => {
  const groupedTags = _.chain(tags)
    .groupBy(_.identity)
    .map(tag => <Well key={tag[0]} bsSize="sm" className="tag">{`${tag[0]} (${tag.length})`}</Well>)
    .value();
  return (
    <div className="tag-list">
      {groupedTags}
    </div>
  )
};

TagList.propTypes = propTypes;

export default TagList;
