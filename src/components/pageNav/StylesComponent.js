import styled from "styled-components";

export const Container = styled.nav`
	width: 100%;
	color: white;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	margin-top: 1rem;
`;

export const Title = styled.h1`
	font-size: 1.5rem;
	font-weight: 600;
	color:rgb(94, 94, 94);
`;

export const DivFilter = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 1.5rem;
`
export const DivIcons = styled.div`
	display: flex;
	flex-direction: row;
	gap: 0.5rem;
	align-items: center;
`;

export const Icons = styled.i`
	font-size: 1.3em;
	color: #94a3b8;
	cursor: pointer;
`;

export const Filtro = styled.select`
	border-radius: 10px;
	border: 2px solid transparent;
	background-color: #f1f5f9;
	height: 50px;
	width: 20%;
	color: rgb(135, 135, 136);
	padding-left: 0.5rem;
	padding-right: 0.5rem;
	&:focus {
		outline: none;
		border: 2px solid #7c3aed;
	}
	&:hover {
		border: 2px solid #7c3aed;
	}
`;
