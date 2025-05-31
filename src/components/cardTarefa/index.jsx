import { Card, Categoria, Container, DataArea, Description, FooterArea, IconsArea, InfoArea, Main, Titulo } from './StyledComponents';

const formatDate = (dateString) => {
	const date = new Date(dateString);
	const day = String(date.getDate()).padStart(2, '0');
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const year = date.getFullYear();
	return `${day}/${month}/${year}`;
};

const CardTarefa = (props) => {
	const { id, title, date, description, important, completed, categoria, onDelete, onEdit, $layout } = props;
	const starClass = important ? 'bi bi-star-fill' : 'bi bi-star';
	const buttonStatus = completed ? 'completed' : 'uncompleted';
	const buttonText = completed ? 'completed' : 'uncompleted';

	return (
		<Container $layout={$layout}>
			<Categoria>
				<p>{categoria}</p>
			</Categoria>
			<Card>
				<Main>
					<InfoArea>
						<Titulo>{title}</Titulo>
						<Description>{description}</Description>
					</InfoArea>
					<DataArea>
						<i className="bi bi-calendar4-week" />
						<p>{formatDate(date)}</p>
					</DataArea>
				</Main>
				<FooterArea>
					<button className={buttonStatus} onClick={() => onEdit({ id, completed: !completed })}>
						{buttonText}
					</button>
					<IconsArea>
						<i className={starClass} onClick={() => onEdit({ id, important: !important })} />
						<i className="bi bi-trash3-fill" onClick={() => onDelete(id)}></i>
						<i className="bi bi-three-dots-vertical" onClick={() => onEdit({ id, title, date, description, important, completed })} />
					</IconsArea>
				</FooterArea>
			</Card>
		</Container>
	);
};

export default CardTarefa;
