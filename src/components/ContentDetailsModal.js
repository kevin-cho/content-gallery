import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Row, Col } from 'react-bootstrap';
import EngagementBar from './EngagementBar';
import DetailsList from './DetailsList';
import './ContentDetailsModal.css';

const propTypes = {
  open: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  // data: PropTypes.shape({
  //   picture: PropTypes.string.isRequired,
  // }).isRequired,
};

const ContentDetailsModal = ({ open, onHide, data }) => {
  const { picture, likes, comments, user } = data;

  return (
    <Modal show={open} onHide={onHide} className="content-details-modal" dialogClassName="size-lg">
      <Modal.Header closeButton />

      <Modal.Body>
        <Row className="content-body">
          <Col xs={12} sm={6}>
            <img src={picture} alt="content" className="preview" />
          </Col>
          <Col xs={12} sm={6}>
            <EngagementBar likes={likes} comments={comments} />
            <DetailsList data={user} />
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

ContentDetailsModal.propTypes = propTypes;

export default ContentDetailsModal;
