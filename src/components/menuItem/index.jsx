import React from 'react';
import { MenuDiv, MenuLink, MenuCategoria } from './StyledComponents';

const MenuItem = ({ children, url, ...rest }) => {
    const isActive = url ? window.location.pathname === url : false;

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
            <MenuCategoria>
                {children}
            </MenuCategoria>
        </MenuDiv>
    );
};

export default MenuItem;
