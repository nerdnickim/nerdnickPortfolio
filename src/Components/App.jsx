import React, { useRef } from "react";
import { HashRouter as Router } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "../Styles/GlobalStyle";
import Menu from "./Menu";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Wrapper = styled.div``;

const Contain = styled.div``;

function App() {
	const containRef = useRef();

	return (
		<Wrapper>
			<GlobalStyle />
			<Router>
				<Contain ref={containRef}>
					<Home id={"home"} />
					<About id={"about"} />
					<Projects id={"projects"} />
					<Contact id={"contact"} />
				</Contain>
				<Menu containRef={containRef} />
			</Router>
		</Wrapper>
	);
}

export default App;
