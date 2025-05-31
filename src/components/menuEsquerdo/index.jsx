import { useState } from 'react';
import { useDirectory } from '../../context/DirectoryContext';
import { useTarefa } from '../../context/TarefasContext';
import MenuItem from '../menuItem';
import Forms from '../formCadastros';
import PopUpDelete from '../deletePopUp';
import { Container, Titulo, Botao, MenuArea, AccordionContent, SetaIconeSVG, CadastroCategoria } from './StyledComponents';

const MenuEsquerdo = () => {
	const { directories, modalOpenD, setModalOpenD, setEditDirectory, deleteDirectory } = useDirectory();
	const { modalOpenT, setModalOpenT } = useTarefa();
	const [open, setOpen] = useState(false);
	const [deletePopUpOpen, setDeletePopUpOpen] = useState(false);
	const [directoryToDelete, setDirectoryToDelete] = useState(null);

	const handleDeleteClick = (dir) => {
		setDirectoryToDelete(dir);
		setDeletePopUpOpen(true);
	};

	const handleConfirmDelete = () => {
		deleteDirectory(directoryToDelete.id);
		setDeletePopUpOpen(false);
		setDirectoryToDelete(null);
	};

	const handleCancelDelete = () => {
		setDeletePopUpOpen(false);
		setDirectoryToDelete(null);
	};

	return (
		<Container>
			<Titulo>TO-DO LIST</Titulo>
			<Botao onClick={() => setModalOpenT(true)}>Add new task</Botao>
			{modalOpenT && <Forms tipo="task" onClose={() => setModalOpenT(false)} />}
			<MenuArea>
				<MenuItem url="/today">Today's Tasks</MenuItem>
				<MenuItem url="/">All Tasks</MenuItem>
				<MenuItem url="/important">Important Tasks</MenuItem>
				<MenuItem url="/completed">Completed Tasks</MenuItem>
				<MenuItem url="/uncompleted">Uncompleted Tasks</MenuItem>
				<MenuItem onClick={() => setOpen((v) => !v)}>
					<SetaIconeSVG open={open} viewBox="0 0 448 512">
						<path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
					</SetaIconeSVG>
					Directories
				</MenuItem>
				<AccordionContent open={open}>
					{directories.map((dir) => (
						<MenuItem key={dir.id}>
							{dir.name}
							{dir.name !== 'main' && (
								<span style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
									<i
										className="bi bi-pencil"
										style={{ cursor: 'pointer', color: '#7c3aed' }}
										onClick={() => {
											setEditDirectory(dir);
											setModalOpenD(true);
										}}
									/>
									<i className="bi bi-trash" style={{ cursor: 'pointer', color: '#e11d48' }} onClick={() => handleDeleteClick(dir)} />
								</span>
							)}
						</MenuItem>
					))}
				</AccordionContent>
				{open && (
					<CadastroCategoria
						onClick={() => {
							setEditDirectory(null);
							setModalOpenD(true);
						}}
					>
						+ New
					</CadastroCategoria>
				)}
				{modalOpenD && <Forms tipo="directory" onClose={() => setModalOpenD(false)} />}
				{deletePopUpOpen && <PopUpDelete tipo="one" onConfirm={handleConfirmDelete} onCancel={handleCancelDelete} />}
			</MenuArea>
		</Container>
	);
};

export default MenuEsquerdo;
