import React from "react";
import styled from "styled-components";
import Thumbnail from "./Thumbnail";
import { names } from "../Contains";

const Wrapper = styled.div`
	height: 100%;
	padding-bottom: 70px;
	background-color: #f5f5f5;
`;

const Header = styled.header`
	padding: 40px 0;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 30px 0;
`;

const Title = styled.h1`
	font-size: 30pt;
`;

const Underline = styled.div`
	margin-top: 10px;
	width: 80px;
	height: 5px;
	background: black;
`;

const Contain = styled.div`
	position: relative;
	width: 90%;
	height: 100%;
	margin: 0 auto;
	margin-bottom: 30px;
`;

const Projects = styled.div`
	min-height: 200px;
	display: grid;
	grid-template-columns: repeat(3, auto);
`;

export default ({ id }) => {
	return (
		<Wrapper id={id}>
			<Header>
				<Title>PROJECTS</Title>
				<Underline />
			</Header>
			<Contain>
				<Projects>
					{names.map((i) => (
						<Thumbnail key={i.id} src={i.src} />
					))}
				</Projects>
			</Contain>
		</Wrapper>
	);
};
