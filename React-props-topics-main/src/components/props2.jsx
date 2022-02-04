import react from "react";
import Child1 from "./props1";


const Child2kachild=(props)=>{
    return(
        <>
        <h4>MY Good Name is {props.name}
         and I am student of jawan tech institute. <br/>I have an Experience {props.experience} year.<br/> i am using cutting edge technology like 
        react,  nodejs etc
        </h4>
        
        </>
    )
}






const Child2 = (props)=>{
    return(
        <>
        <h2>OUr-Self</h2>
        
        <Child2kachild name={props.name} experience={props.experience}/>
        </>
    )
}

export default Child2