
import  { useState } from 'react';

const Animals = () => {
    let [animals,setAnimals]= useState(['Dog','Cat','Mouse']);
    let [name,setName]= useState('Prajwol');
    function addAnimal(){
        let copyAnimals = [...animals,"deer"];
        // copyAnimals.push("dog");
        setAnimals(copyAnimals);
    }
    function changeName(){
        setName((prev)=>{
            console.log(prev);
            return prev+"karki";
        })
    }
  return (
    <div>
        <h1>Let get started</h1>
        <h1>{name}</h1>
        {
            animals.map((animal,index)=>{
                return <h3 key={index}>{animal}</h3>
            })
        }
        <button onClick={changeName}>Change Name</button>
        <button onClick={addAnimal}>Add Animal</button>
    </div>
  )
}

export default Animals