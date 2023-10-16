import './index.css'
import Main from './components/Main/index.jsx'
import Dashboard from './components/Main/Dashboard'
import { Routes, Route } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import SettingsPage from './components/SettingsPage'
import MyTask from './components/MyTask'


function App() {

  return (
    <>
      <Routes>
        <Route path="Task-Management" element={<Main />}>
          <Route index element={<Dashboard />}/>
          <Route path="setting" element={<SettingsPage />} />
          <Route path="myTask" element={<MyTask />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
