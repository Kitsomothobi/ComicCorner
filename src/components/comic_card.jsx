function Card({comic}){
    
    function handleLike(){
        alert("Liked")
    }
     function handleLater(){
        alert("saved to playlist")
    }


    return <div className="comic-card">
            <div className="cover">
                <img src="{comic.url}" alt="{comic.title}" />
                <div className="comic-overlay">
                    <button className="like-btn" onClick={handleLike}>❤️</button>
                    <button className="later-btn" onClick={handleLater}>⏱</button>
                </div>
            </div>

            <div className="movie-info">
                  <h3>{comic.title} • {comic.authors}</h3>
                  <p>{comic.release}</p>
            </div>
    </div>

}

export default Card