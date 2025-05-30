import React, { useRef } from 'react';
import { Nav, SearchBar, SearchWrapper, SearchIcon, Data, Botao, BtnContainer } from './StyledComponents';

const NavBar = () => {
	const inputRef = useRef(null);
	const today = new Date();
	const formattedDate = `${today.getFullYear()}, ${today.toLocaleString('en-US', { month: 'short' })} ${today.getDate()}`;

	const handleFocus = () => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	};

	return (
		<Nav>
			<SearchWrapper onClick={handleFocus}>
				<SearchBar ref={inputRef} placeholder="Search task" />
				<SearchIcon className="bi bi-search" />
			</SearchWrapper>
			<Data>{formattedDate}</Data>
			<BtnContainer>
				<Botao>Add new task</Botao>
			</BtnContainer>
		</Nav>
	);
};

export default NavBar;
