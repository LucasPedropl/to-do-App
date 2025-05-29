import { useState } from 'react';
import MenuItem from '../menuItem';
import { Container, Titulo, Botao, MenuArea, AccordionContent, SetaIconeSVG, CadastroCategoria } from './StyledComponents';

const MenuEsquerdo = () => {
	const [open, setOpen] = useState(false);

	return (
		<Container>
			<Titulo>TO-DO LIST</Titulo>
			<Botao>Add new task</Botao>
			<MenuArea>
				<MenuItem url="/">Today's Tasks</MenuItem>
				<MenuItem url="/hoje">All Tasks</MenuItem>
				<MenuItem url="/hoje">Important Tasks</MenuItem>
				<MenuItem url="/hoje">Completed Tasks</MenuItem>
				<MenuItem url="/hoje">Uncompleted Tasks</MenuItem>
				<MenuItem onClick={() => setOpen((v) => !v)}>
					<SetaIconeSVG open={open} viewBox="0 0 448 512">
						<path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
					</SetaIconeSVG>
					Directories
				</MenuItem>
				<AccordionContent open={open}>
					<MenuItem url="/categoria1">Main</MenuItem>
					<MenuItem url="/categoria2">Categoria 2</MenuItem>
					<MenuItem url="/categoria1">Main</MenuItem>
					<MenuItem url="/categoria2">Categoria 2</MenuItem>
					<MenuItem url="/categoria1">Main</MenuItem>
					<MenuItem url="/categoria2">Categoria 2</MenuItem>
				</AccordionContent>
				{open && <CadastroCategoria>+ New</CadastroCategoria>}
			</MenuArea>
		</Container>
	);
};

export default MenuEsquerdo;
