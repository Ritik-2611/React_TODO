const db = require('mongoose')

db.connect("mongodb+srv://rookee684:Ritik3026@cluster0.6ace5bo.mongodb.net/TodoList")

const lis_schema =new db.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const List = db.model("List",lis_schema)

module.exports = List