import React, { useState } from 'react';
import { Container, TextInput, Titulo, Nav, Svg, Label, TextArea, Select, InputCheck, RadioGroup, Botao } from './StyledComponents';

const CloseIcon = (
	<Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
		<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
	</Svg>
);

const Forms = ({ tipo }) => {
	const [checked1, setChecked1] = useState(false);
	const [checked2, setChecked2] = useState(false);

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
				<Botao tipo={tipo}>Add a task</Botao>
			</Container>
		);
	}else{
		return (
			<Container>
				<Nav>
					<Titulo>Create new directory</Titulo>
					{CloseIcon}
				</Nav>
				<Label htmlFor="title">Title</Label>
				<TextInput type="text" name="title" placeholder="Enter a directory name" />
				<Botao tipo={tipo}>Create</Botao>
			</Container>
		);
	}
};

export default Forms;
