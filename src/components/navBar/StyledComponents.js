import styled from 'styled-components';

export const Nav = styled.nav`
	width: 100%;
	height: 60px;
	color: white;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	margin-top: 1rem;
`;

export const SearchWrapper = styled.div`
	position: relative;
	height: 30px;
	background-color: #f1f5f9;
	justify-content: center;
    align-items: center;
    display: flex;
    justify-content: center;
`;

export const SearchIcon = styled.i`
	position: absolute;
	right: 12px;
	top: 50%;
	transform: translateY(-60%);
	font-size: 1.2em;
	color: #94a3b8;
	pointer-events: none;
`;

export const SearchBar = styled.input`
	background-color: #f1f5f9;
	font-size: clamp(0.6rem, 2vw, 0.9rem);
	color: #626b79;
	height: 30px;
	padding: 10px;

	border-radius: 10px;
	border: 2px solid #7c3aed;
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
