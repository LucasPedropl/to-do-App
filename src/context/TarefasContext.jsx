/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';
import tarefaServices from '../services/tarefasServices';

const TarefaContext = createContext();

export function useTarefa() {
	return useContext(TarefaContext);
}

export function TarefaProvider({ children }) {
	const [tarefas, setTarefas] = useState([]);
	const [modalOpenT, setModalOpenT] = useState(false);
	const [editTarefa, setEditTarefa] = useState(null);

	useEffect(() => {
		fetchTarefas();
	}, []);

	async function fetchTarefas() {
		const data = await tarefaServices.getTarefas();
		setTarefas(data);
	}

	async function addTarefa(data) {
		const tempId = Date.now();
		const tempTarefa = { id: tempId, ...data };
		setTarefas((prev) => [...prev, tempTarefa]);

		try {
			await tarefaServices.createTarefas(data);
			fetchTarefas();
		} catch {
			setTarefas((prev) => prev.filter((t) => t.id !== tempId));
		}
	}

	async function updateTarefa(id, data) {
		const oldTarefa = tarefas.find((t) => t.id === id);
		setTarefas((prev) => prev.map((t) => (t.id === id ? { ...t, ...data } : t)));

		try {
			await tarefaServices.updateTarefa(id, data);
			fetchTarefas();
		} catch {
			setTarefas((prev) => prev.map((t) => (t.id === id ? oldTarefa : t)));
		}
	}

	async function deleteTarefa(id) {
		const oldTarefa = tarefas;
		setTarefas((prev) => prev.filter((t) => t.id !== id));

		try {
			await tarefaServices.deleteTarefa(id);
			fetchTarefas();
		} catch {
			setTarefas(oldTarefa);
		}
	}

	async function deleteAllTarefas() {
		const oldTarefa = tarefas;
		try {
			await tarefaServices.deleteAllTarefa();
			fetchTarefas();
		} catch {
			setTarefas(oldTarefa);
		}
	}

	return (
		<TarefaContext.Provider
			value={{
				tarefas,
				modalOpenT,
				setModalOpenT,
				editTarefa,
				setEditTarefa,
				addTarefa,
				updateTarefa,
				deleteTarefa,
				deleteAllTarefas,
			}}
		>
			{children}
		</TarefaContext.Provider>
	);
}
