export const Regularlist =({items,sourceName,ItemComponent})=>{
    return(
<>

{
   
    items.map((item,i)=>(
        console.log(items,"CLGGGG"),
        <ItemComponent key={i} {...{[sourceName]:item } }/>
    ))
}
</>
    )
}
