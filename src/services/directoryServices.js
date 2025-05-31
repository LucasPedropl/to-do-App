//const api = 'https://api-todolist-1-ot3w.onrender.com';
const api = 'http://localhost:3000';

class DirectoryServices {
	async getDirectories() {
		const res = await fetch(`${api}/directoryListar`);
		return res.json();
	}

	async createDirectory(data) {
		const res = await fetch(`${api}/directoryCreate`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		});
		return res.json();
	}

	async updateDirectory(id, data) {
		const res = await fetch(`${api}/directoryUpdate/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		});
		return res.json();
	}

	async deleteDirectory(id) {
		const res = await fetch(`${api}/directoryDelete/${id}`, {
			method: 'DELETE',
		});
		return res.json();
	}
}

const directoryServices = new DirectoryServices();
export default directoryServices;
