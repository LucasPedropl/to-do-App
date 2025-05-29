import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	bottom: 0;
	width: 17%;
	height: 100vh;
	background-color: #f1f5f9;
	display: flex;
	flex-direction: column;
	align-items: center;
	z-index: 10;
`;

export const Titulo = styled.h1`
	font-size: clamp(0.5rem, 2.5vw, 1.2rem);
	margin-top: 2rem;
	color: #475569;
`;

export const Botao = styled.button`
	background-color: #7c3aed;
	border: none;
	padding: 15px;
	width: 90%;
	margin-top: 2rem;
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

export const MenuArea = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 2rem;
	
	font-size: clamp(0.5rem, 2.5vw, 1rem);
`;

export const AccordionButton = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	font-size: 1rem;
	text-align: left;
	padding: 0.5rem;
	width: 100%;
	transition: background 0.2s;
`;

export const AccordionContent = styled.div`
	max-height: ${({ open }) => (open ? '25%' : '0')};
	overflow-y: auto;
	overflow-x: hidden;
	margin-left: 10%;
	transition: max-height 0.3s;
`;

export const SetaIconeSVG = styled.svg`
	width: 0.8em;
	height: 0.8em;
	margin-right: 0.5em;
	transition: transform 0.3s, color 0.2s;
	transform: rotate(${({ open }) => (open ? '180deg' : '90deg')});
	fill: currentColor;
	color: inherit;
	user-select: none;
`;

export const CadastroCategoria = styled.button`
	background-color: transparent;
	font-size: 1rem;
	border: 3px dashed #cbd5e1;
	padding: 10px 22px;
	width: 40%;
	color: #475569;
	border-radius: 0.5rem;
	cursor: pointer;
	transition: transform 0.8s;
	margin-left: 10%;
	&:hover {
		color: #6830ca;
	}
`;
