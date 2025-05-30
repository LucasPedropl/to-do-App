import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuDiv = styled.div`
	background: ${({ $active }) => ($active ? 'rgba(90, 87, 255, 0.06)' : 'transparent')};
	color: ${({ $active }) => ($active ? '#E11D48' : 'inherit')};
	border-right: ${({ $active }) => ($active ? '5px solid #F43F5E' : 'none')};
	height: 40px;
	padding-left: 0.7rem;
	transition: background 0.2s;
	cursor: pointer;
	user-select: none;
	&:hover {
		color: #e11d48;
	}
`;

export const MenuLink = styled(Link)`
	text-decoration: none;
	color: #475569;
	
	width: 100%;
	display: flex;
	align-items: center;
	height: 100%;
	color: ${({ $active }) => ($active ? '#E11D48' : '#475569')};
	${({ $active }) =>
		!$active &&
		`
        &:hover {
            color: #E11D48;
        }
    `}
`;

export const MenuCategoria = styled.p`
	text-decoration: none;
	display: flex;
	align-items: center;
	color: #475569;
	width: 100%;
	height: 100%;
	color: ${({ $active }) => ($active ? '#E11D48' : '#475569')};
	${({ $active }) =>
		!$active &&
		`
    `}
`;
