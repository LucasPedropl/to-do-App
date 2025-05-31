import styled from 'styled-components';

export const Container = styled.div`
	width: 30vw;
	height: 20vh;
	padding: 1rem;
	background-color: #e2e8f0;
	border-radius: 10px;
	color: rgb(94, 94, 94);
	h1 {
		color: #475569;
	}
	div {
		width: 100%;

		display: flex;
		justify-content: end;
		text-align: center;
		gap: 1rem;
		p {
			cursor: pointer;

			display: flex;
			text-align: center;
		}
	}
`;

export const Botao = styled.button`
	background-color: #7c3aed;
	border: none;
	width: 20%;
	height: 40px;
	color: white;
	border-radius: 0.5rem;
	cursor: pointer;
	transition: transform 0.8s;
	&:hover {
		background-color: #6830ca;
	}
	&:active {
		transform: scale(0.95);
		transition: transform 0.1s;
	}
`;

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 9999;
`;
