import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DirectoryProvider } from './context/DirectoryContext';
import Inicio from './pages/inicio';
import NoPage from './pages/noPage';
import BasePage from './pages/basePage';
import TodayTasks from './pages/todayTasks';
import ImportantTask from './pages/importantTasks';
import { TarefaProvider } from './context/TarefasContext';

function App() {
	return (
		<DirectoryProvider>
			<TarefaProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<BasePage />}>
							<Route index element={<Inicio />} />
							<Route path="today" element={<TodayTasks />} />
							<Route path="important" element={<ImportantTask />} />
						</Route>
						<Route path="*" element={<NoPage />} />
					</Routes>
				</BrowserRouter>
			</TarefaProvider>
		</DirectoryProvider>
	);
}

export default App;
