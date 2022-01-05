import {Routes,Route} from 'react-router-dom'

import Login from './components/Login.jsx'
import Home from './components/Home.jsx'
import Search from './components/Search.jsx'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/search" element={<Search />}/>
    </Routes>
  );
}

export default App;
