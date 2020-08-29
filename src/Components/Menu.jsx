import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	position: fixed;
	top: 30px;
	right: 30px;
	transform: translateX(120%);
	transition: transform 0.45s linear;
`;

const Ul = styled.ul`
	display: flex;
	letter-spacing: 1px;
	.active {
		color: rgb(140, 82, 41);
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

		if (0 <= window.scrollY <= mainTarget[0].offsetHeight) {
			ulList.forEach((u) =>
				u.innerText === "home"
					? u.lastChild.classList.add(ACTIVE)
					: u.lastChild.classList.remove(ACTIVE)
			);
			if (ulRef.current.offsetParent) {
				ulRef.current.offsetParent.style.transform = "translateX(120%)";
			}
		}

		mainTarget.forEach((i) => {
			let prev = i.previousSibling;

			if (i.offsetTop >= window.scrollY - i.offsetHeight) {
				if (prev?.offsetTop <= window.scrollY - i.offsetHeight) {
					ulList.forEach((u) =>
						i.id === u.innerText
							? u.lastChild.classList.add(ACTIVE)
							: u.lastChild.classList.remove(ACTIVE)
					);
					if (ulRef.current.offsetParent) {
						ulRef.current.offsetParent.style.transform = "translateX(0%)";
					}
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
