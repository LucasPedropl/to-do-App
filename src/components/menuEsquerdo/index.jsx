import { useState } from 'react';
import { useDirectory } from '../../context/DirectoryContext';
import MenuItem from '../menuItem';
import Forms from '../formCadastros';
import PopUpDelete from '../deletePopUp';
import { Container, Titulo, Botao, MenuArea, AccordionContent, SetaIconeSVG, CadastroCategoria } from './StyledComponents';

const MenuEsquerdo = () => {
	const { directories, modalOpen, setModalOpen, setEditDirectory, deleteDirectory } = useDirectory();
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
			<Botao>Add new task</Botao>
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
							<span style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
								<i
									className="bi bi-pencil"
									style={{ cursor: 'pointer', color: '#7c3aed' }}
									onClick={() => {
										setEditDirectory(dir);
										setModalOpen(true);
									}}
								/>
								<i className="bi bi-trash" style={{ cursor: 'pointer', color: '#e11d48' }} onClick={() => handleDeleteClick(dir)} />
							</span>
						</MenuItem>
					))}
				</AccordionContent>
				{open && (
					<CadastroCategoria
						onClick={() => {
							setEditDirectory(null);
							setModalOpen(true);
						}}
					>
						+ New
					</CadastroCategoria>
				)}
				{modalOpen && <Forms tipo="directory" onClose={() => setModalOpen(false)} />}
				{deletePopUpOpen && <PopUpDelete tipo="one" onConfirm={handleConfirmDelete} onCancel={handleCancelDelete} />}
			</MenuArea>
		</Container>
	);
};

export default MenuEsquerdo;
