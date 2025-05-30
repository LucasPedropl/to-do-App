import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
	right: 0;
	top: 0;
	bottom: 0;
	width: 17%;
	height: 100vh;
	background-color: #f1f5f9;
	display: flex;
	flex-direction: column;
	z-index: 2;
`;

export const User = styled.div`
	display: flex;
	height: 10vh;
	justify-content: center;
	align-items: center;
	h3 {
		font-size: 1rem;
		font-weight: 600;
		color: #475569;
	}
	img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		margin-left: 10px;
	}
`;

export const DarkMode = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 1rem;

	justify-content: space-around;
	span {
		
		color:rgb(94, 94, 94);
	}
`;

export const SwitchLabel = styled.label`
	position: relative;
	display: inline-block;
	width: 40px;
	height: 22px;
	
`;

export const SwitchInput = styled.input`
	opacity: 0;
	width: 0;
	height: 0;
	&:checked + span {
		background: #7c3aed;
	}
	&:checked + span:before {
		transform: translateX(18px);
	}
`;

export const SwitchSlider = styled.span`
	position: absolute;
	cursor: pointer;
	width: 100%;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: #ccc;
	border-radius: 22px;
	transition: 0.4s;
	&:before {
		position: absolute;
		content: '';
		height: 18px;
		width: 18px;
		left: 2px;
		bottom: 2px;
		background: white;
		border-radius: 50%;
		transition: 0.4s;
	}
`;

export const ProgressBarArea = styled.div`
	margin-top: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	flex-direction: column;
`;

export const ProgressBarContainer = styled.div`
	width: 100%;
	background: #e2e8f0;
	border-radius: 10px;
	height: 8px;
	margin: 1rem 0;
	overflow: hidden;
`;

export const ProgressBarLabel = styled.span`
	color: rgb(94, 94, 94);
	justify-content: space-between;
	display: flex;
	width: 100%;
`;

export const ProgressBarFill = styled.div`
	height: 100%;
	width: ${({ percent }) => percent}%;
	background: #7c3aed;
	transition: width 0.4s;
`;

export const DeleteArea = styled.div`
	display: flex;
	height: 10vh;
	justify-content: center;
	align-items: center;
	margin-top: 100%;
	width: 100%;
`;

export const DeleteButton = styled.button`
	background-color: rgba(249, 20, 20, 0.13);
	width: 80%;
	color: red;
	border: none;
	padding: 10px 20px;
	border-radius: 5px;
	cursor: pointer;
	font-size: 1rem;
	transition: background-color 0.3s;

	&:hover {
		background-color: rgb(220, 12, 12);
		color: white;
	}
	&:active {
		transform: scale(0.95);
		transition: transform 0.1s;
	}
`;
