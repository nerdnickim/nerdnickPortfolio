import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	position: fixed;
	top: 30px;
	right: 30px;
`;

const Ul = styled.ul`
	display: flex;
	letter-spacing: 1px;
	.active {
		color: #e31b6d;
	}
`;

const Li = styled.li`
	margin-right: 10px;
	padding: 5px 3px;
	cursor: pointer;
`;

const Span = styled.span``;

export default ({ containRef }) => {
	const ulRef = useRef();
	const ACTIVE = "active";

	const naviHandle = (e) => {
		e.persist();
		const target = e.target.innerText;
		const naviTarget = document.getElementById(target);
		const ulList = ulRef.current.childNodes;

		window.scrollTo({
			top: naviTarget.offsetTop,
			behavior: "smooth",
		});

		ulList.forEach((i) => {
			i.firstChild.classList.remove(ACTIVE);
		});
		e.target.classList.toggle(ACTIVE);
	};

	const scrollActive = () => {
		const mainTarget = containRef.current.childNodes;
		const ulList = ulRef.current.childNodes;

		mainTarget.forEach((i) => {
			let prev = i.previousSibling;

			if (i.offsetTop >= window.scrollY - i.offsetHeight) {
				if (prev?.offsetTop <= window.scrollY - i.offsetHeight) {
					console.log(i);
				}
			}
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", scrollActive);
	});

	return (
		<Wrapper>
			<Ul ref={ulRef}>
				<Li onClick={naviHandle}>
					<Span className="active">home</Span>
				</Li>
				<Li onClick={naviHandle}>
					<Span>about</Span>
				</Li>
				<Li onClick={naviHandle}>
					<Span>projects</Span>
				</Li>
				<Li onClick={naviHandle}>
					<Span>contact</Span>
				</Li>
			</Ul>
		</Wrapper>
	);
};