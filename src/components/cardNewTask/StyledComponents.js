import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem;
	border-radius: 10px;
	width: ${({ $layout }) => ($layout === 'list' ? '100%' : '29%')};
	transition: width 0.3s;
`;

export const AddCard = styled.div`
	width: 100%;
	height: 30vh;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 2px dashed #cbd5e1;
	color: rgb(170, 173, 179);
	cursor: pointer;
	&:hover {
		background-color: #cbd5e1;
	}
`;

export const Fantasma = styled.div`
	user-select: none;
	max-width: 50%;
	color: #e2e8f0;
	padding: 0.5rem 1rem;
`;
