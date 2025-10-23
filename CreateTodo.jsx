import { useState } from "react"

function CreateTodo(){
    
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")

    return <div>
            <input type="text" placeholder="Add Title" style={
                {margin : "10px",padding : "10px"}
            } onChange={ 
                (e) => {
                setTitle(e.target.value)
                }
            }/>
            <input type="text" placeholder="Add Description" style={
                {margin : "10px",padding : "10px"}
            } onChange={ 
                (e) => {
                setDescription(e.target.value)
                }
            }/>
            <button 
                style={
                {margin : "10px",padding : "10px"}
            }
            onClick={
                () =>{fetch("http://localhost:3000/todo",{
                        method : "POST",
                        body : JSON.stringify({
                            title : title,
                            description : description
                        }),
                        headers : {
                            "Content-type" : "application/json"
                        }
                    })
                    .then(async ()=>  {
                        alert("Todo Added")
                    })
                }
            }>Add a Todo</button>
        </div>
}
export default CreateTodo
