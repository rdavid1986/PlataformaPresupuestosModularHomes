import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import { getThemeVars } from './utils/appConfig.js'

function App() {
  const [themeMode, setThemeMode] = useState('light')
  const [searchQuery, setSearchQuery] = useState('')
  useEffect(() => {
  console.log("Main montado");
}, []);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('budget-theme')
    if (storedTheme) {
      setThemeMode(storedTheme)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('budget-theme', themeMode)
  }, [themeMode])

  const themeStyle = getThemeVars(themeMode)
  const toggleTheme = () => setThemeMode((mode) => (mode === 'dark' ? 'light' : 'dark'))

  return (
    <div className="app-shell" data-theme={themeMode} style={themeStyle}>
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
  )
}

export default App
