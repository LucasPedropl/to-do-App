/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';
import directoryServices from '../services/directoryServices';

const DirectoryContext = createContext();

export function useDirectory() {
	return useContext(DirectoryContext);
}

export function DirectoryProvider({ children }) {
	const [directories, setDirectories] = useState([]);
	const [modalOpenD, setModalOpenD] = useState(false);
	const [editDirectory, setEditDirectory] = useState(null);

	// Carrega diretórios ao iniciar
	useEffect(() => {
		fetchDirectories();
	}, []);

	async function fetchDirectories() {
		const data = await directoryServices.getDirectories();
		setDirectories(data);
	}

	async function addDirectory(data) {
		const tempId = Date.now();
		const tempDirectory = { id: tempId, ...data };
		setDirectories((prev) => [...prev, tempDirectory]); // Adiciona imediatamente

		try {
			await directoryServices.createDirectory(data);
			// Atualize a lista com o que veio da API (ou faça fetchDirectories())
			fetchDirectories();
		} catch {
			// Se der erro, remova o temporário
			setDirectories((prev) => prev.filter((d) => d.id !== tempId));
		}
	}

	async function updateDirectory(id, data) {
		const oldDirectory = directories.find((d) => d.id === id);
		setDirectories((prev) => prev.map((d) => (d.id === id ? { ...d, ...data } : d)));

		try {
			await directoryServices.updateDirectory(id, data);
			fetchDirectories();
		} catch {
			// Se der erro, volta ao antigo
			setDirectories((prev) => prev.map((d) => (d.id === id ? oldDirectory : d)));
		}
	}

	async function deleteDirectory(id) {
		const oldDirectories = directories;
		setDirectories((prev) => prev.filter((d) => d.id !== id));

		try {
			await directoryServices.deleteDirectory(id);
			fetchDirectories();
		} catch {
			// Se der erro, volta ao antigo
			setDirectories(oldDirectories);
		}
	}

	return (
		<DirectoryContext.Provider
			value={{
				directories,
				modalOpenD,
				setModalOpenD,
				editDirectory,
				setEditDirectory,
				addDirectory,
				updateDirectory,
				deleteDirectory,
			}}
		>
			{children}
		</DirectoryContext.Provider>
	);
}
