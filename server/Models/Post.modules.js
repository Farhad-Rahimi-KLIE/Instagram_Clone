const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title : {type : String},
    image : {type : String},
    author: { type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
        },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }],
    comments: [
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
            text: { type: String, required: true },
        }
    ]
}, { timestamps: true });

const Post = mongoose.model('posts', PostSchema);
module.exports = Post;