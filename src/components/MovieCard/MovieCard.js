import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MovieCard.css"
function MovieCard({ movie }) {
	
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant='top' src={movie.posterUrl} height='60%' />
			<Card.Body>
				<Card.Title>{movie.title}</Card.Title>
				<Card.Text>{movie.description}</Card.Text>
			</Card.Body>
			<Card.Footer>
				<Button
					className='btnsee'
					variant='outline-success'
					onClick={(e) => e.preventDefault()}
				>
					<Link to={`/MovieInfo/${movie.id}`}>See More</Link>
				</Button>
			</Card.Footer>
		</Card>
	);
}

export default MovieCard;