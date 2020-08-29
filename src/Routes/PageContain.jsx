import React, { useRef } from "react";
import styled from "styled-components";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Menu from "../Components/Menu";

const Contain = styled.div``;

export default () => {
	const containRef = useRef();
	return (
		<Contain ref={containRef}>
			<Home id={"home"} />
			<About id={"about"} />
			<Projects id={"projects"} />
			<Contact id={"contact"} />
			<Menu containRef={containRef} />
		</Contain>
	);
};
