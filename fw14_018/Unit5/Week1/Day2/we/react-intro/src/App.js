// import logo from './logo.svg';
import "./App.css";

function App() {
  const userData = [
    {fname: "Alok", lname:"Kumar", age: 22},
    {fname: "Devesh", lname:"Verma", age: 22},
    {fname: "Devendra", lname:"Yadav", age: 21},
    {fname: "Abhishek", lname:"Prajapati", age: 20},

  ];

  return (

    <div>
      {userData.map((user)=>(
        <UserComponent fname={user.fname} lname={user.lname} age={user.age} />
      ))}
    </div>
  );
}
 

function UserComponent({fname,lname, age}){
  return (
   <div className = "borderBox">
     <h1>Hello {fname} {lname}</h1>
     <h1>Your age is : {age}</h1>
     
     </div>

  )
}

export default App;
