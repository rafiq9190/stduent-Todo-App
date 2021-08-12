import Student from "./student"

function StudentList ({data , index,deletHandler , upDateHandler}){
    return(

    

  <tr key={index}>
      <td>{index}</td>
      <td>{data.name}</td>
      <td>{data.batch}</td>
      <td>{data.roll}</td>
      <td>{data.className}</td>
      <td>
          <button onClick={()=>deletHandler(index)}>Delete</button>
          
    </td>
    <td>
          <button onClick={()=>upDateHandler(data,index)}>Edit</button>
          
    </td>
    </tr>
    
  

    )
}

export default StudentList