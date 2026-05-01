import {BrowserRouter, Route, Routes} from 'react-router'

import Home from './components/Body'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
)

export default App
