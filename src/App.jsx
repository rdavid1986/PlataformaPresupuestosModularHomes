import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import WelcomeModal from './components/WelcomeModal.jsx';
import { getThemeVars } from './utils/appConfig.js';
function App() {
	const [themeMode, setThemeMode] = useState("light");
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		const storedTheme = window.localStorage.getItem("budget-theme");
		if (storedTheme) setThemeMode(storedTheme);
	}, []);

	useEffect(() => {
		window.localStorage.setItem("budget-theme", themeMode);
		const vars = getThemeVars(themeMode);
		Object.entries(vars).forEach(([key, value]) =>
			document.documentElement.style.setProperty(key, value)
		);
	}, [themeMode]);

	const toggleTheme = () =>
		setThemeMode((mode) => (mode === "dark" ? "light" : "dark"));

	return (
		<>
			<div className="app-shell">
				<Sidebar />
				<div className="main-canvas">
					<Header
						themeMode={themeMode}
						onToggleTheme={toggleTheme}
						searchQuery={searchQuery}
						onSearchChange={setSearchQuery}
					/>
					<Main searchQuery={searchQuery} />
				</div>
			</div>

			{/* Modal fuera del flujo del layout */}
			{/* <WelcomeModal /> */}
		</>
	);
}
export default App;