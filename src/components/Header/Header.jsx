import './header.css'

export default function Header() {
    return (
        <header>
            <div className="logo">
                <h1>Renato Devv</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Desarrollo</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <li><a href="">Youtube</a></li>
                    <li><a href="">Git</a></li>
                    <li><a href="">LinkedIn</a></li>
                </ul>
            </nav>
        </header>
    )
}