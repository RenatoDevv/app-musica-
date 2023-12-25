import './card.css'

export default function Card() {
    return (
        <div className='card'>
            <img src="https://www.lavanguardia.com/andro4all/hero/2021/06/Como-usar-Spotify-online-a-traves-de-su-reproductor-web.jpg?width=768&aspect_ratio=16:9&format=nowebp" alt="" />
            <div className='song-details'>
                <h2 className='name-song'>Senandung Air</h2>
                <span className='name-artist'>Toiyb Z</span>
                <span className='view-song'>
                    1.5m streaming
                    <div className='play-song'>
                        <svg width="29" height="29" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" stroke-width="0" fill="currentColor" /></svg>
                    </div>
                </span>
            </div>

        </div>
    );
}
