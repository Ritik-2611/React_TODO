const express = require('express')
const app = express()
const cors= require('cors')

const {Create,Update} = require("./valid")
const List = require("./Database/data")

app.use(express.json())
app.use(cors())
app.post('/todo',async(req,res)=>{
    const check = Create.safeParse(req.body)

    if(check.success){
        const todo = await List.create({
            title : check.data.title,
            description : check.data.description,
            completed : false
        })
        // console.log(check)
        res.json({
            msg : "Task added Successful",
            id : todo._id
        })
    }
    else{
        res.status(411).json({
            msg : "Task addition Failed"
        })
    }
})

app.get('/todos',async (req,res)=>{
    const Todo_List = await List.find()
    res.json({
        Todo_List
    })
})

app.put('/completed',async(req,res)=>{ 
    const check = Update.safeParse(req.body)
    if(!check.success){
        return res.json({
            msg : "String is Expected"
        })
    }
    try{
        const task = await List.findOne({
        _id : req.body.id
        })
        if(task.completed != true){
            await List.updateOne({
                _id : req.body.id
            },{
                completed : true
            })
            res.json({
                msg : `Congradulations!! You completed task : ${task.title} with id : ${task._id}`
            })
        }
        else{
            res.json({
                msg : "Task Already Completed!! Come Tommorow."
            })
        }
    }
    catch(error){
         res.json({
                msg : "Invalid Entry of Id..",
                Error : error.message
            })
    }
})

app.listen(3000,()=>{
    console.log("Server is running at localhost 3000")
})