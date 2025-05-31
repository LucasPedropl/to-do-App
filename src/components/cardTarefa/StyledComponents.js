import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	padding: 1rem;
	border-radius: 10px;
	width: ${({ $layout }) => ($layout === 'list' ? '100%' : '29%')};
	transition: width 0.3s;
`;

export const CardContainer = styled.div`
	display: flex;
`;

export const Categoria = styled.div`
	user-select: none;
	cursor: pointer;
	background-color: #fda4af;
	max-width: 50%;
	color: #e11d48;
	text-align: center;
	display: flex;
	justify-content: center;
	padding: 0.5rem 1rem;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
	box-sizing: border-box;
	align-self: flex-end;
	margin-right: 10%;
	p {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		white-space: normal;
		max-width: 100%;
	}
`;

export const Card = styled.div`
	border: 5px solid #f1f5f9;
	display: flex;
	flex-direction: column;
	background-color: #f1f5f9;
	height: 30vh;
	width: 100%;
	border-radius: 10px;
	padding: 1rem;
	box-sizing: border-box;
	overflow: hidden;
`;

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 80%;
	width: 100%;
	padding-bottom: 0.5rem;
`;

export const Titulo = styled.h2`
	color: #475569;
	font-size: 18px;
`;

export const Description = styled.p`
	color: #64748b;
	height: 100%;
	font-size: 15px;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 5;
	-webkit-box-orient: vertical;
	white-space: normal;
`;

export const InfoArea = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

export const DataArea = styled.div`
	display: flex;
	color: #475569;
	gap: 0.5rem;
`;

export const FooterArea = styled.footer`
	border-top: 3px dashed #cbd5e1;
	width: 100%;
	height: 20%;
	display: flex;
	justify-content: space-between;
	padding-top: 1rem;
	.completed {
		background-color: #a7f3d0;
		border: none;
		border-radius: 30px;
		width: 40%;
		color: #065f46;
		cursor: pointer;
	}
	.uncompleted {
		background-color: #fde68a;
		border: none;
		border-radius: 30px;
		width: 40%;
		color: #92400e;
		cursor: pointer;
	}
`;

export const IconsArea = styled.div`
	color: #334155;
	font-size: 20px;
	display: flex;
	width: 30%;
	justify-content: space-between;
	i {
		cursor: pointer;
	}
	.bi-star-fill {
		color: #f43f5e;
	}
`;
