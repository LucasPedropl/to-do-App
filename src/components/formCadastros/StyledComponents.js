import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	padding: 2rem 1.5rem;
	background-color: #e2e8f0;
	border-radius: 10px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const Nav = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const Titulo = styled.h1`
	font-size: 24px;
	color: #4a5568;
	margin-bottom: 20px;
`;

export const Svg = styled.svg`
	cursor: pointer;
	width: 1.5em;
	height: 1.5em;
	margin-right: 0.5em;
`;

export const Label = styled.label`
	font-size: clamp(0.8rem, 2vw, 1rem);
	color: #475569;
	margin-bottom: 0.4rem;
`;

export const TextInput = styled.input`
	background-color: #f1f5f9;
	font-size: clamp(0.6rem, 2vw, 0.9rem);
	color: #626b79;
	height: 30px;
	padding: 10px;
	border-radius: 10px;
	border: none;
	margin-bottom: 10px;
	border: 2px solid transparent;
	&:focus {
		outline: none;
		border: 2px solid #7c3aed;
	}
	&:hover {
		border: 2px solid #7c3aed;
	}
	&::placeholder {
		color: rgb(177, 181, 187);
	}
`;

export const TextArea = styled.textarea`
	background-color: #f1f5f9;
	color: #626b79;
	font-size: clamp(0.6rem, 2vw, 0.9rem);
	height: 10%;
	padding: 10px;
	border-radius: 10px;
	border: none;
	margin-bottom: 10px;
	border: 2px solid transparent;
	resize: vertical;
	&:focus {
		outline: none;
		border: 2px solid #7c3aed;
	}
	&:hover {
		border: 2px solid #7c3aed;
	}
	&::placeholder {
		color: rgb(177, 181, 187);
	}
`;
export const Select = styled.select`
	background-color: #f1f5f9;
	font-size: clamp(0.6rem, 2vw, 0.9rem);
	color: #626b79;
	height: 50px;
	padding: 10px;
	border-radius: 10px;
	border: none;
	margin-bottom: 10px;
	border: 2px solid transparent;
	&:focus {
		outline: none;
		border: 2px solid #7c3aed;
	}
	&:hover {
		border: 2px solid #7c3aed;
	}
	&::placeholder {
		color: rgb(177, 181, 187);
	}
`;

export const RadioGroup = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 1rem;
`;

export const InputCheck = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 8px;
	cursor: pointer;
	background: #d7dfe9;
	transition: border-color 0.2s;

	&::after {
		content: '';
		display: ${({ checked }) => (checked ? 'block' : 'none')};
		width: 7px;
		height: 7px;
		background: #f43f5e;
		border-radius: 50%;
	}
`;

export const Botao = styled.button`
	background-color: #7c3aed;
	border: none;
	padding: 15px;
	width: ${({ $tipo }) => ($tipo === 'directory' ? '20%' : '100%')};
	margin-top: 0.7rem;
	color: white;
	border-radius: 0.5rem;
	cursor: pointer;
	transition: transform 0.1s;
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
