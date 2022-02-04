import React from "react";



const Child3kachild =(props)=>{
    return(
        <>
        <h2>Most Cutting FRONTEND-Technology</h2>
       <ul style={{listStyleType:"none"}}>
       <h3>{props.skill.map((value)=>{
            return <li>{value}</li>
        })}</h3>
       </ul>
        <h2>BACKEND-Technology</h2>
        <h3>
           <ul style={{listStyleType:"none"}}>
               <li>  {props.obj.skill1} </li>
               <li>  {props.obj.skill2} </li>
               <li>  {props.obj.skill3} </li>
               <li>  {props.obj.skill4} </li>
              
           </ul>
        
        </h3>
        </>
    )
}


const Child3 = ()=>{
    return(
        <>
        <h1>SkillSET</h1>
        </>
    )
}


export{
    Child3,
    Child3kachild
}