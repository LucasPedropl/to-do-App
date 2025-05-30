import {Outlet } from 'react-router-dom';
import MenuEsquerdo from '../../components/menuEsquerdo';
import MenuDireito from '../../components/menuDireito';
import { Container, ContentWrapper } from './StyledComponents';
import Forms from '../../components/formCadastros';
import PopUpDelete from '../../components/deletePopUp';
import NavBar from '../../components/navBar';
import PageNav from '../../components/pageNav';



const BasePage = () => {
	return (
		<Container>
			<MenuEsquerdo />
			<ContentWrapper>
				{/* <PopUpDelete tipo="one" /> */}
				<NavBar />
				<PageNav/>
				<Outlet />
			</ContentWrapper>
			<MenuDireito />
		</Container>
	);
};

export default BasePage;
