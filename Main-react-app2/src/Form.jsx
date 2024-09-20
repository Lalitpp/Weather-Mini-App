import { useState } from "react";

export default function Form(){
  let [formData,setFormData]=useState({
    fullName:"",
    userName:"",
  });

  let handleInputChange=(event)=>{
    let fieldName= event.target.name;
    let newValue=event.target.value;
    console.log(newValue);

    setFormData((currData)=>{
      return {...currData,[fieldName]:newValue};
    });
  };
  

  let handleSubmit=(event)=>{
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName:"",
      userName:"",
    });
  };


  return(
    <form onSubmit={handleSubmit}>
      
      <label htmlFor="fullName">Full Name</label>
      <input placeholder="enter full name" type="text" value={formData.fullName}
       id="fullName" name="fullName" onChange={handleInputChange}></input>
      <br></br><br></br>


      <label htmlFor="Username">Username</label>
      <input placeholder="enter Username" type="text" value={formData.userName}
       id="Username" name="userName" onChange={handleInputChange}></input>
      <button>Submit</button>
    </form>
  );
}
