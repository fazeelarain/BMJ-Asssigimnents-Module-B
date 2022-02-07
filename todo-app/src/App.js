import react, {useState,useEffect} from "react";
import Alert from "./components/Alert";
import List from "./components/list";

// Local Storage

const getLocalStorage = () =>{
  let list = localStorage.getItem("list");
  if(list){
    return(list = JSON.parse(localStorage.getItem("list")));

  }else{
    return[];
  }
}


const App = ()=>{

  const [name, setName]= useState("");
  const [list,setList] =useState(getLocalStorage());
  const [isEditing, setisEditing] = useState(false);
  const [editId, setEditId]= useState(null);
  const [alert,setAlert] = useState ({show:false,msg:"",type:""})

  const handleSubmit = (e)=>{
      e.preventDefault();
      if(!name){
        showAlert(true, "danger", "plz Enter value");
      }else if(name && isEditing){
        setList(
          list.map((item)=>{
            if(item.id === editId){
              return{... item,title:name}
            }
            return item;
          })
        );
        setName("");
        setEditId(null);
        setisEditing(false);
        showAlert(true ,"success" ,"value changes")
      }else{
        showAlert(true , "success" ,"Item has added")
        const newItem ={id:new Date().getTime().toString(),title:name};
        setList([...list,newItem]);
        setName("")
      }
  }


// Show Alert 

const showAlert = (show=false,type="",msg="")=>{
      setAlert({show,type,msg});
}


// removeItem
  const removeItem = (id)=>{
    showAlert(true, "danger", "deleted");
    setList(list.filter((item)=>item.id !==id))
  }                 


// editItem
  const editItem =(id)=>{
    const specificItem = list.find((item)=> item.id===id)
    setisEditing(true)
    setEditId(id)
    setName(specificItem.title)
  }

  // clearList
  const clearList= (id)=>{
    showAlert(true,"danger" ,"clear data") 
    setList([])
  }

  //  UseEffect 
  useEffect(()=>{
    localStorage.setItem("list",JSON.stringify(list))
  },[list])

    return(
      <div>
        <section className="section-center">
          <form className="grocery-form" onSubmit={handleSubmit}>
            {alert.show && <Alert {...alert} removeAlert={showAlert} list = {list} />}

            <h1>Todo List App</h1>
            <div className="form-control">
              <input type="text" className="grocery"  placeholder="Enter your data" value={name} onChange={(e)=>setName(e.target.value)}/>
              <button className="submit-btn">{isEditing? "edit" :"submit"}</button>
            </div>

          </form>
          
          <br /> <br />
          {
            list.length > 0 &&(
                <div className="grocery-container">
                 <List items={list} removeItem ={removeItem} editItem = {editItem} />
                 <button className="clear-btn" onClick={clearList}>Clear All</button>
                </div>
    
            )
          }

        </section>
      </div>
    )
  
}

export default App;
