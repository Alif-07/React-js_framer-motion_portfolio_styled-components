import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
	width: 16rem;
	height: 40vh;
	background-color: ${(props) => props.theme.text};
	color: ${(props) => props.theme.body};
	padding: 1.5rem 2rem;
	margin-right: 8rem;
	border-radius: 0 50px 0 50px;
	flex-direction: column;
	justify-content: space-around;
	border: 1px solid ${(props) => props.theme.body};
	transition: all 0.2s ease;

	&:hover {
		background-color: ${(props) => props.theme.body};
		color: ${(props) => props.theme.text};
		border: 1px solid ${(props) => props.theme.text};
	}
`;
const Title = styled.h2`
	font-size: calc(1em + 0.5rem);
`;

const Card = (props) => {
	const { id, name, description, tags, demo, github } = props.data;

	return (
		<Box key={id}>
			<Title>{name}</Title>
		</Box>
	);
};

export default Card;
