import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './Themes';

// import BigTitle from '../subComponents/BigTitlte';
import LogoComponent from '../subComponent/LogoComponent';
import SocialIcons from '../subComponent/SocialIcons';
import PowerButton from '../subComponent/PowerButton';
import { Work } from '../data/WorkData2';
import Card from '../subComponent/Card';
import { useEffect, useRef } from 'react';

const Box = styled.div`
	background-color: ${(props) => props.theme.body};

	height: 400vh;
	position: relative;
	overflow: hidden;
`;
const Main = styled.ul`
	position: fixed;
	top: 12rem;
	left: calc(10rem + 15vw);
	height: 40vh;
	display: flex;

	color: white;
`;

const WorkPage = () => {
	const ref = useRef(null);

	useEffect(() => {
		let element = ref.current;
		const rotate = () => {
			element.style.transform = `translateX(${-window.pageYOffset}px)`;
		};

		window.addEventListener('scroll', rotate);
		return () => window.removeEventListener('scroll', rotate);
	}, []);
	return (
		<ThemeProvider theme={darkTheme}>
			<Box>
				<LogoComponent theme="dark" />
				<SocialIcons theme="dark" />
				<PowerButton />
				<Main ref={ref}>
					{Work.map((d) => (
						<Card key={d.id} data={d} />
					))}
				</Main>
				{/* <BigTitle text="ABOUT" top="10%" left="5%" /> */}
			</Box>
		</ThemeProvider>
	);
};

export default WorkPage;
