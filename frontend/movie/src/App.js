import logo from './logo.svg';
import './App.css';
import {Route,Routes}  from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Kk from './components/Navbar/kk';
import ApiC from './components/Navbar/apiContext';
import Api from './components/Navbar/Api';

function App() {
  return (
<ApiC>
<Navbar/>
    <Routes>
 <Route path='/'  element={<Api />}></Route>   
      <Route path='/:id' element={<Kk/>}></Route>
    </Routes>
    </ApiC>
  );
}

export default App;
