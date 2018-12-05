import React, { Component } from 'react';
import TileGroup from '../../components/TileGroup';
import FilterBar from './components/FilterBar';
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
    this.getContent()
      .then(({ data }) => {
        this.setState({
          data,
          searchResults: data,
        });
      })
      .catch(err => console.log(err));
  }

  getContent = async () => {
    const response = await fetch('/api/content');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

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
