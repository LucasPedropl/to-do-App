import { User, Container, DarkMode, SwitchLabel, SwitchInput, SwitchSlider, ProgressBarContainer, ProgressBarFill } from './StyledComponents.JS';
import { useState } from 'react';
import { ProgressBarArea } from './StyledComponents.JS';
import { ProgressBarLabel } from './StyledComponents.JS';
import { DeleteArea } from './StyledComponents.JS';
import { DeleteButton } from './StyledComponents.JS';
import { useTarefa } from '../../context/TarefasContext';

const MenuDireito = () => {
	const { tarefas, deleteAllTarefas } = useTarefa();
	const [dark, setDark] = useState(false);

	const totalTasks = tarefas.length;
	const completedTasks = tarefas.filter((t) => t.completed).length;
	const percentAll = totalTasks ? Math.round((completedTasks / totalTasks) * 100) : 0;

	const todayStr = new Date().toISOString().split('T')[0];
	const todayTasksArr = tarefas.filter((t) => t.date && t.date.startsWith(todayStr));
	const totalToday = todayTasksArr.length;
	const completedToday = todayTasksArr.filter((t) => t.completed).length;
	const percentToday = totalToday ? Math.round((completedToday / totalToday) * 100) : 0;

	const importantTasksArr = tarefas.filter((t) => t.important);
	const totalImportant = importantTasksArr.length;
	const completedImportant = importantTasksArr.filter((t) => t.completed).length;
	const percentImportant = totalImportant ? Math.round((completedImportant / totalImportant) * 100) : 0;

	return (
		<Container>
			<User>
				<h3>Hi, User!</h3>
				<img src="../../../public/user.png" />
			</User>
			<DarkMode>
				<span>{dark ? 'Darkmode' : 'Lightmode'}</span>
				<SwitchLabel>
					<SwitchInput type="checkbox" checked={dark} onChange={() => setDark((v) => !v)} />
					<SwitchSlider />
				</SwitchLabel>
			</DarkMode>

			<ProgressBarArea>
				{totalTasks > 0 && (
					<>
						<ProgressBarLabel>
							<p>All tasks</p>
							<p>
								{completedTasks}/{totalTasks}
							</p>
						</ProgressBarLabel>
						<ProgressBarContainer>
							<ProgressBarFill $percent={percentAll} />
						</ProgressBarContainer>
					</>
				)}
				{totalToday > 0 && (
					<>
						<ProgressBarLabel>
							<p>Today tasks</p>
							<p>
								{completedToday}/{totalToday}
							</p>
						</ProgressBarLabel>
						<ProgressBarContainer>
							<ProgressBarFill $percent={percentToday} />
						</ProgressBarContainer>
					</>
				)}
				{totalImportant > 0 && (
					<>
						<ProgressBarLabel>
							<p>Important tasks</p>
							<p>
								{completedImportant}/{totalImportant}
							</p>
						</ProgressBarLabel>
						<ProgressBarContainer>
							<ProgressBarFill $percent={percentImportant} />
						</ProgressBarContainer>
					</>
				)}
			</ProgressBarArea>
			<DeleteArea>
				<DeleteButton onClick={() => deleteAllTarefas()}>Delete all tasks</DeleteButton>
			</DeleteArea>
		</Container>
	);
};

export default MenuDireito;
