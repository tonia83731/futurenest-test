import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ChartPage from './pages/ChartPage'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import MinePage from './pages/MinePage'

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/chart" element={<ChartPage />}></Route>
          <Route path="/mine" element={<MinePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
