import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './Themes';
import { Develope } from './AllSvgs';
import LogoComponent from '../subComponent/LogoComponent';
import SocialIcons from '../subComponent/SocialIcons';
import PowerButton from '../subComponent/PowerButton';
import ParticleComponent from '../subComponent/ParticleComponent';

const Box = styled.div`
	background-color: ${(props) => props.theme.body};
	width: 100vw;
	height: 100vh;
	position: relative;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

const Main = styled.div`
	border: 2px solid ${(props) => props.theme.text};
	color: ${(props) => props.theme.text};
	background-color: ${(props) => props.theme.body};
	padding: 2rem;
	width: 30vw;
	height: 60vh;
	z-index: 3;
	line-height: 1.5;
	cursor: pointer;
	font-family: 'Ubuntu Mono', monospace;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	&:hover {
		color: ${(props) => props.theme.body};
		background-color: ${(props) => props.theme.text};
	}
`;

const Title = styled.h2`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: calc(1em + 1vw);
	${Main}:hover & {
		& > * {
			fill: ${(props) => props.theme.body};
		}
	}
	& > *:first-child {
		margin-right: 1rem;
	}
`;

const Description = styled.div`
	color: ${(props) => props.theme.text};
	font-size: calc(0.6em + 1vw);
	padding: 0.5rem 0;

	${Main}:hover & {
		color: ${(props) => props.theme.body};
	}
	strong {
		margin-bottom: 1rem;
		text-transform: uppercase;
	}
	ul,
	p {
		margin-left: 2rem;
	}
`;
const Description2 = styled.div`
	color: ${(props) => props.theme.text};
	font-size: calc(0.6em + 1vw);
	padding: 6rem 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	${Main}:hover & {
		color: ${(props) => props.theme.body};
	}
	strong {
		margin-bottom: 1rem;
		text-transform: uppercase;
	}
	ul,
	p {
		margin-left: 2rem;
	}
`;

const AboutPage = () => {
	return (
		<ThemeProvider theme={darkTheme}>
			<Box>
				<LogoComponent theme="dark" />
				<SocialIcons theme="dark" />
				<PowerButton />
				<ParticleComponent theme="dark" />
				<Main>
					<Title>
						<Develope width={40} height={40} /> Frontend Developer
					</Title>
					<Description style={{ overflowY: 'hidden' }}>
						I'm a front-end developer located in Bangladesh. I love to create
						simple yet beautiful websites with great user experience. I'm
						interested in the whole frontend stack Like trying new things and
						building great projects. I believe everything is an Art when you put
						your consciousness in it.
					</Description>
				</Main>
				<Main>
					{/* <Title>
						<Develope width={40} height={40} /> Education
					</Title> */}
					<Description2>
						<strong>Bachelor of Computer Science</strong>
						<strong>Premier University</strong>
						<strong>BAF Shaheen College Chittagong</strong>
						<strong>Chittagong Government High School</strong>
					</Description2>
				</Main>

				{/* <BigTitle text="SKILLS" top="80%" right="30%" /> */}
			</Box>
		</ThemeProvider>
	);
};

export default AboutPage;
