import {BrowserRouter, Route, Routes} from 'react-router'

import Home from './components/Home'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
)

export default App
