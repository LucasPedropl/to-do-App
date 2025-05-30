import styled from 'styled-components';

export const Nav = styled.nav`
	width: 100%;
	height: 50px;
	color: white;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	margin-top: 1rem;
`;

export const SearchWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 25%;
	background-color: #f1f5f9;
	border: 2px solid transparent;
	border-radius: 10px;
	padding-left: 0.5rem;
	padding-right: 0.5rem;
	&:focus-within {
		outline: none;
		border: 2px solid #7c3aed;
	}
	&:hover {
		border: 2px solid #7c3aed;
	}
`;

export const SearchIcon = styled.i`
	font-size: 1.2em;
	color: #94a3b8;
	pointer-events: none;
`;

export const SearchBar = styled.input`
	background-color: #f1f5f9;

	font-size: clamp(0.6rem, 2vw, 0.9rem);
	color: #626b79;
	height: 95%;
	width: 100%;
	border-radius: 10px;
	border: none;
	&:focus {
		outline: none;
	}

	&::placeholder {
		color: rgb(177, 181, 187);
	}
`;

export const Data = styled.p`
	display: flex;
	align-items: center;
	font-size: 1.2rem;
	color: rgb(123, 123, 123);
	margin-right: 1rem;
	height: 100%;
	text-align: center;
`;

export const Botao = styled.button`
	background-color: #7c3aed;
	border: none;
	height: 100%;
	width: 65%;
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

export const BtnContainer = styled.div`
	width: 25%;
	display: flex;
	justify-content: end;
`;
