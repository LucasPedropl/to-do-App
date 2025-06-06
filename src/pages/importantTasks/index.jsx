import CardTarefa from '../../components/cardTarefa';
import { useTarefa } from '../../context/TarefasContext';
import { useDirectory } from '../../context/DirectoryContext';

const ImportantTask = () => {
	const { tarefas, deleteTarefa, setEditTarefa, setModalOpenT, updateTarefa } = useTarefa();
	const { directories } = useDirectory();
	const tarefasImportantes = tarefas.filter((task) => task.important === true);
	return (
		<>
			{tarefasImportantes.map((task) => {
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
					/>
				);
			})}
		</>
	);
};

export default ImportantTask;
