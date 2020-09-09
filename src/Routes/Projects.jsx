import React from "react";
import styled from "styled-components";
import Thumbnail from "../Components/Thumbnail";
import { names } from "../Contains";

const Wrapper = styled.div`
	padding-top: 30px;
	height: 100vh;
	padding-bottom: 70px;
	background-color: #f5f5f5;
`;

const Header = styled.header`
	padding: 40px 0 70px 0;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 30px 0;
`;

const Title = styled.h1`
	font-size: 30pt;
	@media (max-width: 613px) {
		font-size: 25pt;
	}
`;

const Underline = styled.div`
	margin-top: 10px;
	width: 80px;
	height: 5px;
	background: black;
	@media (max-width: 613px) {
		width: 60px;
	}
`;

const Contain = styled.div`
	position: relative;
	width: 100%;

	margin: 0 auto;
	margin-bottom: 30px;
`;

const Projects = styled.div`
	width: 90%;
	margin: 0 auto;
	min-height: 640px;
	display: grid;
	grid-template-columns: repeat(3, auto);
	@media (max-width: 613px) {
		min-height: 320px;
		grid-template-columns: repeat(2, auto);
	}
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
						<Thumbnail
							key={i.id}
							src={i.src}
							title={i.name}
							text={i.text}
							target={i.target}
						/>
					))}
				</Projects>
			</Contain>
		</Wrapper>
	);
};
