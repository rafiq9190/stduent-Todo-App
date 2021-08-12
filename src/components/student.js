import {useState} from 'react';
import Data from'./data';
import StudentList from './studentList';

function Student( ){
    const[student, setStudent]=useState(Data)
    const [name, setName]= useState('');
    const [batch , setBatch] = useState("");
    const [roll , setRoll] = useState("");
    const [className , setClassName] = useState("");
    const [errormassage , setErrorMassage] = useState('')
    const [flag , setFlag] = useState(false)
    const [updateIndex, setUpdateIndex] = useState(0)

    const deletHandler = (index)=>{
      // console.log('index',index)
      let newStud = student.filter((item , i)=>{
        if(i !== index){
          return item;
        }

      })
      setStudent([...newStud])

      
    }

    function ctaHandler (){
      setErrorMassage('')
      if(name!= "" && batch != "" && roll !="", className!=""){

        let students={
          name,
          batch:batch,
          roll,
          class:className,
        }
        setStudent([...student, students]);
        setName('');
        setBatch('');
        setRoll('');
        setClassName('');
      }else{
        setErrorMassage("Param can't b empty")
      }
    }

    function upDateHandler (data,index){
       setUpdateIndex(index)
      setName(data.name);
        setBatch(data.batch);
        setRoll(data.roll);
        setClassName(data.class);
        setFlag(true)
    }
     
    const ctaUpDateHandler =(index)=>{
      setErrorMassage('')
      if(name!= "" && batch != "" && roll !="", className!=""){

        let students={
          name,
          batch:batch,
          roll,
          class:className,
        }

        let updateStudent= student.map((st, index)=>{
          if(updateIndex === index){
            return students
          }else{
            return st
          }
        })
        setStudent([...updateStudent]);
        setName('');
        setBatch('');
        setRoll('');
        setClassName('');
        setFlag(false)
      }else{
        setErrorMassage("Param can't b empty")
      }

    }

    return(
        <div>
          <h3>Add Student</h3>
            <input type="text" placeholder="Name" value={name}onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder="Batch" value={batch} onChange={(e)=>setBatch(e.target.value)}/>
            <input type="text" placeholder="Roll No" value={roll}onChange={(e)=>setRoll(e.target.value)}/>
            <input type="text" placeholder="Class" value={className}onChange={(e)=>setClassName(e.target.value)}/>
            <hr/>
            {
                flag ?
                <button onClick={ctaUpDateHandler}>Updata</button>:
                <button onClick={ctaHandler}>submit</button>
              }
            {/* <button onClick={ctaHandler}>Submit</button> */}
            <p style={{background:"red", color:"white"}}>

              

      {
        errormassage 
      }
            </p>
            <br/>
            <hr/>

      <h3>Student List</h3>
<table border="1px solid" class="table table-striped table-dark">
  <thead>
    <tr>
      <th>No</th>
      <th>Name</th>
      <th>Batch</th>
      <th>Roll</th>
      <th>Class</th>
    </tr>
  </thead>
  <tbody>
  {
        student.map((item , index)=>{
            return(
                <StudentList data={item} index={index} deletHandler={deletHandler} upDateHandler={upDateHandler}/>
            )
        }) 
      }
    
  </tbody>
</table>
            
      
      
 

        </div>
    )
}

export default Student