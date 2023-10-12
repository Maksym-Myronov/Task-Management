import './index.css'
import Main from './components/Main/index.jsx'
import Dashboard from './components/Main/Dashboard'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <Routes>
        <Route path='/Task-Management' element={<Main />}>
          <Route index element={<Dashboard />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
