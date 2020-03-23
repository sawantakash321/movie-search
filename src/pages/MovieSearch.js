import React from 'react'
import "./movieSearch.css"
import Autosuggest from 'react-autosuggest';
import { escapeRegexCharacters } from '../helpers'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { getMovieSuggesionsAction, getMovieDetailsAction, clearSuggestionAction } from "../actions";
import { pathOr } from 'ramda'


const getSuggestionValue = suggestion => suggestion.Title;

const renderSuggestion = suggestion => (
  <div>
    {suggestion.Title}
  </div>
);

class MovieSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			value: ''
		};
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  onSuggestionsFetchRequested = ({ value }) => {
		const escapedValue = escapeRegexCharacters(value.trim());
		if (escapedValue === '') {
			return [];
		}
		this.props.getMovieSuggesions(value)
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.props.clearSuggestions()
	};

	onSuggestionSelected = (event, {suggestion}) => {
		this.props.getMovieDetails(suggestion.imdbID)
	}

  render() {
    const { value } = this.state;
		const { suggestions, error } = this.props

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Type a movie name',
      value,
      onChange: this.onChange
    };

    return (
			<div className='search__container'>
				<Autosuggest
					suggestions={suggestions}
					onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
					onSuggestionsClearRequested={this.onSuggestionsClearRequested}
					getSuggestionValue={getSuggestionValue}
					renderSuggestion={renderSuggestion}
					inputProps={inputProps}
					onSuggestionSelected={this.onSuggestionSelected}
				/>
				<div>
					{error}
				</div>
			</div>
    );
  }
}


const mapStateToProps = state => {
  return {
		suggestions: pathOr([], ['entities', 'movies', 'suggesions', 'Search'], state),
		error: pathOr('', ['entities', 'movies', 'error'], state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMovieDetails: query => {
      dispatch(getMovieDetailsAction.request(query));
		},
		getMovieSuggesions: query => {
			dispatch(getMovieSuggesionsAction.request(query));
		},
		clearSuggestions: () => {
			dispatch(clearSuggestionAction.request())
		}
  }
}

MovieSearch.propTypes = {
  suggesions: PropTypes.array,
  error: PropTypes.string,
  getMovieDetails: PropTypes.func.isRequired,
	getMovieSuggesions: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MovieSearch));
