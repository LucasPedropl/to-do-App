import React, { useState, useEffect } from 'react';
import { Overlay, Container, TextInput, Titulo, Nav, Svg, Label, Botao } from './StyledComponents';
import { useDirectory } from '../../context/DirectoryContext';

const CloseIcon = (
	<Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
		<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
	</Svg>
);

const FormDirectory = ({ onClose }) => {
	const { addDirectory, updateDirectory, editDirectory, setEditDirectory } = useDirectory();
	const [name, setName] = useState('');

	useEffect(() => {
		if (editDirectory) setName(editDirectory.name);
		else setName('');
	}, [editDirectory]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		onClose();
		try {
			if (editDirectory) {
				await updateDirectory(editDirectory.id, { name });
				setEditDirectory(null);
			} else {
				await addDirectory({ name });
			}
		} catch (error) {
			console.error('Erro ao cadastrar diretório:', error);
			alert('Erro ao cadastrar diretório.');
		}
	};

	return (
		<Overlay onClick={onClose}>
			<Container onClick={(e) => e.stopPropagation()}>
				<Nav>
					<Titulo>{editDirectory ? 'Edit Directory' : 'Create Directory'}</Titulo>
					<span onClick={onClose}>
						{CloseIcon}
					</span>
				</Nav>
				<form onSubmit={handleSubmit}>
					<TextInput type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter directory name" required />
					<Botao $tipo="directory" type="submit">
						{editDirectory ? 'Update' : 'Create'}
					</Botao>
				</form>
			</Container>
		</Overlay>
	);
};

export default FormDirectory;
