export const Button = ({text,color,size,onclick,...props})=>{
    console.log("in button")
    return(
        <button 
        style={{
            fontSize:size === "small"? "2px":"32px",
            color:color
        }}

        onClick={onclick}
        >  {text}</button>
    )
};

export const RedButton = props =>{
    return <Button {...props} color="red"/>;
};

export const  GreenButton = props =>{
   return <Button size="small" color="green" {...props}/>;
};

export const  BlueButton= (props)=>{
    return <Button color="blue"/> 
}