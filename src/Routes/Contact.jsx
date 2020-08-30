import React from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { Github, Insta } from "../Components/Icons";
import { toast } from "react-toastify";

const Wrapper = styled.div`
	height: 100vh;
	background-color: #f8eee2;
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

const Contain = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	font-size: 1.4rem;
	width: 90%;
	height: 80%;
	padding: 30px 10px;
	margin: 20px 10px;
	margin: 0 auto;
`;

const Span = styled.span``;

const IconsContain = styled.div`
	margin-bottom: 30px;
	display: flex;
	${Span} {
		opacity: 0;
		transition: opacity 0.4s linear;
		transform: skew(14deg, 1deg);
	}
`;

const GitHubContain = styled.div`
	display: flex;
	flex-direction: column;
	&:hover {
		${Span} {
			opacity: 1;
		}
		svg {
			fill: rgb(140, 82, 41);
		}
	}
`;

const InstaContain = styled.div`
	display: flex;
	flex-direction: column;
	&:hover {
		${Span} {
			opacity: 1;
		}
		svg {
			fill: rgb(140, 82, 41);
		}
	}
`;

const A = styled.a``;

const Form = styled.form`
	position: relative;
	width: 50%;
	display: flex;
	flex-direction: column;
	input {
		border: none;
		margin-bottom: 3px;
		padding: 10px;
	}
	textarea {
		border: none;
		min-height: 150px;
		padding: 10px;
		margin-bottom: 3px;
	}
	input[type="submit"] {
		display: none;
	}
	label {
		max-width: 110px;
		display: flex;
		justify-content: center;
		align-self: flex-end;
		font-size: 16px;
		border-radius: 7px;
		padding: 10px 20px;
		color: white;
		background-color: rgb(213, 126, 64);
		&:hover {
			color: rgb(213, 126, 64);
			background-color: white;
		}
		transition: all 0.4s linear;
		cursor: pointer;
	}
`;

export default ({ id }) => {
	const handleSubmit = async (e) => {
		e.persist();
		e.preventDefault();

		emailjs
			.sendForm(
				process.env.REACT_APP_SERVICEID,
				process.env.REACT_APP_TEMPLATE_ID,
				e.target,
				process.env.REACT_APP_USER_ID
			)
			.then(
				(result) => {
					console.log(result.text);
					toast.success("Your mail has been sent successfully");
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<Wrapper id={id}>
			<Header>
				<Title>CONTACT</Title>
				<Underline />
			</Header>
			<Contain>
				<Form className="contact-form" onSubmit={handleSubmit}>
					<input type="hidden" name="contact_number" />
					<input type="text" name="from_name" placeholder="From" />
					<input type="email" name="from_email" placeholder="Email" />
					<textarea name="contents" placeholder="Message" />
					<label htmlFor="button">SUBMIT</label>
					<input type="submit" id="button" name="button" />
				</Form>
				<IconsContain>
					<GitHubContain>
						<Span>GitHub</Span>
						<A href="https://github.com/nerdnickim" target="_blank">
							<Github size={36} />
						</A>
					</GitHubContain>
					<InstaContain>
						<Span>Insta</Span>
						<A href="https://www.instagram.com/nerd__nick/" target="_blank">
							<Insta size={36} />
						</A>
					</InstaContain>
				</IconsContain>
			</Contain>
		</Wrapper>
	);
};
