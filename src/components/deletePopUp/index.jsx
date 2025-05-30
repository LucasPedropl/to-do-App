import { Container, Botao, Overlay } from './StyledComponents';

const PopUpDelete = ({ tipo, onConfirm, onCancel }) => {
	var mensagem = '';
	if (tipo === 'one') {
		mensagem = 'This directory will be deleted permanently';
	} else {
		mensagem = 'All tasks will be deleted permanently';
	}
	return (
		<Overlay onClick={onCancel}>
			<Container
				style={{ zIndex: 10000 }}
				onClick={(e) => e.stopPropagation()} // Impede fechar ao clicar dentro do popup
			>
				<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
					<h1 style={{ margin: 0 }}>Are you sure?</h1>
					<span style={{ cursor: 'pointer', fontSize: 24, marginLeft: 16 }} onClick={onCancel}>
						&times;
					</span>
				</div>
				<p>{mensagem}</p>
				<div>
					<p onClick={onCancel}>Cancel</p>
					<Botao onClick={onConfirm}>Confirm</Botao>
				</div>
			</Container>
		</Overlay>
	);
};

export default PopUpDelete;
