export default function InteractiveCard() {
    const handleLike = () => {
        console.log('Card Liked!')
    }

    const handleShare = () => {
        console.log('Card Shared!')
    }

    const handleComment = (e) => {
        e.preventDefault()
        const comment = e.target.comment.value
        console.log("Comment:", comment)
        e.target.reset()
    }
    return (
        <div className="card">
            <h3>Amazing React Tutorial</h3>
            <p>Learn React in 10 Weeks!</p>

            <div className="actions">
                <button onClick={handleLike}>❤️Like</button>
                <button onClick={handleShare}>🔗Share</button>
            </div>

            <form onSubmit={handleComment}>
                <input type="text" name="comment" placeholder="Add a comment..." />
                <button type="submit">Post</button>
            </form>


        </div>
    )
}

