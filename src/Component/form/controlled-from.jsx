import { useEffect, useState } from "react"


export const ControlledForm = ()=>{
    const [error, setError] = useState("")
const [form,setForm]=useState({ name:"",age:"",email:""})

const handleSubmit = (event)=>{
    event.preventDefault();
    console.log("form:_", form)


}

const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  useEffect(()=>{
    if(form.name.length<1){
        setError("the name is the invalid")
    }else{
        return(
            setError("")
        )
    }

  },[form.name])

    return(
        
        <form onSubmit={handleSubmit}>
            {error &&  <p style={{color:'red'}}>this is the error*{error}</p>}
        <label> Name</label>
        <input  name="name"  type="text" placeholder="Name" value={form.name} onChange={handleChange}/>
        
        <input  name="age"  type="number" placeholder="Age" value={form.age} onChange={handleChange}/>
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange}/>
        {/* <button>Save</button> */}
        <input type="submit" value="Submit"></input>
    </form>
        
    )
}