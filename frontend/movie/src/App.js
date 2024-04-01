import logo from './logo.svg';
import './App.css';
import {Route,Routes}  from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Kk from './components/Navbar/kk';
function App() {
  return (
<>
    <Routes>
 <Route path='/'  element={<Navbar />}></Route>   

      <Route path='/:id' element={<Kk />}></Route>
    </Routes>
    </>
  );
}

export default App;
