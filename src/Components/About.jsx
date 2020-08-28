import React from "react";
import styled from "styled-components";
import Octagon from "./Octagon";
import { Focus, Laptop, Energy } from "./Icons";
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
`;

const Underline = styled.div`
	margin-top: 10px;
	width: 80px;
	height: 5px;
	background: black;
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
`;

const BarContain = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	span {
		z-index: 1;
		color: grey;
		padding: 0 10px;
	}
`;

export default ({ id }) => {
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

	return (
		<Wrapper id={id}>
			<Header>
				<Title>ABOUT</Title>
				<Underline />
			</Header>
			<Contain>
				<OctagonList>
					<Octagon width={120} title={"First"} text={"first"} Image={<Focus />} />
					<Octagon width={120} title={"Second"} text={"second"} Image={<Laptop />} />
					<Octagon width={120} title={"Third"} text={"third"} Image={<Energy />} />
					<Octagon width={120} title={"Third"} text={"Third"} Image={<Energy />} />
				</OctagonList>
				<Body>
					<PhotoContain>
						<Octagon
							width={200}
							src={aboutMe[0]}
							title={"김 의 교"}
							text={"나는 누구인가"}
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
								<LiTitle>Javascript</LiTitle>
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
