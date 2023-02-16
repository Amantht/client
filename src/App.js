import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import Home from './components/Home';
import Profile from './components/Profile';
import Ex4 from './components/Ex4';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Container } from '@mui/system';
import Ex5 from './components/Ex5';

function App() {
    return (
    <div>
    <div className='App-header'>
      <img src={logo} style={{width:"130px",height:"130px"}} alt="Hi"/>
      <h1>This is my sample Web page</h1>
    </div>
    <div className='App-body'>
      <Container>
        <Home/>
      <BrowserRouter>
        <Routes>
          <Route path="log" element={<Login/>}/>
          <Route path="reg" element={<Registration/>}/>
          <Route path="pro" element={<Profile/>}/> 
          <Route path='ex4' element={<Ex4/>}/>
          <Route path='ex5' element={<Ex5/>}/>

        </Routes>    
      </BrowserRouter>
      </Container>


    </div>
    </div>
  );
}

export default App;