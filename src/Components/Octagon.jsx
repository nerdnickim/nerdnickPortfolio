import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const OctagonWrap = styled.div`
	width: ${(props) => props.width}px;
	height: ${(props) => props.width}px;
	float: left;
	position: relative;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	svg {
		fill: rgb(140, 82, 41);
	}
	@media (max-width: 613px) {
		width: ${(props) => (props.width * 2) / 3}px;
		height: ${(props) => (props.width * 2) / 3}px;
	}
`;

const Octagon = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	overflow: hidden;
	transform: rotate(45deg);
	background: #ebd7bd;

	&:before {
		position: absolute;
		background-image: url(${(props) => props.src});
		background-size: cover;
		top: -3px;
		right: -3px;
		bottom: -3px;
		left: -3px;
		transform: rotate(-45deg);
		content: "";
		border: inherit;
	}
`;

const IconContain = styled.div`
	width: 48px;
	height: 48px;
	display: flex;
	align-items: center;
	position: absolute;
	z-index: 10;
	@media (max-width: 613px) {
		width: 36px;
		height: 36px;
	}
`;

const TextContain = styled.div`
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.h1`
	font-size: 1.5rem;
	margin-bottom: 10px;
	font-weight: bolder;
	@media (max-width: 613px) {
		font-size: 0.9rem;
	}
`;

const Span = styled.span`
	white-space: pre-wrap;
	text-align: center;
	line-height: 1.5;
	font-size: 12px;
	@media (max-width: 613px) {
		font-size: 10px;
	}
`;

const SubTitle = styled.h2`
	white-space: pre-wrap;
	text-align: center;
	line-height: 1.5;
	font-size: 16px;
	font-family: "Noto Sans KR", sans-serif;
	@media (max-width: 613px) {
		font-size: 13px;
	}
`;

export default ({ width, title, text, Image, src, sub }) => {
	return (
		<Wrapper>
			<OctagonWrap width={width}>
				<Octagon src={src} />
				<IconContain>{Image}</IconContain>
			</OctagonWrap>
			<TextContain>
				<Title>{title}</Title>
				<SubTitle>{sub}</SubTitle>
				<Span>{text}</Span>
			</TextContain>
		</Wrapper>
	);
};
