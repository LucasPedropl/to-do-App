import { createContext, useContext, useState, useEffect } from 'react';
import directoryServices from '../services/directoryServices';

const DirectoryContext = createContext();

export function useDirectory() {
	return useContext(DirectoryContext);
}

export function DirectoryProvider({ children }) {
	const [directories, setDirectories] = useState([]);
	const [modalOpen, setModalOpen] = useState(false);
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
		await directoryServices.createDirectory(data);
		fetchDirectories();
	}

	async function updateDirectory(id, data) {
		await directoryServices.updateDirectory(id, data);
		fetchDirectories();
	}

	async function deleteDirectory(id) {
		await directoryServices.deleteDirectory(id);
		fetchDirectories();
	}

	return (
		<DirectoryContext.Provider
			value={{
				directories,
				modalOpen,
				setModalOpen,
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
