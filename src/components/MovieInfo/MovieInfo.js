import React from "react";
import { Jumbotron, Container, Row, Col, Button } from "react-bootstrap";


import { Link, useParams } from "react-router-dom";
import "./MovieInfo.css";
import { list } from "../../const/Const";

function MovieInfo() {
	const { movieId } = useParams();
	const movie = list.find((movie) => movie.id === Number(movieId));
	return (
		<div>
			<Jumbotron fluid>
				<Container>
					<Row>
						<Col>
							<div> {movie.trailer} </div>
						</Col>
						<Col>
							<Button className='btnBack' variant='outline-success'>
								<Link className='btnlink' to='/'>
									Home
								</Link>
							</Button>
							<h1>{movie.title}</h1>
							<p>{movie.description}</p>
						</Col>
					</Row>
				</Container>
			</Jumbotron>
		</div>
	);
}

export default MovieInfo;