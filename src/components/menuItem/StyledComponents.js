import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuDiv = styled.div`
	padding: 0.7rem;
	background: ${({ $active }) => ($active ? 'rgba(90, 87, 255, 0.06)' : 'transparent')};
	color: ${({ $active }) => ($active ? '#E11D48' : 'inherit')};
	border-right: ${({ $active }) => ($active ? '5px solid #F43F5E' : 'none')};

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
	display: block;
	width: 100%;
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
	color: #475569;
	display: block;
	width: 100%;
	height: 100%;
	color: ${({ $active }) => ($active ? '#E11D48' : '#475569')};
	${({ $active }) =>
		!$active &&
		`
    `}
`;
