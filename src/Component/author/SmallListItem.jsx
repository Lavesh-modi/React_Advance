export const SmallListItem = ({author}) =>{

    const{Name,Age} = author;

    return(
    <p>  Name:{Name} , Age:{Age}</p>
    )
}