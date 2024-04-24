import {useState} from "react";
export default function Form(){
     // let [name,setName]=useState(" ");
  // let [age,setAge]= useState();

  // function nameHandler(e){
  //  setName(e.target.value)
  // }
  // function ageHandler(e){
  //   setAge(e.target.value)
  // }
  let [details, setDetails] = useState({});
  function handleInput(e) {
    setDetails((prev) => {
      return { ...prev,[e.target.name]: e.target.value };
    });
  }
  function handleSubmit(){
    console.log(details);
  }
 
  
  return (
    <>
      <div className="input-container">
        {/* <button onClick={()=>{setName("Prajwol")}}>ChangeName</button> */}
        {/* <input type="text" onChange={handleInput} name="name"placeholder='Please enter your name:' value={name} />
       <input type="number" onChange={handleInput} name="age" placeholder="Enter your age" value={age}/><br /> */}
        <h1>User Registration form</h1>
        <input
          type="text"
          onChange={handleInput}
          name="name"
          placeholder="Please enter your name:"
          value={details.value}
        
        />
        <input
          type="number"
          onChange={handleInput}
          name="age"
          placeholder="Enter your age"
          value={details.value}
        />
        <br />
       <button onClick={handleSubmit}>Submit</button>
      
      </div>
    </>
  );
}