import React, { useRef, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './Themes';
import emailjs from 'emailjs-com';

import LogoComponent from '../subComponent/LogoComponent';
import SocialIcons from '../subComponent/SocialIcons';
import PowerButton from '../subComponent/PowerButton';
import ParticleComponent from '../subComponent/ParticleComponent';
import './Connect.css';

const Box = styled.div`
	background-color: ${(props) => props.theme.body};
	width: 100vw;
	height: 100vh;
	position: relative;
	overflow: hidden;
`;

const Main = styled.div`
	color: ${(props) => props.theme.text};
	padding: 1rem;
	width: 70vw;
	height: 70vh;
	z-index: 3;
	line-height: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: calc(0.6rem + 1vw);
	backdrop-filter: blur(4px);

	position: absolute;
	left: calc(5rem + 5vw);
	top: 5rem;
	font-family: 'Ubuntu Mono', monospace;
	font-style: italic;
`;
const StyledButton = styled.button`
	display: block;
	background-color: #fcf6f4;
	color: #000000;
	font-size: 1.2rem;
	border: 0;
	border-radius: 5px;
	height: 40px;
	padding: 0 10px;
	cursor: pointer;
	box-sizing: border-box;
	margin-bottom: 1rem;
`;

const AboutPage = () => {
	const formRef = useRef();
	const [done, setDone] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_qdzqpcw',
				'template_ngendeg',
				formRef.current,
				'user_PcQPKmv0ZMFHGBbhXv2bt'
			)
			.then(
				(result) => {
					console.log(result.text);
					setDone(true);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<ThemeProvider theme={darkTheme}>
			<Box>
				<LogoComponent theme="dark" />
				<SocialIcons theme="dark" />
				<PowerButton />
				<ParticleComponent theme="dark" />

				<Main>
					<div className="c">
						<p className="c-desc">Connect With me</p>

						<form ref={formRef} onSubmit={handleSubmit}>
							<input
								style={{ backgroundColor: '#333' }}
								type="text"
								placeholder="Name"
								name="user_name"
							/>
							<input
								style={{ backgroundColor: '#333' }}
								type="text"
								placeholder="Subject"
								name="user_subject"
							/>
							<input
								style={{ backgroundColor: '#333' }}
								type="text"
								placeholder="Email"
								name="user_email"
							/>
							<textarea
								style={{ backgroundColor: '#333' }}
								rows="4"
								placeholder="Message"
								name="message"
							/>
							<StyledButton type="submit">Send Message</StyledButton>
							{done && 'Thank You...'}
						</form>
					</div>
				</Main>
			</Box>
		</ThemeProvider>
	);
};

export default AboutPage;
