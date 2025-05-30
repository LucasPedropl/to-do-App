import { useLocation } from 'react-router-dom';
import { Container, DivFilter, Icons, Title, DivIcons, Filtro } from './StylesComponent';

const PageNav = () => {
	const location = useLocation();
	const pageName = location.pathname.split('/').filter(Boolean).pop();
	const displayName = !pageName ? 'All' : pageName.charAt(0).toUpperCase() + pageName.slice(1);

	return (
		<Container>
			<Title>{displayName} tasks (0 tasks)</Title>
			<DivFilter>
				<DivIcons>
					<Icons className="bi bi-list"></Icons>
					<Icons className="bi bi-grid"></Icons>
				</DivIcons>
				<Filtro>
					<option value="">Sort By</option>
					<option value="">Order Added</option>
					<option value="">Earlier First</option>
					<option value="">Later First</option>
					<option value="">Completed First</option>
					<option value="">Uncompleted First</option>
				</Filtro>
			</DivFilter>
		</Container>
	);
};

export default PageNav;
