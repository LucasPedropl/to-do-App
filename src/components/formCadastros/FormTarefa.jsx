import React, { useEffect, useState } from 'react';
import { Overlay, Container, TextInput, Titulo, Nav, Svg, Label, TextArea, Select, InputCheck, RadioGroup, Botao } from './StyledComponents';
import { useTarefa } from '../../context/TarefasContext';
import { useDirectory } from '../../context/DirectoryContext';

const CloseIcon = (
	<Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
		<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
	</Svg>
);

const toInputDate = (dateString) => {
	if (!dateString) return '';
	if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) return dateString;
	const date = new Date(dateString);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	return `${year}-${month}-${day}`;
};

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
		if (editTarefa) {
			setTitle(editTarefa.title);
			setDate(toInputDate(editTarefa.date)); 
			setDescription(editTarefa.description);
			setImportant(editTarefa.important);
			setCompleted(editTarefa.completed);
			setDirectoryId(editTarefa.directoryId?.toString() || '');
		} else {
			setTitle('');
			setDate('');
			setDescription('');
			setImportant(false);
			setCompleted(false);

			const mainDir = directories.find((d) => d.name === 'main');
			setDirectoryId(mainDir ? mainDir.id.toString() : '');
		}
	}, [editTarefa, directories]);

	const SubmitTarefa = async (e) => {
		e.preventDefault();
		console.log({
			title,
			date,
			description,
			important,
			completed,
			directoryId,
		});

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
					<TextInput required type="date" name="date" value={date || ''} onChange={(e) => setDate(e.target.value)} />
					<Label htmlFor="description">Description (optional)</Label>
					<TextArea placeholder="Ex, study for the test" value={description} onChange={(e) => setDescription(e.target.value)} />
					<Label htmlFor="directory">Select a directory</Label>
					<Select required value={directoryId} onChange={(e) => setDirectoryId(e.target.value)}>
						{directories.map((dir) => (
							<option key={dir.id} value={dir.id}>
								{dir.name}
							</option>
						))}
					</Select>
					<RadioGroup>
						<InputCheck checked={important} onClick={() => setImportant((v) => !v)} />
						<Label onClick={() => setImportant((v) => !v)}>Mark as important</Label>
					</RadioGroup>
					<RadioGroup>
						<InputCheck checked={completed} onClick={() => setCompleted((v) => !v)} />
						<Label onClick={() => setCompleted((v) => !v)}>Mark as completed</Label>
					</RadioGroup>
					<Botao>Add a task</Botao>
				</form>
			</Container>
		</Overlay>
	);
};

export default FormTarefa;
