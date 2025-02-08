const Post = require("../../Models/Post.modules");
class Posts_Controller {

    static Add_Post = async (req, res) => {
        try {
            const { title, author } = req.body;
    
            // Validate title
            if (!title) {
                return res.status(400).json({ message: "Title is required" });
            }
    
            // Validate file
            if (!req.file || !req.file.filename) {
                return res.status(400).json({ message: "Image is required" });
            }
    
            // Validate user
            if (!req.author || !req.author._id) {
                return res.status(401).json({ message: "User not authenticated" });
            }
    
            // Create post
            const addpost = await Post.create({
                title : title,
                image: req.file.filename,
                author: req.author._id
            });
    
            return res.status(200).json({ message: "Post Added Successfully", addpost });
        } catch (error) {
            return res.status(500).json({ message: "Internal Server Error", error: error.message });
        }
    };
    

    static getAll_Post = async (req, res) => {
        try {
            const get = await Post.find({}).sort({ createdAt: -1 }).populate('author', 'username').populate('comments.user', 'username');
            return res.status(200).json({ message: "All Post Recieves...", get });
        } catch (error) {
            return res.status(400).json({ message: "Goat Some Errors", error });
        }
    };

    static Like_Post = async (req, res) => {
        const { id } = req.params;
        try {
            const post = await Post.findById(id);
            console.log(post)
            if (!post) return res.status(404).send('Post not found');
            const index = post.likes.indexOf(req.author._id);
            if (index === -1) {
                post.likes.push(req.author._id);
            } else {
                post.likes.splice(index, 1);
            }
            await post.save();
            res.status(200).json(post);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };

    static Unlike = async (req, res) => {
        try {
            const { postId } = req.params;
            const userId = req.auth.userId;
            const post = await Post.findById(postId);

            if (!post) return res.status(404).json({ error: 'Post not found' });

            if (post.likes.includes(userId)) {
                post.likes = post.likes.filter(id => id.toString() !== userId);
                await post.save();
                return res.json({ likes: post.likes });
            }

            res.status(400).json({ error: 'Post was not liked by the user' });
        } catch (err) {
            res.status(500).json({ error: 'An error occurred' });
        }
    };

    static Comment_Post = async (req, res) => {
        const { id } = req.params;
        try {
            const { text } = req.body;
            const post = await Post.findById(id);
            if (!post) return res.status(404).send('Post not found');
    
            post.comments.push({ user: req.author._id, text });
            await post.save();
            res.status(201).json(post);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };
}
module.exports = Posts_Controller;