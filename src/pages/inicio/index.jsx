import CardTarefa from '../../components/cardTarefa';
import { useTarefa } from '../../context/TarefasContext';
import { useDirectory } from '../../context/DirectoryContext';
import CardNewTask from '../../components/cardNewTask';
import { useOutletContext } from 'react-router-dom';

const Inicio = () => {
	const { tarefas, deleteTarefa, setEditTarefa, setModalOpenT, updateTarefa } = useTarefa();
	const { directories } = useDirectory();
	const { layout } = useOutletContext();

	return (
		<>
			{tarefas.map((task) => {
				const categoria = directories.find((dir) => dir.id === task.directoryId)?.name || 'Sem categoria';
				return (
					<CardTarefa
						key={task.id}
						id={task.id}
						title={task.title}
						date={task.date}
						description={task.description}
						important={task.important}
						completed={task.completed}
						categoria={categoria}
						onDelete={deleteTarefa}
						onEdit={(data) => {
							if ((Object.keys(data).length === 2 && Object.prototype.hasOwnProperty.call(data, 'important')) || (Object.keys(data).length === 2 && Object.prototype.hasOwnProperty.call(data, 'completed'))) {
								updateTarefa(data.id, data);
							} else {
								setEditTarefa(data);
								setModalOpenT(true);
							}
						}}
						$layout={layout} 
					/>
				);
			})}
			<CardNewTask $layout={layout} />
		</>
	);
};

export default Inicio;
