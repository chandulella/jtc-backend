const mongoose = require('mongoose')
let Schema = mongoose.Schema
var postSchema = new Schema({
    name:{
        type:String,
        default:''
    },
    description:{
        type:String,
        default:''
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    likes:{
        type:Number,
        default:0
    }
})

module.exports = mongoose.model('Posts',postSchema)