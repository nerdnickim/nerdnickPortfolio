import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ExitComponent from "./ExitComponent";
import Image from "./Image";
import FatText from "./FatText";
import { Arrow } from "./Icons";

const Wrapper = styled.div`
	width: 100vw;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: #f8eee2;
	z-index: 20;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ExitContain = styled.div`
	position: absolute;
	top: 20px;
	right: 40px;
`;

const Contain = styled.div`
	width: 90%;
	height: 80%;
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
`;

const Body = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	margin-bottom: 10px;
`;

const Bottom = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const SkillInfo = styled.div`
	width: 60%;
	display: flex;
	flex-direction: column;
	font-weight: bolder;
`;

//In Body

const MainView = styled.div`
	width: 60%;
`;

const Infos = styled.div`
	display: flex;
	flex-direction: column;
	width: 40%;
	padding: 0 36px;
	line-height: 1.3rem;
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
	overflow-x: scroll;
	overflow-y: hidden;
	width: 100%;
	max-height: 90px;
	padding: 10px 4px;
`;

const Li = styled.li`
	max-width: 120px;
	min-width: 112px;
	margin: 6px 10px;
	cursor: pointer;
	opacity: ${(props) => (props.foc === true ? 0.3 : 1)};
	box-shadow: ${(props) => (props.foc === true ? `3px 4px 10px black` : "")};
	&:hover {
		box-shadow: 3px 4px 10px black;
	}
	transition: box-shadow 0.3s;
`;

const ArrowContain = styled.div`
	display: flex;
	position: absolute;
	width: 100%;

	justify-content: space-between;
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
const MainImage = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
`;

// In SkillView

const Skills = styled.div`
	display: flex;
`;

const H1 = styled.h1`
	font-size: 1.7rem;
	margin: 10px 20px;
`;

const Button = styled.button`
	width: 100%;
`;

//Bottom

const Links = styled.div`
	display: flex;
	flex-direction: column;
	align-self: flex-end;
`;

const Link = styled.a`
	${Span} {
		font-size: 1.4rem;
		transition: color 0.3s;
	}
	cursor: pointer;
	margin-bottom: 4px;
	&:hover {
		${Span} {
			color: #ebaf66;
		}
	}
`;

const Project = ({
	data,
	explan,
	textS,
	address,
	pageAddress,
	serverGit,
	targetS,
	statusFn,
}) => {
	const [state, setState] = useState({ uri: "", id: 0 });
	const listRef = useRef();

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
	}, [data]);

	return (
		<Wrapper>
			<ExitContain>
				<ExitComponent targetS={targetS} statusFn={statusFn} />
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
						</MainImage>
					</MainView>
					<Infos>
						{explan.map((e) => (
							<Info key={e.id}>
								<Span>{e.text}</Span>
							</Info>
						))}
					</Infos>
				</Body>
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
						{address && (
							<Link href={address} target="_blank">
								<Span>Go to GitHub</Span>
							</Link>
						)}
						{pageAddress && (
							<Link href={pageAddress} target="_blank">
								<Span>Go to Page</Span>
							</Link>
						)}
						{serverGit && (
							<Link href={serverGit} target="_blank">
								<Span>Go to ServerCode</Span>
							</Link>
						)}
					</Links>
				</Bottom>
			</Contain>
		</Wrapper>
	);
};

export default Project;
