import React, { useState, useEffect } from 'react';
import { Overlay, Container, TextInput, Titulo, Nav, Svg, Label, TextArea, Select, InputCheck, RadioGroup, Botao } from './StyledComponents';
import { useDirectory } from '../../context/DirectoryContext';

const CloseIcon = (
	<Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
		<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
	</Svg>
);

const Forms = ({ tipo, onClose }) => {
	const { addDirectory, updateDirectory, editDirectory, setEditDirectory } = useDirectory();
	const [name, setName] = useState('');
	const [checked1, setChecked1] = useState(false);
	const [checked2, setChecked2] = useState(false);

	useEffect(() => {
		if (editDirectory) setName(editDirectory.name);
		else setName('');
	}, [editDirectory]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('Enviando formulário...');
		console.log('Nome digitado:', name);
		try {
			if (editDirectory) {
				const res = await updateDirectory(editDirectory.id, { name });
				console.log('Resposta update:', res);
				setEditDirectory(null);
			} else {
				const res = await addDirectory({ name });
				console.log('Resposta create:', res);
			}
			onClose();
		} catch (error) {
			console.error('Erro ao cadastrar diretório:', error);
			alert('Erro ao cadastrar diretório. Veja o console para detalhes.');
		}
	};

	if (tipo === 'task') {
		return (
			<Container>
				<Nav>
					<Titulo>Add a Task</Titulo>
					{CloseIcon}
				</Nav>
				<Label htmlFor="title">Title</Label>
				<TextInput type="text" name="title" placeholder="Ex, study for the test" />
				<Label htmlFor="Date">Date</Label>
				<TextInput type="date" name="date" />
				<Label htmlFor="description">Description (optional)</Label>
				<TextArea placeholder="Ex, study for the test" />
				<Label htmlFor="directory">Select a directory</Label>
				<Select value="home">
					<option>teste1</option>
					<option>teste2</option>
					<option>teste3</option>
				</Select>
				<RadioGroup>
					<InputCheck checked={checked1} onClick={() => setChecked1((v) => !v)} />
					<Label onClick={() => setChecked1((v) => !v)}>Mark as important</Label>
				</RadioGroup>
				<RadioGroup>
					<InputCheck checked={checked2} onClick={() => setChecked2((v) => !v)} />
					<Label onClick={() => setChecked2((v) => !v)}>Mark as completed</Label>
				</RadioGroup>
				<Botao $tipo={tipo}>Add a task</Botao>
			</Container>
		);
	} else {
		return (
			<Overlay onClick={onClose}>
				<Container
					style={{ zIndex: 10000 }}
					onClick={(e) => e.stopPropagation()} // Impede que o clique dentro do modal feche o overlay
				>
					<Nav>
						<Titulo>{editDirectory ? 'Edit Directory' : 'Create Directory'}</Titulo>
						<span style={{ cursor: 'pointer', fontSize: 24 }} onClick={onClose}>
							&times;
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
	}
};

export default Forms;
