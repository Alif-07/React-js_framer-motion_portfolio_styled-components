import { Route, Switch } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './Components/Themes';
import Main from './Components/Main';
import AboutPage from './Components/AboutPage';
import BlogPage from './Components/BlogPage';
import WorkPage from './Components/WorkPage';
import Globalstyle from './globalStyles';
import MySkillPage from './Components/MySkillPage';

function App() {
	return (
		<>
			<Globalstyle />
			<ThemeProvider theme={lightTheme}>
				<Switch>
					<Route exact path="/" component={Main} />
					<Route exact path="/about" component={AboutPage} />
					<Route exact path="/blog" component={BlogPage} />
					<Route exact path="/work" component={WorkPage} />
					<Route exact path="/skills" component={MySkillPage} />
				</Switch>
			</ThemeProvider>
		</>
	);
}

export default App;
