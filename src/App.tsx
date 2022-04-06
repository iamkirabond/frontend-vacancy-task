import { Routes, Route } from "react-router-dom";
import { Tokens } from './pages/Tokens';
import Menu from './components/Menu/Menu';
import { Search } from './pages/Search';
import './App.css'

function App() {
  return (
    <div className="app">
      <Menu/>
      <Routes>
        <Route path="/" element={ <Tokens />} />
        <Route path="/tokens" element={ <Tokens />} />
        <Route path="/search" element={ <Search />} />
        <Route path="*" element={ <Tokens />} />
      </Routes> 
    </div>
  )
}

export default App
