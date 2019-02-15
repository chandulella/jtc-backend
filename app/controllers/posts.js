var mongoose = require('mongoose')
var Post = mongoose.model('Posts')
module.exports = {
    createPost: async (req, res) => {
        try {
            let newPost = new Post();
            newPost.name = req.body.name;
            newPost.description = req.body.description;
            await newPost.save();
            return res.json({ success: true })
        } catch (err) {
            return res.json({ error: err, success: false })
        }
    },
    getPosts: async (req, res) => {
        try {
            let posts = await Post.find({});
            return res.json({ posts: posts })
        } catch (err) {
            return res.json({ error: err})
        }
    },
    updatePost: async (req, res) => {
        try {
            if(req.body.like){
                await Post.findByIdAndUpdate({ _id: req.body.post_id },{$inc:{likes : 1}})
            }else{
                await Post.findByIdAndUpdate({ _id: req.body.post_id, likes :{$gt: 1}},{$inc:{likes: -1}})
            }
            
            return res.json({ success: true })
        } catch (err) {
            return res.json({ error: err, success: false })
        }
    }
};