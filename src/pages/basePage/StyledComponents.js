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
	overflow-y: auto;
	width: 100%;
	align-items: center;
	overflow: auto;
	scrollbar-width: none; 
	-ms-overflow-style: none;
	&::-webkit-scrollbar {
		display: none; 
	}
`;

export const ContainerPrincipal = styled.div`
	margin-top: 2rem;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;
