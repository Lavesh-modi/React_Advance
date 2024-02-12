import React from "react"

export const UncontrolledForm = ()=>{
    const nameInputRef = React.createRef();
    const ageInputRef = React.createRef();
function handleSubmit () {
    console.log("form clicked ")
console.log(nameInputRef.current.value);
console.log(ageInputRef.current.value);
console.log("ended form")

}

return(
    <form onSubmit={handleSubmit}>
    <label> Name</label>
    <input  name="name"  type="text" placeholder="Name"  ref={nameInputRef}/>
    
    <input  name="age"  type="number" placeholder="Age" onChange={(e)=>{console.log('Age: ', e.target.value)}} ref={ageInputRef}/>
    {/* <button>Save</button> */}
    <input type="submit" value="Submit"></input>
</form>
)

}