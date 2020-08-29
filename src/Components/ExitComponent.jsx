import React from "react";
import styled from "styled-components";
import { Exit } from "./Icons";

const ExitContain = styled.button`
	display: flex;
	margin: 10px;
	padding: 2px;
	width: 38px;
	height: 38px;
	float: right;
	cursor: pointer;
	&:hover {
		svg {
			fill: #ebaf66;
			transition: fill 0.35s linear;
		}
	}
`;

export default ({ targetS, statusFn }) => {
	const html = document.querySelector("html");

	const handle = (targetS) => {
		statusFn.changeStatus(targetS);
		html.style.overflow = "auto";
	};
	return (
		<ExitContain onClick={() => handle(targetS)}>
			<Exit size={38} />
		</ExitContain>
	);
};
