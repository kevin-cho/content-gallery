import React from 'react';
import PropTypes from 'prop-types';
import ContentDetailsModal from '../ContentDetailsModal';
import './Tile.css';

const propTypes = {
  data: PropTypes.object.isRequired,
};

class Tile extends React.Component {
  constructor(props) {
    super(props);

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      open: false,
    };
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const { data } = this.props;

    return (
      <>
        <div style={{ backgroundImage: `url(${data.picture})`}} className="tile" onClick={this.handleOpen}>
          <div>Name: {data.user.name}</div>
          <div>Age: {data.user.age}</div>
          <div>Likes: {data.likes}</div>
          <div>Comments: {data.comments}</div>
        </div>
        <ContentDetailsModal open={this.state.open} onHide={this.handleClose} data={data} />
      </>
    );
  }
}

Tile.propTypes = propTypes;

export default Tile;
