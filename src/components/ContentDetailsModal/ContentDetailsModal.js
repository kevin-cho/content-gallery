import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import EngagementBar from '../EngagementBar';
import DetailsList from '../DetailsList';
import TagList from '../TagList';
import './ContentDetailsModal.css';

const propTypes = {
  open: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

const ContentDetailsModal = ({ open, onHide, data }) => {
  const { picture, likes, comments, user, tags } = data;

  return (
    <Modal show={open} onHide={onHide} className="content-details-modal" dialogClassName="size-lg">
      <Modal.Header closeButton />

      <Modal.Body>
        <div className="content-body">
          <div>
            <img src={picture} alt="content" className="preview" />
          </div>
          <div className="details-body">
            <EngagementBar likes={likes} comments={comments} />
            <DetailsList data={user} />
            <TagList tags={tags} />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

ContentDetailsModal.propTypes = propTypes;

export default ContentDetailsModal;
