import styled from "styled-components";

export const MainContainer = styled.div`
	width: 100vw;
	height: calc(100vh - 3.5rem);
	@media (min-width: 900px) {
		width: calc(100vw - 3.5rem);
		margin-left: 3.5rem;
		height: 100vh;
	}
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const MainCard = styled.div`
	width: 100%;
	height: 100%;
	@media (min-width: 900px) {
		width: 90%;
		height: 90%;
	}
	background-color: #e8e8f1;
	display: flex;
	justify-content: center;
	overflow-y: scroll;
`;

export const ContentCard = styled.div`
	margin-top: 1rem;
	width: 100%;
	height: fit-content;
	font-size: 1.5rem;
	text-align: justify;
	@media (min-width: 900px) {
		width: 70%;
	}
`;