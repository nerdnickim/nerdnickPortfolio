import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import Octagon from "../Components/Octagon";
import { Focus, Laptop, Energy, Communication } from "../Components/Icons";
import { aboutMe } from "../Contains";

const Wrapper = styled.div`
	padding-top: 30px;
	height: 100%;
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

const OctagonList = styled.div`
	position: relative;
	display: flex;
	justify-content: space-around;
	margin: 40px 0;
	padding: 10px 0;
`;

const Contain = styled.div`
	position: relative;
	width: 90%;
	height: 100%;
	margin: 0 auto;
`;

const Body = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;

	height: 100%;
	margin: 40px 0;
	padding: 10px 0;
`;

const PhotoContain = styled.section`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const SkillsContain = styled.section`
	width: 100%;
`;

const Ul = styled.ul`
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const Li = styled.li`
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: row;
	background: #eee;
	margin-bottom: 10px;
`;

const LiTitle = styled.span`
	width: 16%;
	text-align: center;
	background: #ebd7bd;
	height: 100%;
	padding: 5px 0;
	color: white;
	z-index: 1;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

const BarContain = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	span {
		z-index: 1;
		color: white;
		padding: 0 10px;
	}
`;

export default ({ id }) => {
	const mainRef = useRef(null);
	const [refState, setRefState] = useState();

	const GuageBar = ({ width }) => {
		return (
			<BarContain>
				<div
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						background: "rgb(140, 82, 41)",
						width,
						height: "100%",
					}}
				/>
				<span>{width}</span>
			</BarContain>
		);
	};

	useEffect(() => {
		const main = mainRef.current;
		setRefState(main);
	}, [refState]);

	return (
		<Wrapper id={id} ref={mainRef}>
			<Header>
				<Title>ABOUT</Title>
				<Underline />
			</Header>
			<Contain>
				<OctagonList>
					<Octagon
						width={refState?.clientWidth <= 613 ? 80 : 120}
						title={"집중력"}
						text={"우선 순위를 설정 후 높은 집중력을 발휘"}
						Image={<Focus size={refState?.clientWidth <= 613 ? 36 : 48} />}
					/>
					<Octagon
						width={refState?.clientWidth <= 613 ? 80 : 120}
						title={"끈기"}
						text={"어려운 문제라도 포기하지 않고 끝까지 해결"}
						Image={<Laptop size={refState?.clientWidth <= 613 ? 36 : 48} />}
					/>
					<Octagon
						width={refState?.clientWidth <= 613 ? 80 : 120}
						title={"향상심"}
						text={"계속하여 새로운 기술과 나은 해결법을 모색"}
						Image={<Energy size={refState?.clientWidth <= 613 ? 36 : 48} />}
					/>
					<Octagon
						width={refState?.clientWidth <= 613 ? 80 : 120}
						title={"커뮤니케이션"}
						text={"지속적인 의사소통를 통해 더 나은 방안 모색"}
						Image={<Communication size={refState?.clientWidth <= 613 ? 36 : 48} />}
					/>
				</OctagonList>
				<Body>
					<PhotoContain>
						<Octagon
							width={refState?.clientWidth <= 613 ? 140 : 200}
							src={aboutMe[0]}
							title={"김 의 교"}
							sub={`Email: kcdmlry@gmail.com
Tel: 010-8709-1352`}
							text={`
따분할 지언정 깊이 있게 생각하며 목표를 이루기 위한 
확고한 자세를 가지고 있는 개발자입니다.
								`}
						/>
					</PhotoContain>
					<SkillsContain>
						<Ul>
							<Li>
								<LiTitle>HTML</LiTitle>
								<GuageBar width={"90%"} />
							</Li>
							<Li>
								<LiTitle>CSS</LiTitle>
								<GuageBar width={"90%"} />
							</Li>
							<Li>
								<LiTitle>JS</LiTitle>
								<GuageBar width={"80%"} />
							</Li>
							<Li>
								<LiTitle>React</LiTitle>
								<GuageBar width={"70%"} />
							</Li>
							<Li>
								<LiTitle>NodeJS</LiTitle>
								<GuageBar width={"60%"} />
							</Li>
							<Li>
								<LiTitle>GraphQL</LiTitle>
								<GuageBar width={"50%"} />
							</Li>
						</Ul>
					</SkillsContain>
				</Body>
			</Contain>
		</Wrapper>
	);
};
