import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	border: 1px solid;
	border-radius: 10px;
	background-color: #2c2c2c;
	padding: 4px 10px;
	margin: 6px 8px;
`;

const Span = styled.span`
	color: #edeff7;
	font-size: 14px;
	letter-spacing: 2px;
`;

const FatText = ({ text }) => (
	<Wrapper>
		<Span>{text}</Span>
	</Wrapper>
);

export default FatText;
