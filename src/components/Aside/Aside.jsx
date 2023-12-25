import './aside.css'

export default function Aside() {
    return (
        <aside>
            <div className="logo">
                <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="31" cy="31" r="31" fill="url(#paint0_linear_6_661)" />
                    <path d="M31.4445 46.9203C28.7383 46.9203 26.3133 46.5619 24.1695 45.8452C22.0257 45.1284 20.3036 44.0676 19.0032 42.6628C17.738 41.258 17.0703 39.5665 17 37.5883H26.5945C26.7351 38.7064 27.2095 39.5665 28.0179 40.1686C28.8262 40.7419 29.8805 41.0286 31.1809 41.0286C32.5164 41.0286 33.5707 40.785 34.3439 40.2976C35.1171 39.7815 35.5037 39.0791 35.5037 38.1903C35.5037 37.4449 35.1874 36.8285 34.5548 36.3412C33.9573 35.8538 33.2017 35.4524 32.2879 35.137C31.4093 34.8217 30.1441 34.4633 28.4923 34.0619C26.1025 33.4598 24.1519 32.8578 22.6407 32.2557C21.1295 31.6537 19.8291 30.7649 18.7397 29.5894C17.6502 28.414 17.1054 26.8802 17.1054 24.988C17.1054 22.1783 18.3531 19.9851 20.8483 18.4083C23.3436 16.8028 26.5945 16 30.601 16C34.6778 16 37.9638 16.8028 40.4591 18.4083C42.9543 19.9851 44.2898 22.1927 44.4655 25.031H34.7129C34.6426 24.0562 34.2033 23.2964 33.395 22.7517C32.5867 22.1783 31.5499 21.8916 30.2847 21.8916C29.1952 21.8916 28.3166 22.1353 27.6488 22.6227C26.9811 23.0814 26.6472 23.7552 26.6472 24.6439C26.6472 25.6187 27.2095 26.3784 28.3342 26.9232C29.4588 27.4679 31.216 28.0556 33.6059 28.6863C35.9957 29.3457 37.9286 29.9765 39.4047 30.5785C40.9159 31.1806 42.2163 32.055 43.3058 33.2018C44.3953 34.3486 44.94 35.8251 44.94 37.6313C44.94 39.3515 44.3953 40.914 43.3058 42.3188C42.2514 43.7236 40.7051 44.8417 38.6667 45.6731C36.6283 46.5046 34.2209 46.9203 31.4445 46.9203Z" fill="white" />
                    <defs>
                        <linearGradient id="paint0_linear_6_661" x1="10" y1="6" x2="55.5" y2="54.5" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#F903FE" />
                            <stop offset="1" stop-color="#5303FE" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <ul className='list-nav'>
                <li><a href="" className='nav-section'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 21C5.45 21 4.97933 20.8043 4.588 20.413C4.196 20.021 4 19.55 4 19V10C4 9.68333 4.071 9.38333 4.213 9.1C4.35433 8.81667 4.55 8.58333 4.8 8.4L10.8 3.9C10.9833 3.76667 11.175 3.66667 11.375 3.6C11.575 3.53333 11.7833 3.5 12 3.5C12.2167 3.5 12.425 3.53333 12.625 3.6C12.825 3.66667 13.0167 3.76667 13.2 3.9L19.2 8.4C19.45 8.58333 19.646 8.81667 19.788 9.1C19.9293 9.38333 20 9.68333 20 10V19C20 19.55 19.8043 20.021 19.413 20.413C19.021 20.8043 18.55 21 18 21H14V14H10V21H6Z" fill="white" />
                </svg>
                    Home</a></li>
                <li><a href="" className='nav-section'>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 11H11.71L11.43 10.73C12.4439 9.55402 13.0011 8.0527 13 6.5C13 5.21442 12.6188 3.95772 11.9046 2.8888C11.1903 1.81988 10.1752 0.986756 8.98744 0.494786C7.79973 0.00281635 6.49279 -0.125905 5.23192 0.124899C3.97104 0.375703 2.81285 0.994767 1.90381 1.90381C0.994767 2.81285 0.375703 3.97104 0.124899 5.23192C-0.125905 6.49279 0.00281635 7.79973 0.494786 8.98744C0.986756 10.1752 1.81988 11.1903 2.8888 11.9046C3.95772 12.6188 5.21442 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#9B9B9B" />
                    </svg>
                    Search</a></li>
                <li><a href="" className='nav-section'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 4H0V18C0 19.1 0.9 20 2 20H16V18H2V4Z" fill="#9B9B9B" />
                        <path d="M18 0H6C4.9 0 4 0.9 4 2V14C4 15.1 4.9 16 6 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 10L15.5 8.5L13 10V2H18V10Z" fill="#9B9B9B" />
                    </svg>

                    Library</a></li>
            </ul>
            <p className='trending-song'>Trendign Songs</p>
            <ul className='list-music'>
                <li><Option title="As It Was" auchor="Harry Style" duration="3.20 " /></li>
                <li><Option title="About Damn Time" auchor="Lizzo" duration="3.20 " /></li>
                <li><Option title="Old On" auchor="Justin Bieber" duration="3.20 " /></li>
                <li><Option title="Ulholy" auchor="Sam Smith" duration="3.20 " /></li>
                <li><Option title="Until I Found In You" auchor="Stephen Sanchez" duration="3.20 " /></li>
                <li><Option title="Flowers" auchor="Miley Cyrus" duration="3.20 " /></li>
            </ul>
        </aside>
    )
}

export function Option({ title, auchor, duration }) {
    return (
        <div className='nav-link'>
            <div className='nav-link-info'>
                <p className='text-sm-title'>{title}</p>
                <span className='text-gray-200'>{auchor}</span>
            </div>
            <div className='nav-duration'>
                <span className='text-duration'>{duration}</span>
            </div>

        </div>
    );
}