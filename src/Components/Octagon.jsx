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
`;

const Octagon = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	overflow: hidden;
	transform: rotate(45deg);
	background: #777;

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
	position: absolute;
	z-index: 10;
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
`;

const Span = styled.span``;

export default ({ width, title, text, Image, src }) => {
	return (
		<Wrapper>
			<OctagonWrap width={width}>
				<Octagon src={src} />
				<IconContain>{Image}</IconContain>
			</OctagonWrap>
			<TextContain>
				<Title>{title}</Title>
				<Span>{text}</Span>
			</TextContain>
		</Wrapper>
	);
};
