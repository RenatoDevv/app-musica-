import './App.css'
import Aside from './components/Aside/Aside'
import Card from './components/Card/Card'
import PlayList from './components/PlayList/PlayList'


function App() {

  return (
    <>
      <Aside />
      <main>
        <section>
          <div className='play-music'>
            <div className='play-control'>
              <div className='play-controls'>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.66667 14.75H0.25V0.25H2.66667M14.75 14.75L4.47917 7.5L14.75 0.25V14.75Z" fill="white" />
                </svg>
              </div>
              <div className='play-controls'>
                <svg width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" stroke-width="0" fill="currentColor" />
                </svg>

              </div>
              <div className='play-controls'>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.3333 14.75H14.75V0.25H12.3333M0.25 14.75L10.5208 7.5L0.25 0.25V14.75Z" fill="white" />
                </svg>

              </div>
              <div className='play-name-artist'>
                <span>Papah mama Senang</span>
                <span style={{ fontSize: '14px', color: '#909090' }}>Zee Mia</span>
              </div>
            </div>
            <div className='play-process'>
              <hr />
              <div className='play-proces-icons'>
                <span className='play-proces-time'>12:00</span>
                <div className='play-icons-content'>
                  <svg className='icons' width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 8a5 5 0 0 1 0 8" /><path d="M17.7 5a9 9 0 0 1 0 14" /><path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" /></svg>
                  <svg className='icons' width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 4l3 3l-3 3" /><path d="M18 20l3 -3l-3 -3" /><path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5" /><path d="M21 7h-5a4.978 4.978 0 0 0 -3 1m-4 8a4.984 4.984 0 0 1 -3 1h-3" /></svg>
                </div>
              </div>

            </div>
          </div>
          <div className='top-list-content'>
            <h2 className='top-list'>Top Hits Today</h2> <a href='#' className='top-next'><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.06754 15.3784C0.86484 15.1757 0.763489 14.9357 0.763489 14.6584C0.763489 14.3816 0.86484 14.1419 1.06754 13.9392L7.00673 8L1.04727 2.04055C0.858083 1.85136 0.763489 1.61487 0.763489 1.33109C0.763489 1.0473 0.86484 0.804059 1.06754 0.601356C1.27025 0.398654 1.51025 0.297302 1.78754 0.297302C2.0643 0.297302 2.30403 0.398654 2.50673 0.601356L9.31754 7.43244C9.39862 7.51352 9.45619 7.60136 9.49024 7.69595C9.52376 7.79055 9.54052 7.8919 9.54052 8C9.54052 8.10811 9.52376 8.20946 9.49024 8.30406C9.45619 8.39865 9.39862 8.48649 9.31754 8.56757L2.48646 15.3987C2.29727 15.5878 2.0643 15.6824 1.78754 15.6824C1.51025 15.6824 1.27025 15.5811 1.06754 15.3784Z" fill="white" />
            </svg>
            </a>
          </div>
          <div className='play-music-card'>
            <Card />
            <Card />
          </div>

        </section>
        <section>
          <h2 className='recomended-list'>Recommend Your Moods</h2>
          <PlayList />
        </section>
      </main>
    </>
  )
}

export default App
