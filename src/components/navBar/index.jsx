import { Nav, SearchBar, SearchWrapper, SearchIcon } from './StyledComponents';

const NavBar = () => {
	return (
		<Nav>
			<SearchWrapper>
				<SearchBar placeholder="Search task" />
				<SearchIcon className="bi bi-search" />
			</SearchWrapper>
		</Nav>
	);
};

export default NavBar;
