import "./App.css";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import MovieList from "./components/MovieList/MovieList";
import MyNavBar from "./components/MyNavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
	
	return (
		<BrowserRouter>
			<div className='App'>
				<MyNavBar />
				{/* <MovieList movies={movies}/> */}
				<Switch>
					<Route path='/MovieInfo/:movieId'>
						<MovieInfo />
					</Route>
					<Route path='/' component={MovieList} />
						
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;