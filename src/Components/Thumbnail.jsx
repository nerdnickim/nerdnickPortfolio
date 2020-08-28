import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
	position: relative;
	height: 100%;
`;

const ClipContain = styled.div`
    height: 100%;
	display: flex;
	flex-direction: column;
	&:hover {
		transform: rotateY(180deg);
	}
	transform-style: preserve-3d;
	transition: z-index 0.75s, transform 0.75s;
	z-index: 0
	perspective: 1000px
	&.flip {
		z-index:1;
	}
`;

const CardSlide = css`
	width: 100%;
	height: 100%;
	min-width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	backface-visibility: hidden;
`;

const ClipInner = styled.div`
	position: relative;
	height: 100%;
`;

const ClipFront = styled.div`
	${CardSlide}

	z-index:0;
`;

const ClipBack = styled.div`
	${CardSlide}
	position:absolute;
	top: 0;
	left: 0;
	background-color: #ebd7bd;
	transform: rotateY(-180deg);
	transition: all 0.75s linear;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px 2px;
	z-index: 1;
`;

const Div = styled.div`
	background-image: url(${(props) => props.src});
	background-size: auto 100%;
	background-position: center center;
	background-repeat: no-repeat;
	width: 100%;
	height: 100%;
`;

export default ({ src }) => {
	return (
		<Wrapper>
			<ClipContain>
				<ClipInner>
					<ClipFront>
						<Div src={src} />
					</ClipFront>
					<ClipBack>asdasdaasd</ClipBack>
				</ClipInner>
			</ClipContain>
		</Wrapper>
	);
};
