import React, { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	height: 100vh;
	background: #ebd7bd;
	color: rgb(140, 82, 41);
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.4rem;
`;

const Contain = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	width: 90%;
	height: 80%;
	padding: 30px 10px;
	margin: 20px 10px;
`;

const Left = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-left: 50px;
`;

const Right = styled.section`
	position: relative;
	height: 100%;
	padding-right: 80px;
`;

const RotateContain = styled.div`
	position: absolute;
	bottom: 130px;
	left: -10px;
	transform: rotate(-90deg);
	line-height: 1.3;
	padding: 0 0 0 40px;
`;

const Nav = styled.nav`
	position: relative;
	height: 100%;
	line-height: 1.3;
`;

const Ul = styled.ul`
	position: relative;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: space-around;
`;

const Li = styled.li`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	margin-bottom: 20px;
	color: rgb(140, 82, 41);
`;

const Button = styled.button`
	font-size: 1.4rem;
	color: rgb(140, 82, 41);
	transition: color 0.45s linear;
	&:hover {
		color: white;
	}
`;

const Span = styled.span``;

const H1 = styled.h1`
	font-size: 3.6rem;
	white-space: nowrap;
`;

export default ({ id }) => {
	const ulRef = useRef();

	const naviHandle = (e) => {
		e.persist();
		const target = e.target.innerText.toLowerCase();
		const naviTarget = document.getElementById(target);

		window.scrollTo({
			top: naviTarget.offsetTop,
			behavior: "smooth",
		});
	};

	return (
		<Wrapper id={id}>
			<Contain>
				<Left>
					<Span>#portfoliohome</Span>
					<RotateContain>
						<Span>NERDNICK</Span>
						<H1>Welcome to My</H1>
						<H1>PortFolio</H1>
					</RotateContain>
				</Left>
				<Right>
					<Nav>
						<Ul ref={ulRef}>
							<Li>
								<Button onClick={naviHandle}>
									<Span>HOME</Span>
								</Button>
							</Li>
							<Li>
								<Button onClick={naviHandle}>
									<Span>ABOUT</Span>
								</Button>
								<Span>introduce myself</Span>
							</Li>
							<Li>
								<Button onClick={naviHandle}>
									<Span>PROJECTS</Span>
								</Button>
								<Span>newwaveboys, instagram clone</Span>
							</Li>
							<Li>
								<Button>
									<Span>CONTACT</Span>
								</Button>
								<Span>email, tel, etc</Span>
							</Li>
						</Ul>
					</Nav>
				</Right>
			</Contain>
		</Wrapper>
	);
};
