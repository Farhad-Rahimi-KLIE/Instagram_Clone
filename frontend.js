// pages/index.js
import { useSelector, useDispatch } from 'react-redux';
import { likePost, commentPost } from '../store/postsSlice';
import { useState } from 'react';

export default function Home() {
    const { posts, loading, error } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const [comment, setComment] = useState('');

    const handleLike = (postId) => {
        dispatch(likePost(postId));
    };

    const handleComment = (postId) => {
        if (comment.trim()) {
            dispatch(commentPost({ postId, text: comment }));
            setComment('');
        }
    };

    return (
        <div className="container">
            <h1>Instagram Clone</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <div className="posts">
                {posts.map((post) => (
                    <div key={post._id} className="post">
                        <p>{post.content}</p>
                        <div>
                            <button onClick={() => handleLike(post._id)}>
                                {post.likes.includes('currentUserId') ? 'Unlike' : 'Like'} ({post.likes.length})
                            </button>
                        </div>
                        <div className="comments">
                            <h4>Comments</h4>
                            {post.comments.map((comment) => (
                                <p key={comment._id}>{comment.text}</p>
                            ))}
                            <input
                                type="text"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                placeholder="Add a comment"
                            />
                            <button onClick={() => handleComment(post._id)}>Comment</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}