import React, { Component } from 'react';
import TileGroup from '../components/TileGroup';
import data from '../data.json';
import './Gallery.css';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: [],
    };
  }

  componentDidMount() {
    // TODO: call api to get response
    this.setState({ content: data });
  }

  render() {
    const { content } = this.state;

    return (
      <div className="gallery">
        <TileGroup data={content} />
      </div>
    );
  }
}

export default Gallery;
