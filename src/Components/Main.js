import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import PowerButton from '../subComponent/PowerButton';
import LogoComponent from '../subComponent/LogoComponent';
import SocialIcons from '../subComponent/SocialIcons';
import { NavLink } from 'react-router-dom';
import { YinYang } from './AllSvgs';
import Intro from './Intro';
import { motion } from 'framer-motion';

const MainContainer = styled.div`
	background: ${(props) => props.theme.body};
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	position: relative;

	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: 'Karla', sans-serif;
		font-weight: 500;
	}
`;
const Container = styled.div`
	padding: 2rem;
`;
const Contact = styled(NavLink)`
	color: ${(props) => props.theme.text};
	position: absolute;
	padding: 0.5rem;
	top: 2rem;
	right: calc(1rem + 2vw);
	text-decoration: none;
	z-index: 1;
`;
const BLOG = styled(NavLink)`
	color: ${(props) => props.theme.text};
	position: absolute;
	top: 50%;
	right: calc(1rem + 2vw);
	transform: rotate(90deg) translate(-50%, -50%);
	text-decoration: none;
	z-index: 1;
`;
const Work = styled(NavLink)`
	color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
	position: absolute;
	top: 47%;
	left: 2rem;
	transform: rotate(-90deg) translate(-50%, -50%);
	text-decoration: none;
	z-index: 1;
`;
const About = styled(NavLink)`
	color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
	text-decoration: none;
	z-index: 1;
`;
const Skills = styled(NavLink)`
	color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
	text-decoration: none;
	z-index: 1;
`;
const Connect = styled(NavLink)`
	color: ${(props) => props.theme.text};
	text-decoration: none;
	z-index: 1;
`;
const BottomBar = styled.div`
	position: absolute;
	bottom: 1rem;
	left: 0;
	right: 0;
	width: 100%;

	display: flex;
	justify-content: space-evenly;
`;
const rotate = keyframes`
from{
	transform: rotate(0);
}
to{
	transform: rotate(360deg);
}`;
const Center = styled.button`
	position: absolute;
	top: ${(props) => (props.click ? '85%' : '50%')};
	left: ${(props) => (props.click ? '92%' : '50%')};
	transform: translate(-50%, -50%);
	border: none;
	outline: none;
	background-color: transparent;
	cursor: pointer;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: all 1s ease;

	& > :first-child {
		animation: ${rotate} infinite 1.5s linear;
	}
	& > :last-child {
		display: ${(props) => (props.click ? 'none' : 'inline-block')};
		padding-top: 1rem;
	}
`;
const DarkDiv = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	background-color: #000;
	right: 50%;
	height: ${(props) => (props.click ? '100%' : '0%')};
	width: ${(props) => (props.click ? '50%' : '0%')};
	z-index: 1;

	transition: height 0.5s ease, width 1s ease 0.5s;
`;
const Main = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	return (
		<MainContainer>
			<Container>
				<DarkDiv click={click} />
				<PowerButton />
				<LogoComponent theme={click ? 'dark' : 'light'} />
				<SocialIcons theme={click ? 'dark' : 'light'} />
				<Center click={click}>
					<YinYang
						onClick={() => handleClick()}
						width={click ? 120 : 200}
						height={click ? 120 : 200}
						fill="currentColor"
					/>
					<motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
						Click Here
					</motion.h3>
				</Center>
				<Contact
					target="_blank"
					to={{
						pathname:
							'https://drive.google.com/file/d/1Rxht9_wna--iXTxfi0kCAxzSMtetPIB4/view?usp=sharing',
					}}
				>
					<motion.h3
						initial={{
							y: -200,
							transition: { type: 'spring', duration: 1.5, delay: 1 },
						}}
						animate={{
							y: 0,
							transition: { type: 'spring', duration: 1.5, delay: 1 },
						}}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						My Resume...
					</motion.h3>
				</Contact>
				<BLOG to="/blog">
					<motion.h2
						initial={{
							y: -200,
							transition: { type: 'spring', duration: 1.5, delay: 1 },
						}}
						animate={{
							y: 0,
							transition: { type: 'spring', duration: 1.5, delay: 1 },
						}}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						Blog
					</motion.h2>
				</BLOG>
				<Work click={click} to="/work">
					<motion.h2
						initial={{
							y: -200,
							transition: { type: 'spring', duration: 1.5, delay: 1 },
						}}
						animate={{
							y: 0,
							transition: { type: 'spring', duration: 1.5, delay: 1 },
						}}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						Work
					</motion.h2>
				</Work>
				<BottomBar>
					<About click={click} to="/about">
						<motion.h2
							initial={{
								y: 200,
								transition: { type: 'spring', duration: 1.5, delay: 1 },
							}}
							animate={{
								y: 0,
								transition: { type: 'spring', duration: 1.5, delay: 1 },
							}}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							About
						</motion.h2>
					</About>
					<Skills click={click} to="/skills">
						<motion.h2
							initial={{
								y: 200,
								transition: { type: 'spring', duration: 1.5, delay: 1 },
							}}
							animate={{
								y: 0,
								transition: { type: 'spring', duration: 1.5, delay: 1 },
							}}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							My Skills
						</motion.h2>
					</Skills>
					<Connect to="/connect">
						<motion.h2
							initial={{
								y: 200,
								transition: { type: 'spring', duration: 1.5, delay: 1 },
							}}
							animate={{
								y: 0,
								transition: { type: 'spring', duration: 1.5, delay: 1 },
							}}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							Connect
						</motion.h2>
					</Connect>
				</BottomBar>
			</Container>
			{click ? <Intro click={click} /> : null}
		</MainContainer>
	);
};

export default Main;
