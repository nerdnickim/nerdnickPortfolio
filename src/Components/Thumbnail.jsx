import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import First from "../Routes/Projects/First";
import Second from "../Routes/Projects/Second";
import Third from "../Routes/Projects/Third";
import stateHandle from "./Hooks/stateHandle";

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

const H1 = styled.h1`
	padding: 5px 0;
	margin-bottom: 5px;
	font-size: 19px;
	font-weight: bolder;
	letter-spacing: 1.4px;
	text-align: center;
	line-height: 1.3;
	@media (max-width: 613px) {
		font-size: 16px;
	}
`;

const SpanContain = styled.div`
	position: absolute;
	top: 10px;
	margin-top: 10px;
	display: flex;

	@media (max-width: 613px) {
		span {
			font-size: 10px;
		}
	}
`;

const Span = styled.span`
	padding: 8px 5px;
`;

const Button = styled.button`
	margin-top: 20px;
	padding: 10px 5px;
	background-color: rgb(213, 126, 64);
	border-radius: 10px;
	&:hover {
		background-color: white;
		span {
			color: rgb(213, 126, 64);
		}
	}
	span {
		font-size: 16px;
		color: white;
	}
	transition: all 0.4s linear;

	@media (max-width: 613px) {
		span {
			font-size: 14px;
		}
	}
`;

export default ({ src, text, title, target }) => {
	const status = stateHandle();

	const html = document.querySelector("html");

	useEffect(() => {
		if (status.status.newwaveboys) {
			if (status.status.newwaveboys === true) {
				html.style.overflow = "hidden";
			}
		}
		if (status.status.instaWeb) {
			if (status.status.instaWeb === true) {
				html.style.overflow = "hidden";
			}
		}
		if (status.status.instaApp) {
			if (status.status.instaApp === true) {
				html.style.overflow = "hidden";
			}
		}
	});

	return (
		<>
			<Wrapper>
				<ClipContain>
					<ClipInner>
						<ClipFront>
							<Div src={src} />
						</ClipFront>
						<ClipBack>
							<H1>{title}</H1>
							<SpanContain>
								{text.map((t) => (
									<Span key={t.id}>{t.text}</Span>
								))}
							</SpanContain>
							<Button onClick={() => status.changeStatus(target)}>
								<Span>DETAIL</Span>
							</Button>
						</ClipBack>
					</ClipInner>
				</ClipContain>
			</Wrapper>
			{status.status.newwaveboys ? <First target={target} statusFn={status} /> : null}
			{status.status.instaWeb ? <Second target={target} statusFn={status} /> : null}
			{status.status.instaApp ? <Third target={target} statusFn={status} /> : null}
		</>
	);
};
