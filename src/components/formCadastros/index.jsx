import FormTarefa from './FormTarefa';
import FormDirectory from './FormDirectory';

const Forms = ({ tipo, onClose }) => {
	if (tipo === 'task') {
		return <FormTarefa onClose={onClose} />;
	}
	return <FormDirectory onClose={onClose} />;
};

export default Forms;
