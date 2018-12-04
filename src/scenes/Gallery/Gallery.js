import React, { Component } from 'react';
import TileGroup from '../../components/TileGroup';
import FilterBar from './components/FilterBar';
import data from '../../data.json';
import './Gallery.css';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.updateData = this.updateData.bind(this);
    this.state = {
      data: [],
      searchResults: [],
    };
  }

  componentDidMount() {
    // TODO: call api to get response
    this.setState({
      data,
      searchResults: data,
    });
  }
  
  updateData(val) {
    this.setState({ searchResults: val });
  }

  render() {
    const { searchResults, data } = this.state;

    return (
      <div className="gallery">
        <FilterBar handleChange={this.updateData} data={data} />
        <TileGroup data={searchResults} />
      </div>
    );
  }
}

export default Gallery;
