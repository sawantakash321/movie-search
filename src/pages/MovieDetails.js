import React, { useEffect } from 'react'
import './movieDetails.css'
import { useParams } from 'react-router-dom'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { getMovieDetailsAction } from "../actions";
import { pathOr, isEmpty } from 'ramda'


const MovieDetails = (props) => {
	const { imdbID } = useParams()
	const { details, getMovieDetails } = props
	const { Poster, Title, Genre, Plot, Awards, BoxOffice, Metascore, Ratings, imdbVotes} = details

	useEffect(() => {
		if(isEmpty(details)) {
			getMovieDetails(imdbID)
		}
	})


	return (
		<div className="container">
			<div className="box image">
				<img className="poster" src={Poster} alt="Movie Poster"></img>
			</div>
			<div className="box content">
				<p>{`Title:  ${Title}`}</p>
				<p>{`Genre:  ${Genre}`}</p>
				<p>{`Plot:  ${Plot}`}</p>
			</div>
			<div className="box awards">{`Awards:  ${Awards}`}</div>
			<div className="box office">{`Box Office:  ${BoxOffice}`}</div>
			<div className="box meta">{`Metascore:  ${Metascore}`}</div>
			<div className="box rating">
				Ratings
				<ul>
					{Ratings && Ratings.map((rating, index) => {
						return (
						<li key={index}>{`${rating.Source} --- ${rating.Value}`}</li>
						)
					})}
				</ul>
			</div>
			<div className="box votes">{`Imdb Votes:  ${imdbVotes}`}</div>
		</div>
	)
}

const mapStateToProps = state => {
  return {
		details: pathOr({}, ['entities', 'movies', 'details'], state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMovieDetails: imdbID => {
      dispatch(getMovieDetailsAction.request(imdbID));
		}
  }
}

MovieDetails.propTypes = {
  details: PropTypes.object,
  getMovieDetails: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MovieDetails));


