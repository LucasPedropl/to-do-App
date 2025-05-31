import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import MenuEsquerdo from '../../components/menuEsquerdo';
import MenuDireito from '../../components/menuDireito';
import { Container, ContainerPrincipal, ContentWrapper } from './StyledComponents';
import NavBar from '../../components/navBar';
import PageNav from '../../components/pageNav';
import Footer from '../../components/footer';
import CardNewTask from '../../components/cardNewTask';

const BasePage = () => {
	const [layout, setLayout] = useState('grid');

	return (
		<Container>
			<MenuEsquerdo />
			<ContentWrapper>
				<NavBar />
				<PageNav layout={layout} setLayout={setLayout} />
				<ContainerPrincipal $layout={layout}>
					<Outlet context={{ layout }} />
				</ContainerPrincipal>
				<Footer />
			</ContentWrapper>
			<MenuDireito />
		</Container>
	);
};

export default BasePage;
