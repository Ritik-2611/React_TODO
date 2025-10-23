export function Get({todos}){

    return <div>
    {
        todos.map(function (todo){
        return <div key={todo._id}>
            <span style={
                    {margin : "10px",padding : "10px"}
            }>{todo.title}</span>
            <span style={
                    {margin : "10px",padding : "10px"}
            }>{todo.description}</span>
            <button style={
                    {margin : "10px",padding : "10px"}
            } onClick={
                ()=>{
                        if(todo.completed == false) todo.completed = true
                }
            }>{todo.completed == true ?"Completed" : "Mark as Complete"}</button>
    </div>
        })
    }
    </div>
}