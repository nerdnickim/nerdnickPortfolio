import React from "react";

import styled from "styled-components";

const Wrapper = styled.div``;

const Img = styled.img`
	width: 100%;
`;

const Image = ({ src }) => (
	<Wrapper>
		<Img src={src} />
	</Wrapper>
);

export default Image;
