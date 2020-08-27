import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	height: 100vh;
`;

export default ({ id }) => {
	return <Wrapper id={id}>Projects</Wrapper>;
};
