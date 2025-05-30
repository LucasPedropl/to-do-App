import React from 'react';
import { useLocation } from 'react-router-dom';
import { MenuDiv, MenuLink, MenuCategoria } from './StyledComponents';

const MenuItem = ({ children, url, ...rest }) => {
	const location = useLocation();
	const isActive = url ? location.pathname === url : false;

	if (url) {
		return (
			<MenuDiv $active={isActive}>
				<MenuLink to={url} $active={isActive}>
					{children}
				</MenuLink>
			</MenuDiv>
		);
	}
	return (
		<MenuDiv {...rest}>
			<MenuCategoria>{children}</MenuCategoria>
		</MenuDiv>
	);
};

export default MenuItem;
