const api = 'https://api-todolist-1-ot3w.onrender.com';

class TarefaServices {
	async getTarefas() {
		const res = await fetch(`${api}/tarefaList`);
		return res.json();
	}

	async createTarefas(data) {
		const res = await fetch(`${api}/tarefaCreate`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		});
		return res.json();
	}

    async updateTarefa(id, data){
        const res = await fetch(`${api}/tarefaUpdate/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		});
        return res.json()
    }

    async deleteTarefa(id){
        const res = await fetch(`${api}/tarefaDelete/${id}`,{
            method: 'DELETE'
        })
        return res.json()
    }

    async deleteAllTarefa(){
        const res = await fetch(`${api}/tarefaDeleteAll`,{
            method: 'DELETE'
        })
        return res.json()
    }
}

const tarefaServices = new TarefaServices();
export default tarefaServices;