const db = require('mongoose')

db.connect("url")

const lis_schema =new db.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const List = db.model("List",lis_schema)

module.exports = List
