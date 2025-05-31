import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, DivFilter, Icons, Title, DivIcons, Filtro } from './StylesComponent';
import { useTarefa } from '../../context/TarefasContext';

const PageNav = ({ layout, setLayout }) => {
	const location = useLocation();
	const pageName = location.pathname.split('/').filter(Boolean).pop();
	const displayName = !pageName ? 'All' : pageName.charAt(0).toUpperCase() + pageName.slice(1);

	const { tarefas } = useTarefa();
	const totalTasks = tarefas.length;

	const completedTasks = tarefas.filter((t) => t.completed).length;

	const uncompletedTasks = tarefas.filter((t) => t.completed === false).length;

	const importantTasksArr = tarefas.filter((t) => t.important);
	const totalImportant = importantTasksArr.length;

	let totalTasksValue = totalTasks;

	const todayStr = new Date().toISOString().split('T')[0];
	const todayTasksArr = tarefas.filter((t) => t.date && t.date.startsWith(todayStr));
	const totalToday = todayTasksArr.length;

	if (pageName === 'today') {
		totalTasksValue = totalToday;
	} else if (pageName === 'important') {
		totalTasksValue = totalImportant;
	} else if (pageName === 'completed') {
		totalTasksValue = completedTasks;
	} else if (pageName === 'uncompleted') {
		totalTasksValue = uncompletedTasks;
	}

	const [sort, setSort] = useState('');

	const handleSortChange = (e) => {
		setSort(e.target.value);
	};

	let tarefasOrdenadas = [...tarefas];
	if (sort === 'earlierFirst') {
		tarefasOrdenadas.sort((a, b) => new Date(a.date) - new Date(b.date));
	} else if (sort === 'laterFirst') {
		tarefasOrdenadas.sort((a, b) => new Date(b.date) - new Date(a.date));
	} else if (sort === 'completedFirst') {
		tarefasOrdenadas.sort((a, b) => b.completed - a.completed);
	} else if (sort === 'uncompletedFirst') {
		tarefasOrdenadas.sort((a, b) => a.completed - b.completed);
	}

	return (
		<Container>
			<Title>
				{displayName} tasks: {totalTasksValue}
			</Title>
			<DivFilter>
				<DivIcons>
					<Icons className="bi bi-list" style={{ color: layout === 'list' ? '#7C3AED' : '#94a3b8' }} onClick={() => setLayout('list')} />
					<Icons className="bi bi-grid" style={{ color: layout === 'grid' ? '#7C3AED' : '#94a3b8' }} onClick={() => setLayout('grid')} />
				</DivIcons>
				<Filtro value={sort} onChange={handleSortChange}>
					<option value="">Sort By</option>
					<option value="orderAdded">Order Added</option>
					<option value="earlierFirst">Earlier First</option>
					<option value="laterFirst">Later First</option>
					<option value="completedFirst">Completed First</option>
					<option value="uncompletedFirst">Uncompleted First</option>
				</Filtro>
			</DivFilter>
		</Container>
	);
};

export default PageNav;
