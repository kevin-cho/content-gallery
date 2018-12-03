import React from 'react';
import PropTypes from 'prop-types';
import ContentDetailsModal from '../components/ContentDetailsModal';
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
        <img src={data.picture} alt="tile" className="tile" onClick={this.handleOpen} />
        <ContentDetailsModal open={this.state.open} onHide={this.handleClose} data={data} />
      </>
    );
  }
}

Tile.propTypes = propTypes;

export default Tile;
