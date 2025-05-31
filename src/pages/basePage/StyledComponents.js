import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;
	background-color: #e2e8f0;
	overflow: hidden;
`;

export const ContentWrapper = styled.div`
	margin-left: 19%;
	margin-right: 19%;
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	overflow: auto;
	scrollbar-width: none;
	-ms-overflow-style: none;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const ContainerPrincipal = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
`;
