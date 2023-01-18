import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import Home from './components/Home';
import Profile from './components/Profile'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Container } from '@mui/system';

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

        </Routes>    
      </BrowserRouter>
      </Container>


    </div>
    </div>
  );
}

export default App;