import './App.css';
import Employee from './components/Employee'
import {useState} from 'react'
function App() {
  const [role, setRole] = useState('dev');
  
  const showEmployees = true; 
  return (
    <div className="App">
      
      {showEmployees ? (
    
        <> 
          <input type="text" onChange={(e) => {
            console.log(e.target.value)
            setRole(e.target.value) 
          }}/>
        <Employee name= " Brian" role = "Software Engineer "> </Employee>
        <Employee name= " Caleb"></Employee>
        <Employee name = " John"></Employee>
       <Employee name = " Abby" role={role}> </Employee>
        </> 
      ):(
        <p> You can not view Employees</p>

     ) }
      
    </div>
  );
}

export default App;
