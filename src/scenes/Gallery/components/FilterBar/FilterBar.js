import React from 'react';
import PropTypes from 'prop-types';
import { Typeahead } from 'react-bootstrap-typeahead';
import { Glyphicon, DropdownButton, MenuItem } from 'react-bootstrap';
import _ from 'lodash';
import './FilterBar.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const propTypes = {
  handleChange: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};

class FilterBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.state = {
      names: [],
      searchResults: [],
      sortType: '',
    };
  }

  componentDidUpdate(prevProps) {
    const { data } = this.props;

    if (data !== prevProps.data) {
      this.setState({
        names: _.chain(data).map('user.name').uniq().value(),
        searchResults: data,
      });
    }
  }

  handleSearch(val) {
    if (!_.isUndefined(val)) {
      const { sortType } = this.state;
      const { data, handleChange } = this.props;
      let fullData = data;

      if (sortType) {
        fullData = _.sortBy(data, sortType);
      }

      const filteredData = _.filter(fullData, item => item.user.name.toLowerCase().includes(val.toLowerCase()));
      this.setState({ searchResults: filteredData });
      handleChange(filteredData)
    }
  }

  handleSort(val) {
    const { searchResults } = this.state;
    const { handleChange } = this.props;
    this.setState({ sortType: val });

    handleChange(_.sortBy(searchResults, val));
  }

  render() {
    const { names, sortType } = this.state;

    return (
      <div className="filter-bar">
        <div className="input-group">
          <Typeahead
            placeholder="Search by name"
            options={names}
            onChange={([val]) => this.handleSearch(val)}
            onInputChange={this.handleSearch}
          />
          <span className="input-group-addon">
            <Glyphicon glyph="search" />
          </span>
        </div>

        <DropdownButton title="Sort by" id="dropdown-sortby">
          <MenuItem onClick={() => this.handleSort('user.name')}>Name</MenuItem>
          <MenuItem onClick={() => this.handleSort('user.age')}>Age</MenuItem>
          <MenuItem onClick={() => this.handleSort('likes')}>Likes</MenuItem>
          <MenuItem onClick={() => this.handleSort('comments')}>Comments</MenuItem>
        </DropdownButton>
        {sortType &&
          <div className="sort-type">{_.last(sortType.split('.'))}</div>
        }
      </div>
    );
  }
}

FilterBar.propTypes = propTypes;

export default FilterBar;
