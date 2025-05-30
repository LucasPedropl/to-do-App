import {Outlet } from 'react-router-dom';
import MenuEsquerdo from '../../components/menuEsquerdo';
import MenuDireito from '../../components/menuDireito';
import { Container, ContainerPrincipal, ContentWrapper } from './StyledComponents';
import NavBar from '../../components/navBar';
import PageNav from '../../components/pageNav';
import Footer from '../../components/footer';



const BasePage = () => {
	return (
		<Container>
			<MenuEsquerdo />
			<ContentWrapper>
				<NavBar />
				<PageNav />
				<ContainerPrincipal>
					<Outlet />
				</ContainerPrincipal>
				<Footer />
			</ContentWrapper>
			<MenuDireito />
		</Container>
	);
};

export default BasePage;
