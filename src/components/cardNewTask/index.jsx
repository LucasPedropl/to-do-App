import { useTarefa } from '../../context/TarefasContext';
import { AddCard, Container, Fantasma } from './StyledComponents';

const CardNewTask = ({ $layout }) => {
	const { setModalOpenT } = useTarefa();

	return (
		<Container $layout={$layout}>
			<Fantasma>fantasma</Fantasma>
			<AddCard onClick={() => setModalOpenT(true)}>Add New Task</AddCard>
		</Container>
	);
};

export default CardNewTask;
