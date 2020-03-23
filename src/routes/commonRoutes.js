import Search from '../pages/MovieSearch'
import MovieDetails from "../pages/MovieDetails"

export const commonRoutes = [
  {
    path: "/",
    key: "root",
    exact: true,
    component: Search,
	},
	{
    path: "/movies/:imdbID",
		key: "imdbID",
		exact: true,
    component: MovieDetails
  }
];
