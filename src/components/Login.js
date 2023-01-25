import '../App.css';
import axios from 'axios';

function Login() {
  function Handle(event)
  {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const un = data.get("t1");
    const pw = data.get("pw");
    console.log(un+" --- "+pw);
    axios.get('http://localhost:8081/check',{params: {
      un: un,
      pw: pw
    }}).then((response) => {
      console.log(response.data);
    })

  }
  return (
    <div>
    <div className='App-body'>
      <div class='App-login'>
      <form onClick={Handle} style={{border:"2px solid blue",padding:"20px"}}>
      <center><h3 style={{border:"2px solid red"}}>Login Here</h3></center>
        Username:<input type="text" name="t1"/><br/>
        Password:<input type="password" name="pw"/><br/>
        <center><input type="submit" value="login"/></center>
      </form>
      </div>
    </div>
    </div>
  );
}

export default Login;