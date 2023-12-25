import './play.css'

export default function PlayList() {
    return (
        <article className='play-list-content'>
            <div className='play-col'>
                <CardSong />
                <CardSong />
                <CardSong /><CardSong />
                <CardSong />
                <CardSong />
            </div>
            <CardSongLarge />

        </article>
    )
}

function CardSong() {
    return (
        <div className='play-list'>
            <img className='image-song' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPrJBWccdKMV4NOW_Q2faVg6157m63qrC1bw&usqp=CAU" alt="" />
            <div className='play-song-play'>
                <svg width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" stroke-width="0" fill="currentColor" /></svg>
            </div>
            <p className='play-list-categori'>Experimental Music</p>
        </div>
    );
}
function CardSongLarge() {
    return (
        <div className='play-list-larg'>
            <img className='image-song-larg' src="https://i.blogs.es/6803db/spotify-car-view/450_1000.webp" alt="" />
            {/* <div className='play-song-large'>
                <svg width="29" height="29" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" stroke-width="0" fill="currentColor" /></svg>
            </div> */}
            <p className='play-list-title'>Experimental Music</p>
            <span className='play-listL-description'>All the songs that make you more hitz</span>
        </div>
    );
}