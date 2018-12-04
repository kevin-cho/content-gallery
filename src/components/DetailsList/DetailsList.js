import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import './DetailsList.css';

const propTypes = {
  data: PropTypes.object.isRequired,
};

const DetailsList = ({ data }) => (
  <div className="details-list">
    {Object.keys(data).map(key => (
      <Row key={key}>
        <Col className="details-label" xs={3}>{key}: </Col>
        <Col xs={9}>{data[key]}</Col>
      </Row>
    ))}
  </div>
);

DetailsList.propTypes = propTypes;

export default DetailsList;
