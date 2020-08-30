import React from "react";
import { HashRouter as Router } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
			<ToastContainer position="bottom-right" />
		</Wrapper>
	);
}

export default App;
