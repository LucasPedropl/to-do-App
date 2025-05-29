import {Outlet } from 'react-router-dom';
import MenuEsquerdo from '../../components/menuEsquerdo';
import MenuDireito from '../../components/menuDireito';
import { Container, ContentWrapper } from './StyledComponents';
import Forms from '../../components/formCadastros';
import NavBar from '../../components/navBar';



const BasePage = () => {
	return (
		<Container>
			<MenuEsquerdo />
			<ContentWrapper>
				<NavBar />
				<Outlet />
			</ContentWrapper>
			<MenuDireito />
		</Container>
	);
};

export default BasePage;
