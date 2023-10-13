import './index.css'
import Main from './components/Main/index.jsx'
import Dashboard from './components/Main/Dashboard'
import { Routes, Route } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import SettingsPage from './components/SettingsPage'


function App() {

  return (
    <>
      <Routes>
        <Route path="Task-Management" element={<Main />}>
          <Route index element={<Dashboard />}/>
          <Route path="setting" element={<SettingsPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
