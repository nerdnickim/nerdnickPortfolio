import React from "react";
import { HashRouter as Router } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "../Styles/GlobalStyle";
import PageContain from "../Routes/PageContain";

const Wrapper = styled.div``;

function App() {
	return (
		<Wrapper>
			<GlobalStyle />
			<Router>
				<PageContain />
			</Router>
		</Wrapper>
	);
}

export default App;
