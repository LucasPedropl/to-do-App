import React, { useEffect, useState } from 'react';
import { Overlay, Container, TextInput, Titulo, Nav, Svg, Label, TextArea, Select, InputCheck, RadioGroup, Botao } from './StyledComponents';
import { useTarefa } from '../../context/TarefasContext';
import { useDirectory } from '../../context/DirectoryContext';

const CloseIcon = (
	<Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
		<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
	</Svg>
);

const FormTarefa = ({ onClose }) => {
	const { addTarefa, updateTarefa, editTarefa, setEditTarefa } = useTarefa();
	const { directories } = useDirectory();
	const [title, setTitle] = useState('');
	const [date, setDate] = useState('');
	const [description, setDescription] = useState('');
	const [important, setImportant] = useState(false);
	const [completed, setCompleted] = useState(false);
	const [directoryId, setDirectoryId] = useState('');

	useEffect(() => {
		if (editTarefa) setTitle(editTarefa.title);
		else setTitle('');
		if (editTarefa) setDate(editTarefa.date);
		else setDate('');
		if (editTarefa) setDescription(editTarefa.description);
		else setDescription('');
		if (editTarefa) setImportant(editTarefa.important);
		else setImportant(false);
		if (editTarefa) setCompleted(editTarefa.completed);
		else setCompleted(false);
	}, [editTarefa]);

	const SubmitTarefa = async (e) => {
		e.preventDefault();
		onClose();
		try {
			if (editTarefa) {
				await updateTarefa(editTarefa.id, { title, date, description, important, completed });
				setEditTarefa(null);
			} else {
				await addTarefa({ title, date, description, important, completed, directoryId });
			}
		} catch (error) {
			console.error('Erro ao cadastrar tarefa:', error);
			alert('Erro ao cadastrar tarefa.');
		}
	};

	return (
		<Overlay onClick={onClose}>
			<Container style={{ zIndex: 10000 }} onClick={(e) => e.stopPropagation()}>
				<form onSubmit={SubmitTarefa}>
					<Nav>
						<Titulo>Add a Task</Titulo>
						<span onClick={onClose}>{CloseIcon}</span>
					</Nav>
					<Label htmlFor="title">Title</Label>
					<TextInput required type="text" name="title" placeholder="Ex, study for the test" value={title} onChange={(e) => setTitle(e.target.value)} />
					<Label htmlFor="Date">Date</Label>
					<TextInput required type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
					<Label htmlFor="description">Description (optional)</Label>
					<TextArea placeholder="Ex, study for the test" value={description} onChange={(e) => setDescription(e.target.value)} />
					<Label htmlFor="directory">Select a directory</Label>
					<Select required value={directoryId} onChange={(e) => setDirectoryId(e.target.value)}>
						<option value="" disabled>
							Selecione um diretório
						</option>
						{directories.map((dir) => (
							<option key={dir.id} value={dir.id}>
								{dir.name}
							</option>
						))}
					</Select>
					<RadioGroup>
						<InputCheck checked={important} onChange={() => setImportant((v) => !v)} />
						<Label onClick={() => setImportant((v) => !v)}>Mark as important</Label>
					</RadioGroup>
					<RadioGroup>
						<InputCheck checked={completed} onChange={() => setCompleted((v) => !v)} />
						<Label onClick={() => setCompleted((v) => !v)}>Mark as completed</Label>
					</RadioGroup>
					<Botao>Add a task</Botao>
				</form>
			</Container>
		</Overlay>
	);
};

export default FormTarefa;
