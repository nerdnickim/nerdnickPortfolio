import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ExitComponent from "./ExitComponent";
import Image from "./Image";
import FatText from "./FatText";
import { Arrow } from "./Icons";

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: #f8eee2;
	z-index: 20;
	display: flex;
	align-items: center;
	justify-content: center;
	@media (max-width: 613px) {
		overflow-y: scroll;
	}
`;

const ExitContain = styled.div`
	position: absolute;
	top: 20px;
	right: 40px;
	@media (max-width: 613px) {
		right: 20px;
	}
`;

const Contain = styled.div`
	position: absolute;
	top: 70px;
	left: 0;
	display: flex;
	flex-direction: column;
`;

const Span = styled.span`
	font-size: inherit;
`;

//In Contain

const Header = styled.header`
	padding: 16px 0;
	position: relative;
	width: 100vw;
`;

const Body = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	margin-bottom: 10px;
	justify-content: space-around;
	@media (max-width: 613px) {
		flex-direction: column;
	}
`;

const Bottom = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	@media (max-width: 613px) {
		justify-content: space-around;
		flex-direction: row;
		margin-top: 40px;
	}
`;

//In Body

const MainView = styled.div`
	position: relative;
	padding: 0 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (min-width: 620px) {
		width: 20%;
	}
`;

const Infos = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 40px;
	padding: 0 36px;
	line-height: 1.3rem;
`;

//Infos

const SkillInfo = styled.div`
	display: flex;
	flex-direction: column;
	font-weight: bolder;
`;

const Skills = styled.div`
	display: flex;
	@media (max-width: 613px) {
		flex-direction: column;
		div {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
		}
	}
`;

const Info = styled.div`
	font-size: 14px;
	margin-bottom: 5px;
	display: flex;
	${Span} {
		margin-left: 8px;
	}
	svg {
		fill: ;
	}
`;

// In Header

const ListContain = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const Ul = styled.ul`
	display: flex;
	overflow: scroll;
	width: 100%;
	padding: 10px 4px;
	padding: 10px 4px;
`;

const Li = styled.li`
	min-width: 50px;
	margin: 6px 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	opacity: ${(props) => (props.foc === true ? 0.3 : 1)};
	box-shadow: ${(props) => (props.foc === true ? `3px 4px 10px black` : "")};
	&:hover {
		box-shadow: 3px 4px 10px black;
	}
	transition: box-shadow 0.3s;

	@media (min-width: 620px) {
		max-width: 54px;
		max-height: 98px;
	}
`;

const ArrowContain = styled.div`
	position: absolute;
	display: flex;
	width: 100%;
	justify-content: space-between;
	@media (max-width: 613px) {
		padding: 0 10px;
	}
`;

const Left = styled.button`
	transform: rotate(180deg);
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: ${(props) => (props.state === 1 ? 0.3 : 1)};
	z-index: 2;
`;

const Right = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: ${(props) => (props.state === true ? 0.3 : 1)};
	z-index: 2;
`;

// In MainView
const MainImage = styled.div``;

//Public

const H1 = styled.h1`
	font-size: 2rem;
	margin: 10px 20px;
`;

const Button = styled.button`
	width: 100%;
`;

const Links = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 620px) {
		align-self: flex-start;
	}

	@media (max-width: 613px) {
		margin: 30px 0 0 20px;
		justify-content: space-around;
		height: 20vh;
	}
`;

const Link = styled.a`
	${Span} {
		font-size: 1.4rem;
		transition: color 0.3s;
	}
	cursor: pointer;
	margin-top: 20px;
	&:hover {
		${Span} {
			color: #ebaf66;
		}
	}
`;

const InfoContain = styled.div`
	max-height: 320px;
	height: 100%;
	line-height: 1.3rem;
`;

const ProjectApp = ({ data, explan, textS, address, serverGit, targetS, statusFn }) => {
	const [state, setState] = useState({ uri: "", id: 0 });
	const listRef = useRef();
	const mainRef = useRef(null);
	const [refState, setRefState] = useState();

	const viewHandle = (e, { id }) => {
		e.persist();
		e.preventDefault();

		if (e.target.src === undefined) {
			return;
		} else {
			setState((prev) => ({ ...prev, uri: e.target.src, id }));
		}
	};

	const rightHandle = (e) => {
		e.persist();
		e.preventDefault();

		const liTarget = listRef.current.childNodes;

		if (liTarget.length > state.id) {
			setState((prev) => ({ ...prev, id: state.id + 1 }));

			liTarget.forEach((i) =>
				i.id === JSON.stringify(state.id + 1)
					? setState((prev) => ({ ...prev, uri: i.firstChild.firstChild.firstChild.src }))
					: null
			);
		}
	};

	const leftHandle = (e) => {
		e.persist();
		e.preventDefault();

		const liTarget = listRef.current.childNodes;

		if (state.id === 1) {
			return;
		} else {
			setState((prev) => ({ ...prev, id: state.id - 1 }));

			liTarget.forEach((i) =>
				i.id === JSON.stringify(state.id - 1)
					? setState((prev) => ({ ...prev, uri: i.firstChild.firstChild.firstChild.src }))
					: null
			);
		}
	};

	useEffect(() => {
		setState((prev) => ({
			...prev,
			uri: data[0].src,
			id: data[0].id,
		}));
		const main = mainRef.current;
		setRefState(main);
	}, [data]);

	return (
		<Wrapper ref={mainRef}>
			<ExitContain>
				<ExitComponent
					targetS={targetS}
					statusFn={statusFn}
					size={refState?.clientWidth <= 613 ? 28 : 36}
				/>
			</ExitContain>
			<Contain>
				<Header>
					<ListContain>
						<Ul ref={listRef}>
							{data.map((u) => (
								<Li key={u.name} id={u.id} foc={u.id === state.id ? true : false}>
									<Button onClick={(e) => viewHandle(e, { id: u.id })}>
										<Image src={u.src} />
									</Button>
								</Li>
							))}
						</Ul>
					</ListContain>
				</Header>
				<Body>
					<MainView>
						<MainImage>
							<Image src={state.uri} />
						</MainImage>
						<ArrowContain>
							<Left onClick={leftHandle} state={state.id}>
								<Arrow size={24} />
							</Left>
							<Right
								onClick={rightHandle}
								state={state.id === data.length ? true : false}
							>
								<Arrow size={24} />
							</Right>
						</ArrowContain>
					</MainView>
					<Infos>
						<InfoContain>
							{explan.map((t) => (
								<Info key={t.id}>
									<Span>{t.text}</Span>
								</Info>
							))}
						</InfoContain>
						<Bottom>
							<SkillInfo>
								<H1>Skills</H1>
								<Skills>
									{textS.map((t) => (
										<FatText key={t.id} text={t.text} />
									))}
								</Skills>
							</SkillInfo>
							<Links>
								<Link href={address} target="_blank">
									<Span>Go to GitHub</Span>
								</Link>
								{serverGit && (
									<Link href={serverGit} target="_blank">
										<Span>Go to ServerCode</Span>
									</Link>
								)}
							</Links>
						</Bottom>
					</Infos>
				</Body>
			</Contain>
		</Wrapper>
	);
};

export default ProjectApp;
