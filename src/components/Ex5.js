import { ResetTvOutlined } from '@mui/icons-material';
import axios from 'axios';
import { useState } from 'react';

function Ex5() {
    // const[result,setResult]=useState(null);
    // const isDict =dict => {
    //     return typeof dict== "object" && !Array.isArray


    function handleSubmit(event){
        event.preventDefault();
        const data=new FormData(event.currentTarget);
        axios.post('http://localhost:8081/insert_stu',{
            stu_id: parseInt(data.get("stu_id")),
            stu_name: data.get("stu_name"),
            stu_dept: data.get("stu_dept"),
            stu_address: data.get("stu_address")
        }).then((response)=>{
            console.log(response.data);
        })
    }
    function showOne(){
        axios.get('http://localhost:8081/show_one_stu',{params:{

        }}).then((response)=>{
            console.log(response.data)
        })
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                Student Id:<input type="text" name="stu_id"/>
                <br/>
                Name:<input type="text" name="stu_name"/>
                <br/>
                Department:<input type="text" name="stu_dept"/>
                <br/>
                Address:<input type="text" name="stu_address"/>
                <br/>
                <input type="submit" value="Save Student Data"/>
                <br/>
            </form>
          
            <button onClick={()=>showOne()}> Display 1st Student</button>
        </div>
        
    );

}

export default Ex5;

